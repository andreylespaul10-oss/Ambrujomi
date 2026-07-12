"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getBrowserClient, persistTokens } from "@/lib/wix-browser";

function money(amount, currency) {
  const n = Number(amount || 0);
  const sym = currency === "GBP" ? "£" : currency === "EUR" ? "€" : "";
  return sym + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [state, setState] = useState("loading"); // loading | ready | empty | error | checkout
  const [err, setErr] = useState(null);

  async function load() {
    try {
      const client = getBrowserClient();
      const c = await client.currentCart.getCurrentCart();
      persistTokens(client);
      if (!c || !c.lineItems?.length) setState("empty");
      else {
        setCart(c);
        setState("ready");
      }
    } catch (e) {
      // "OWNED_CART_NOT_FOUND" = visitante ainda não tem carrinho
      if (String(e?.message || e).includes("NOT_FOUND")) setState("empty");
      else {
        console.error(e);
        setState("error");
      }
    }
  }
  useEffect(() => {
    load();
  }, []);

  async function removeItem(id) {
    try {
      const client = getBrowserClient();
      const res = await client.currentCart.removeLineItemsFromCurrentCart([id]);
      if (!res.cart?.lineItems?.length) setState("empty");
      else setCart(res.cart);
    } catch (e) {
      console.error(e);
    }
  }

  async function checkout() {
    setState("checkout");
    setErr(null);
    try {
      const client = getBrowserClient();
      const { checkoutId } = await client.currentCart.createCheckoutFromCurrentCart({
        channelType: "WEB",
      });
      const { redirectSession } = await client.redirects.createRedirectSession({
        ecomCheckout: { checkoutId },
        callbacks: {
          postFlowUrl: window.location.origin,
          thankYouPageUrl: window.location.origin + "/?order=success",
        },
      });
      window.location.href = redirectSession.fullUrl;
    } catch (e) {
      console.error(e);
      setErr("Could not open the secure checkout. Please try again.");
      setState("ready");
    }
  }

  if (state === "loading")
    return (
      <div className="wrap cartpage">
        <h2>Your basket</h2>
        <p>Loading…</p>
      </div>
    );

  if (state === "empty" || state === "error")
    return (
      <div className="wrap cartpage">
        <h2>Your basket</h2>
        <p>
          {state === "empty"
            ? "Your basket is empty. Every order ships free across the UK. ✨"
            : "We couldn't load your basket — please refresh the page."}
        </p>
        <Link className="btn btn-primary" href="/shop">
          Back to shop
        </Link>
      </div>
    );

  const currency = cart.currency || "GBP";
  const subtotal = cart.subtotal?.amount ?? cart.lineItems.reduce(
    (s, l) => s + Number(l.price?.amount || 0) * l.quantity,
    0
  );

  return (
    <div className="wrap cartpage">
      <h2>Your basket</h2>
      {cart.lineItems.map((l) => (
        <div className="cline" key={l._id}>
          {l.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={mediaUrl(l.image)} alt="" />
          ) : (
            <div />
          )}
          <div>
            <b>{l.productName?.original || l.productName}</b>
            <br />
            <small>
              {l.quantity} × {money(l.price?.amount, currency)}
            </small>
            <br />
            <button className="rm" onClick={() => removeItem(l._id)}>
              Remove
            </button>
          </div>
          <b style={{ color: "var(--ink)" }}>
            {money(Number(l.price?.amount || 0) * l.quantity, currency)}
          </b>
        </div>
      ))}
      <div className="sumbox">
        <div className="sumrow">
          <span>Subtotal</span>
          <span>{money(subtotal, currency)}</span>
        </div>
        <div className="sumrow">
          <span>Delivery</span>
          <span className="okmsg">FREE</span>
        </div>
        <div className="sumrow total" style={{ marginTop: ".4rem" }}>
          <span>Total</span>
          <span>{money(subtotal, currency)}</span>
        </div>
        {err ? <p className="errmsg">{err}</p> : null}
        <button
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "1rem" }}
          onClick={checkout}
          disabled={state === "checkout"}
        >
          {state === "checkout" ? "Opening secure checkout…" : "Checkout securely"}
        </button>
        <p style={{ fontSize: ".74rem", color: "var(--grey)", textAlign: "center" }}>
          Coupons (GLOW10, WELCOME15) can be applied on the checkout page.
        </p>
      </div>
    </div>
  );
}

/* Converte wix:image:// em URL https simples */
function mediaUrl(wixImage) {
  if (typeof wixImage !== "string") return "";
  if (wixImage.startsWith("http")) return wixImage;
  const m = wixImage.match(/^wix:image:\/\/v1\/([^/]+)\//);
  return m ? `https://static.wixstatic.com/media/${m[1]}` : "";
}
