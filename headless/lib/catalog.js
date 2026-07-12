import { serverClient, imageUrl } from "./wix";

// Em ambientes onde o navegador não alcança o CDN do Wix (PROXY_IMAGES=1),
// as imagens passam pelo nosso servidor via /api/img.
function img(url) {
  if (!url) return null;
  return process.env.PROXY_IMAGES === "1"
    ? "/api/img?u=" + encodeURIComponent(url)
    : url;
}

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
    image: img(imageUrl(p.media?.main?.image, 800, 800)),
    imageAlt: p.media?.main?.altText || p.name,
    // 2ª foto da galeria (se a Ana adicionar no Wix) → efeito hover
    image2: (() => {
      const items = p.media?.itemsInfo?.items || [];
      const gallery = items.filter((i) => i.image).map((i) => i.image);
      return gallery.length > 1 ? img(imageUrl(gallery[1], 800, 800)) : null;
    })(),
    description: p.plainDescription || "",
    ribbon: p.ribbon?.name || null,
    inStock: p.inventory?.availabilityStatus !== "OUT_OF_STOCK",
    options: (p.options || []).map((o) => ({
      name: o.name,
      choices: (o.choicesSettings?.choices || []).map((c) => c.name),
    })),
  };
}

// MEDIA_ITEMS_INFO traz a galeria completa de fotos (não só a principal),
// necessária para o efeito de trocar a foto ao passar o mouse.
const WITH_GALLERY = { fields: ["MEDIA_ITEMS_INFO"] };

/** Todos os produtos visíveis da loja. */
export async function getProducts(limit = 100) {
  const client = serverClient();
  const res = await client.productsV3.queryProducts(WITH_GALLERY).limit(limit).find();
  return res.items.map(mapProduct);
}

export async function getProductBySlug(slug) {
  const client = serverClient();
  const res = await client.productsV3
    .queryProducts(WITH_GALLERY)
    .eq("slug", slug)
    .limit(1)
    .find();
  return res.items.length ? mapProduct(res.items[0]) : null;
}
