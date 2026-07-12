"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
import { WIX_CLIENT_ID } from "./wix";

const TOKENS_KEY = "blissglow.visitorTokens.v1";

let browserClient = null;

/** Cliente do navegador com tokens de visitante persistidos (carrinho sobrevive a reload). */
export function getBrowserClient() {
  if (browserClient) return browserClient;
  let tokens;
  try {
    tokens = JSON.parse(localStorage.getItem(TOKENS_KEY) || "null") || undefined;
  } catch {
    tokens = undefined;
  }
  browserClient = createClient({
    modules: { currentCart, redirects },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID, tokens }),
  });
  browserClient.auth.onTokensChanged?.((t) => {
    try {
      localStorage.setItem(TOKENS_KEY, JSON.stringify(t));
    } catch {}
  });
  return browserClient;
}

export function persistTokens(client) {
  try {
    localStorage.setItem(TOKENS_KEY, JSON.stringify(client.auth.getTokens()));
  } catch {}
}
