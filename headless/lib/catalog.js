import { serverClient, imageUrl } from "./wix";

function money(v) {
  const n = Number(v || 0);
  return "£" + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function mapProduct(p) {
  const price = Number(p.actualPriceRange?.minValue?.amount || 0);
  const compare = Number(p.compareAtPriceRange?.minValue?.amount || 0);
  return {
    id: p._id || p.id,
    slug: p.slug,
    name: p.name,
    price,
    priceFmt: money(price),
    compareAt: compare > price ? compare : null,
    compareAtFmt: compare > price ? money(compare) : null,
    image: imageUrl(p.media?.main?.image, 800, 800),
    imageAlt: p.media?.main?.altText || p.name,
    description: p.plainDescription || "",
    ribbon: p.ribbon?.name || null,
    inStock: p.inventory?.availabilityStatus !== "OUT_OF_STOCK",
    options: (p.options || []).map((o) => ({
      name: o.name,
      choices: (o.choicesSettings?.choices || []).map((c) => c.name),
    })),
  };
}

/** Todos os produtos visíveis da loja (a Bliss Glow tem ~13, cabe numa página). */
export async function getProducts(limit = 100) {
  const client = serverClient();
  const res = await client.productsV3.queryProducts().limit(limit).find();
  return res.items.map(mapProduct);
}

export async function getProductBySlug(slug) {
  const client = serverClient();
  const res = await client.productsV3
    .queryProducts()
    .eq("slug", slug)
    .limit(1)
    .find();
  return res.items.length ? mapProduct(res.items[0]) : null;
}
