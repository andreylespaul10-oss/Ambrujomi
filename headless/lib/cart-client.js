"use client";

// Fala com /api/cart mantendo uma cópia dos tokens de visitante no
// localStorage e enviando-a num header — assim o carrinho sobrevive
// mesmo em navegadores que bloqueiam ou descartam cookies.

const KEY = "bg.visitorTokens.v2";

export async function cartFetch(payload) {
  const headers = {};
  try {
    const t = localStorage.getItem(KEY);
    if (t) headers["x-bg-tokens"] = t;
  } catch {}

  const init = payload
    ? {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    : { headers, cache: "no-store" };

  const res = await fetch("/api/cart", init);
  let data = null;
  try {
    data = await res.json();
  } catch {}

  if (data?.visitorTokens) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data.visitorTokens));
    } catch {}
  }
  if (!res.ok) throw new Error(data?.error || "cart_request_failed");
  return data;
}
