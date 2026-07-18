// Fonte única da regra de frete do Reino Unido: grátis a partir de £30,
// senão taxa fixa de £3.75 (equivalente a ~$5 no câmbio de jul/2026).
export const FREE_SHIPPING_THRESHOLD = 30;
export const FLAT_SHIPPING_RATE = 3.75;

export function shippingFor(subtotal) {
  return Number(subtotal || 0) >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_RATE;
}
