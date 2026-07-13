"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { cartFetch } from "@/lib/cart-client";

function money(n) {
  return "£" + Number(n || 0).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function AddToCart({ productId, price, compareAt, options = [], variants = [] }) {
  const hasVariants = variants.length > 0;

  // Começa com a primeira variação em estoque já selecionada.
  const [selected, setSelected] = useState(() => {
    const first = variants.find((v) => v.inStock) || variants[0];
    const map = {};
    for (const c of first?.choices || []) map[c.option] = c.choice;
    return map;
  });
  const [qty, setQty] = useState(1);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);
  const router = useRouter();

  const variant = useMemo(() => {
    if (!hasVariants) return null;
    return (
      variants.find((v) => v.choices.every((c) => selected[c.option] === c.choice)) || null
    );
  }, [variants, selected, hasVariants]);

  const unitPrice = variant ? variant.price : price;
  const unitCompare = variant ? variant.compareAt : compareAt;
  const canBuy = !hasVariants || (variant && variant.inStock);

  function pick(option, choice) {
    setSelected((s) => ({ ...s, [option]: choice }));
  }

  async function add() {
    setBusy(true);
    setErr(false);
    try {
      await cartFetch({
        action: "add",
        productId,
        quantity: qty,
        variantId: variant?.id,
      });
      // Sinaliza "adicionou ao carrinho" ao Google Ads/Analytics
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "add_to_cart", {
          currency: "GBP",
          value: Number(unitPrice || 0) * qty,
          items: [
            {
              item_id: variant?.id || productId,
              price: Number(unitPrice || 0),
              quantity: qty,
            },
          ],
        });
      }
      router.push("/cart");
    } catch (e) {
      console.error(e);
      setErr(true);
      setBusy(false);
    }
  }

  return (
    <div>
      {unitPrice != null ? (
        <div className="pricing" style={{ margin: ".7rem 0" }}>
          <span className="now">{money(unitPrice * qty)}</span>
          {unitCompare ? <span className="was">{money(unitCompare * qty)}</span> : null}
          {qty > 1 ? (
            <span className="each">
              {qty} × {money(unitPrice)}
            </span>
          ) : null}
        </div>
      ) : null}

      {options.map((o) => (
        <div className="opt" key={o.name}>
          <span className="optlabel">
            {o.name}: <b>{selected[o.name] || "—"}</b>
          </span>
          <div className="optpills" role="radiogroup" aria-label={o.name}>
            {o.choices.map((c) => (
              <button
                key={c.name}
                type="button"
                role="radio"
                aria-checked={selected[o.name] === c.name}
                className={
                  "optpill" +
                  (selected[o.name] === c.name ? " on" : "") +
                  (c.inStock ? "" : " off")
                }
                onClick={() => pick(o.name, c.name)}
                disabled={busy}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      ))}

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
        <button className="btn btn-primary" onClick={add} disabled={busy || !canBuy}>
          {busy ? "Adding…" : canBuy ? "Add to basket" : "Out of stock"}
        </button>
      </div>
      {err ? (
        <p className="errmsg">Something went wrong — please try again.</p>
      ) : null}
    </div>
  );
}
