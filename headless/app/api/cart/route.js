import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
import { WIX_CLIENT_ID, WIX_STORES_APP_ID } from "@/lib/wix";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE = "bg_wixtok";

// Lê os tokens de visitante do cookie (httpOnly) — o carrinho vive aqui,
// no servidor, e não depende de nada frágil no navegador.
function readTokens() {
  try {
    const raw = cookies().get(COOKIE)?.value;
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

function makeClient(tokens) {
  return createClient({
    modules: { currentCart, redirects },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID, tokens }),
  });
}

function saveTokens(res, client) {
  try {
    const t = client.auth.getTokens();
    if (t) {
      res.cookies.set(COOKIE, JSON.stringify(t), {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    }
  } catch {}
}

function lineImage(l) {
  const src = l.image || l.media?.image || "";
  if (typeof src !== "string") return null;
  if (src.startsWith("http")) return src;
  const m = src.match(/wix:image:\/\/v1\/([^/]+)/);
  return m ? `https://static.wixstatic.com/media/${m[1]}` : null;
}

function summarize(cart) {
  if (!cart) return { items: [], count: 0, subtotal: 0, currency: "GBP" };
  const items = (cart.lineItems || []).map((l) => ({
    id: l._id,
    name: l.productName?.original || l.productName || "Item",
    quantity: l.quantity,
    price: Number(l.price?.amount || 0),
    image: lineImage(l),
  }));
  const subtotal = Number(
    cart.subtotal?.amount ?? items.reduce((s, i) => s + i.price * i.quantity, 0)
  );
  return {
    currency: cart.currency || "GBP",
    items,
    count: items.reduce((s, i) => s + i.quantity, 0),
    subtotal,
  };
}

function emptyIfNotFound(e) {
  if (String(e?.message || e).includes("NOT_FOUND")) return null;
  throw e;
}

// GET → estado atual do carrinho
export async function GET() {
  const client = makeClient(readTokens());
  let cart = null;
  try {
    cart = await client.currentCart.getCurrentCart();
  } catch (e) {
    cart = emptyIfNotFound(e);
  }
  const res = NextResponse.json(summarize(cart));
  saveTokens(res, client);
  return res;
}

// POST → { action: "add" | "remove" | "checkout", ... }
export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const client = makeClient(readTokens());

  try {
    if (body.action === "add") {
      const quantity = Math.max(1, Math.min(20, Number(body.quantity) || 1));
      const { cart } = await client.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: WIX_STORES_APP_ID,
              catalogItemId: body.productId,
            },
            quantity,
          },
        ],
      });
      const res = NextResponse.json({ ok: true, ...summarize(cart) });
      saveTokens(res, client);
      return res;
    }

    if (body.action === "remove") {
      const { cart } = await client.currentCart.removeLineItemsFromCurrentCart([body.lineItemId]);
      const res = NextResponse.json({ ok: true, ...summarize(cart) });
      saveTokens(res, client);
      return res;
    }

    if (body.action === "checkout") {
      const { checkoutId } = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      const origin = body.origin || req.nextUrl.origin;
      const { redirectSession } = await client.redirects.createRedirectSession({
        ecomCheckout: { checkoutId },
        callbacks: {
          postFlowUrl: origin + "/cart",
          thankYouPageUrl: origin + "/?order=success",
        },
      });
      const res = NextResponse.json({ ok: true, url: redirectSession?.fullUrl });
      saveTokens(res, client);
      return res;
    }

    return NextResponse.json({ ok: false, error: "unknown action" }, { status: 400 });
  } catch (e) {
    console.error("cart API error:", e?.message);
    return NextResponse.json(
      { ok: false, error: e?.message || "cart error" },
      { status: 500 }
    );
  }
}
