"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddToCart({ productId }) {
  const [qty, setQty] = useState(1);
  const [busy, setBusy] = useState(false);
  const [state, setState] = useState("idle"); // idle | added | error
  const router = useRouter();

  async function add() {
    setBusy(true);
    setState("idle");
    try {
      const r = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "add", productId, quantity: qty }),
      });
      const data = await r.json();
      if (!r.ok || !data.ok) throw new Error(data.error || "failed");
      setState("added");
      router.refresh();
    } catch (e) {
      console.error(e);
      setState("error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="atc">
      <div className="atc-row">
        <div className="qty" aria-label="Quantity">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={busy || qty <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span aria-live="polite">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(20, q + 1))}
            disabled={busy || qty >= 20}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button className="btn btn-primary" onClick={add} disabled={busy}>
          {busy ? "Adding…" : "Add to basket"}
        </button>
      </div>

      {state === "added" ? (
        <div className="atc-added">
          <span>✓ Added to your basket</span>
          <Link className="btn btn-ghost" href="/cart">
            View basket &amp; checkout →
          </Link>
        </div>
      ) : null}
      {state === "error" ? (
        <p className="errmsg">Something went wrong — please try again.</p>
      ) : null}
    </div>
  );
}
