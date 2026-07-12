import { createClient, OAuthStrategy, media } from "@wix/sdk";
import { productsV3 } from "@wix/stores";

// Client ID do OAuth app "BlissGlow Headless Frontend" criado no site
// BlissGlow (o client ID é público por natureza — sem segredo aqui).
export const WIX_CLIENT_ID =
  process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "9eaa6d35-f0b7-4b54-b913-5c7e2dc55d34";

// App ID do Wix Stores — usado no catalogReference do carrinho.
export const WIX_STORES_APP_ID = "215238eb-22a5-4c36-9e7b-e7c08025e04e";

/** Cliente server-side (leitura de catálogo). Um por request é suficiente. */
export function serverClient() {
  return createClient({
    modules: { productsV3 },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID }),
  });
}

/** Converte um wix:image:// URI em URL https utilizável. */
export function imageUrl(wixImage, width = 800, height = 800) {
  if (!wixImage) return null;
  try {
    return media.getScaledToFillImageUrl(wixImage, width, height, {});
  } catch {
    try {
      return media.getImageUrl(wixImage).url;
    } catch {
      return null;
    }
  }
}
