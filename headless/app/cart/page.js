"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cartFetch } from "@/lib/cart-client";
import { FREE_SHIPPING_THRESHOLD, shippingFor } from "@/lib/shipping";

function money(amount, currency) {
  const n = Number(amount || 0);
  const sym = currency === "GBP" ? "£" : currency === "EUR" ? "€" : "";
  return sym + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [state, setState] = useState("loading"); // loading | ready | empty | error | checkout
  const [busyLine, setBusyLine] = useState(null);
  const [err, setErr] = useState(null);

  function applyCart(c) {
    if (!c || !c.lineItems?.length) {
      setCart(null);
      setState("empty");
    } else {
      setCart(c);
      setState("ready");
    }
  }

  useEffect(() => {
    cartFetch()
      .then((d) => applyCart(d.cart))
      .catch((e) => {
        console.error(e);
        setState("error");
      });
  }, []);

  async function changeQty(line, quantity) {
    if (quantity < 1 || quantity > 99) return;
    setBusyLine(line.id);
    try {
      const d = await cartFetch({ action: "update", lineItemId: line.id, quantity });
      applyCart(d.cart);
    } catch (e) {
      console.error(e);
    } finally {
      setBusyLine(null);
    }
  }

  async function removeItem(line) {
    setBusyLine(line.id);
    try {
      const d = await cartFetch({ action: "remove", lineItemId: line.id });
      applyCart(d.cart);
    } catch (e) {
      console.error(e);
    } finally {
      setBusyLine(null);
    }
  }

  async function checkout() {
    setState("checkout");
    setErr(null);
    try {
      // Sinaliza "iniciou checkout" ao Google Ads/Analytics — último evento
      // que capturamos no nosso domínio antes de ir pro pagamento na Wix.
      if (typeof window !== "undefined" && typeof window.gtag === "function" && cart) {
        window.gtag("event", "begin_checkout", {
          currency: cart.currency || "GBP",
          value: Number(cart.subtotal || 0),
          items: (cart.lineItems || []).map((l) => ({
            item_id: l.id,
            item_name: l.name,
            price: l.price,
            quantity: l.quantity,
          })),
        });
      }
      const d = await cartFetch({ action: "checkout" });
      if (!d.checkoutUrl) throw new Error("no_checkout_url");
      window.location.href = d.checkoutUrl;
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
            ? `Your basket is empty. Free UK delivery on orders over £${FREE_SHIPPING_THRESHOLD}. ✨`
            : "We couldn't load your basket — please refresh the page."}
        </p>
        <Link className="btn btn-primary" href="/shop">
          Back to shop
        </Link>
      </div>
    );

  const currency = cart.currency;
  const shipping = shippingFor(cart.subtotal);

  return (
    <div className="wrap cartpage">
      <h2>Your basket</h2>
      {cart.lineItems.map((l) => (
        <div className="cline" key={l.id}>
          {l.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={l.image} alt="" />
          ) : (
            <div />
          )}
          <div>
            <b>{l.name}</b>
            <br />
            {l.variant ? (
              <>
                <small>{l.variant}</small>
                <br />
              </>
            ) : null}
            <small>{money(l.price, currency)} each</small>
            <div className="qty qty-sm" aria-label="Quantity">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => changeQty(l, l.quantity - 1)}
                disabled={busyLine === l.id || l.quantity <= 1}
              >
                −
              </button>
              <span aria-live="polite">{l.quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => changeQty(l, l.quantity + 1)}
                disabled={busyLine === l.id}
              >
                +
              </button>
              <button
                className="rm"
                onClick={() => removeItem(l)}
                disabled={busyLine === l.id}
              >
                Remove
              </button>
            </div>
          </div>
          <b style={{ color: "var(--ink)" }}>
            {money(l.price * l.quantity, currency)}
          </b>
        </div>
      ))}
      <div className="sumbox">
        <div className="sumrow">
          <span>Subtotal</span>
          <span>{money(cart.subtotal, currency)}</span>
        </div>
        <div className="sumrow">
          <span>Delivery</span>
          {shipping === 0 ? (
            <span className="okmsg">FREE</span>
          ) : (
            <span>{money(shipping, currency)}</span>
          )}
        </div>
        {shipping > 0 ? (
          <p style={{ fontSize: ".76rem", color: "var(--grey)", margin: ".2rem 0 0" }}>
            Add {money(FREE_SHIPPING_THRESHOLD - cart.subtotal, currency)} more for free delivery
          </p>
        ) : null}
        <div className="sumrow total" style={{ marginTop: ".4rem" }}>
          <span>Total</span>
          <span>{money(cart.subtotal + shipping, currency)}</span>
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
