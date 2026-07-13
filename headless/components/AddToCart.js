"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function money(n) {
  return "£" + Number(n || 0).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function AddToCart({ productId, price, compareAt }) {
  const [qty, setQty] = useState(1);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);
  const router = useRouter();

  async function add() {
    setBusy(true);
    setErr(false);
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "add", productId, quantity: qty }),
      });
      if (!res.ok) throw new Error("add_failed");
      router.push("/cart");
    } catch (e) {
      console.error(e);
      setErr(true);
      setBusy(false);
    }
  }

  return (
    <div>
      {price != null ? (
        <div className="pricing" style={{ margin: ".7rem 0" }}>
          <span className="now">{money(price * qty)}</span>
          {compareAt ? <span className="was">{money(compareAt * qty)}</span> : null}
          {qty > 1 ? (
            <span className="each">
              {qty} × {money(price)}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="buyrow">
        <div className="qty" aria-label="Quantity">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={busy || qty <= 1}
          >
            −
          </button>
          <span aria-live="polite">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            disabled={busy || qty >= 10}
          >
            +
          </button>
        </div>
        <button className="btn btn-primary" onClick={add} disabled={busy}>
          {busy ? "Adding…" : "Add to basket"}
        </button>
      </div>
      {err ? (
        <p className="errmsg">Something went wrong — please try again.</p>
      ) : null}
    </div>
  );
}
