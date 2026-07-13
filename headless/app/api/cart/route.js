import { NextResponse } from "next/server";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
import { WIX_CLIENT_ID, WIX_STORES_APP_ID } from "@/lib/wix";

// Carrinho server-side: o navegador só fala com /api/cart e os tokens de
// visitante ficam num cookie httpOnly — nada de SDK nem localStorage no cliente.

export const dynamic = "force-dynamic";

const TOKENS_COOKIE = "bg_visitor_tokens";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 dias (vida do refresh token)

function readTokens(request) {
  try {
    const raw = request.cookies.get(TOKENS_COOKIE)?.value;
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

/**
 * Executa `fn(client)` com os tokens do cookie; se os tokens salvos estiverem
 * corrompidos/expirados, tenta uma vez com um visitante novo em vez de travar.
 */
async function withVisitor(request, fn) {
  const saved = readTokens(request);
  try {
    const client = makeClient(saved);
    const data = await fn(client);
    return { data, tokens: client.auth.getTokens() };
  } catch (e) {
    if (!saved) throw e;
    const fresh = makeClient(undefined);
    const data = await fn(fresh);
    return { data, tokens: fresh.auth.getTokens() };
  }
}

function respond(payload, tokens, status = 200) {
  const res = NextResponse.json(payload, { status });
  if (tokens) {
    res.cookies.set(TOKENS_COOKIE, JSON.stringify(tokens), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });
  }
  return res;
}

/* Converte wix:image:// em URL https simples. */
function mediaUrl(wixImage) {
  if (typeof wixImage !== "string") return null;
  if (wixImage.startsWith("http")) return wixImage;
  const m = wixImage.match(/^wix:image:\/\/v1\/([^/]+)\//);
  if (!m) return null;
  const url = `https://static.wixstatic.com/media/${m[1]}`;
  return process.env.PROXY_IMAGES === "1"
    ? "/api/img?u=" + encodeURIComponent(url)
    : url;
}

/* Forma enxuta e estável do carrinho para o front. */
function publicCart(cart) {
  if (!cart || !cart.lineItems?.length) return null;
  const lineItems = cart.lineItems.map((l) => ({
    id: l._id,
    name: l.productName?.original || String(l.productName || ""),
    quantity: l.quantity,
    price: Number(l.price?.amount || 0),
    image: mediaUrl(l.image),
  }));
  const subtotal =
    Number(cart.subtotal?.amount) ||
    lineItems.reduce((s, l) => s + l.price * l.quantity, 0);
  return {
    id: cart._id,
    currency: cart.currency || "GBP",
    lineItems,
    subtotal,
  };
}

function isCartNotFound(e) {
  return String(e?.message || e).includes("NOT_FOUND");
}

export async function GET(request) {
  try {
    const { data, tokens } = await withVisitor(request, async (client) => {
      try {
        return await client.currentCart.getCurrentCart();
      } catch (e) {
        if (isCartNotFound(e)) return null; // visitante ainda sem carrinho
        throw e;
      }
    });
    return respond({ cart: publicCart(data) }, tokens);
  } catch (e) {
    console.error("GET /api/cart", e);
    return NextResponse.json({ error: "cart_unavailable" }, { status: 502 });
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const action = body?.action;

  try {
    if (action === "add") {
      const quantity = Math.min(Math.max(parseInt(body.quantity, 10) || 1, 1), 99);
      if (!body.productId)
        return NextResponse.json({ error: "bad_request" }, { status: 400 });
      const { data, tokens } = await withVisitor(request, async (client) => {
        const res = await client.currentCart.addToCurrentCart({
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
        return res.cart;
      });
      return respond({ cart: publicCart(data) }, tokens);
    }

    if (action === "update") {
      const quantity = Math.min(Math.max(parseInt(body.quantity, 10) || 1, 1), 99);
      if (!body.lineItemId)
        return NextResponse.json({ error: "bad_request" }, { status: 400 });
      const { data, tokens } = await withVisitor(request, async (client) => {
        const res = await client.currentCart.updateCurrentCartLineItemQuantity([
          { _id: body.lineItemId, quantity },
        ]);
        return res.cart;
      });
      return respond({ cart: publicCart(data) }, tokens);
    }

    if (action === "remove") {
      if (!body.lineItemId)
        return NextResponse.json({ error: "bad_request" }, { status: 400 });
      const { data, tokens } = await withVisitor(request, async (client) => {
        const res = await client.currentCart.removeLineItemsFromCurrentCart([
          body.lineItemId,
        ]);
        return res.cart;
      });
      return respond({ cart: publicCart(data) }, tokens);
    }

    if (action === "checkout") {
      const origin =
        request.headers.get("origin") || new URL(request.url).origin;
      const { data, tokens } = await withVisitor(request, async (client) => {
        const { checkoutId } =
          await client.currentCart.createCheckoutFromCurrentCart({
            channelType: "WEB",
          });
        const { redirectSession } = await client.redirects.createRedirectSession({
          ecomCheckout: { checkoutId },
          callbacks: {
            postFlowUrl: origin,
            thankYouPageUrl: origin + "/?order=success",
          },
        });
        return redirectSession?.fullUrl;
      });
      if (!data)
        return NextResponse.json({ error: "checkout_failed" }, { status: 502 });
      return respond({ checkoutUrl: data }, tokens);
    }

    return NextResponse.json({ error: "unknown_action" }, { status: 400 });
  } catch (e) {
    console.error(`POST /api/cart (${action})`, e);
    return NextResponse.json({ error: "cart_unavailable" }, { status: 502 });
  }
}
