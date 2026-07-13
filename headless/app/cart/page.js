"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function money(amount, currency) {
  const n = Number(amount || 0);
  const sym = currency === "GBP" ? "£" : currency === "EUR" ? "€" : "£";
  return sym + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [state, setState] = useState("loading"); // loading | ready | empty | error | checkout
  const [err, setErr] = useState(null);

  async function refresh() {
    try {
      const r = await fetch("/api/cart", { cache: "no-store" });
      const data = await r.json();
      if (!data.items || !data.items.length) {
        setState("empty");
      } else {
        setCart(data);
        setState("ready");
      }
    } catch (e) {
      console.error(e);
      setState("error");
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function removeItem(id) {
    try {
      const r = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "remove", lineItemId: id }),
      });
      const data = await r.json();
      if (!data.items || !data.items.length) setState("empty");
      else setCart(data);
    } catch (e) {
      console.error(e);
    }
  }

  async function checkout() {
    setState("checkout");
    setErr(null);
    try {
      const r = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "checkout", origin: window.location.origin }),
      });
      const data = await r.json();
      if (!r.ok || !data.ok || !data.url) throw new Error(data.error || "no url");
      window.location.href = data.url;
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

  return (
    <div className="wrap cartpage">
      <h2>Your basket</h2>
      {cart.items.map((l) => (
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
            <small>
              {l.quantity} × {money(l.price, currency)}
            </small>
            <br />
            <button className="rm" onClick={() => removeItem(l.id)}>
              Remove
            </button>
          </div>
          <b style={{ color: "var(--ink)" }}>{money(l.price * l.quantity, currency)}</b>
        </div>
      ))}
      <div className="sumbox">
        <div className="sumrow">
          <span>Subtotal</span>
          <span>{money(cart.subtotal, currency)}</span>
        </div>
        <div className="sumrow">
          <span>Delivery</span>
          <span className="okmsg">FREE</span>
        </div>
        <div className="sumrow total" style={{ marginTop: ".4rem" }}>
          <span>Total</span>
          <span>{money(cart.subtotal, currency)}</span>
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
