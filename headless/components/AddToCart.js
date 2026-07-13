"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCart({ productId }) {
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
