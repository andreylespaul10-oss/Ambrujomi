"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getBrowserClient, persistTokens } from "@/lib/wix-browser";
import { WIX_STORES_APP_ID } from "@/lib/wix";

export default function AddToCart({ productId }) {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const router = useRouter();

  async function add() {
    setBusy(true);
    setMsg(null);
    try {
      const client = getBrowserClient();
      await client.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: WIX_STORES_APP_ID,
              catalogItemId: productId,
            },
            quantity: 1,
          },
        ],
      });
      persistTokens(client);
      setMsg("ok");
      router.push("/cart");
    } catch (e) {
      console.error(e);
      setMsg("err");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={add} disabled={busy}>
        {busy ? "Adding…" : "Add to basket"}
      </button>
      {msg === "err" ? (
        <p className="errmsg">Something went wrong — please try again.</p>
      ) : null}
    </div>
  );
}
