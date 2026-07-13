import { serverClient, imageUrl } from "./wix";
import { categorize } from "./categories";

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
    category: categorize(p.name),
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
      choices: (o.choicesSettings?.choices || [])
        .filter((c) => c.visible !== false)
        .map((c) => ({ name: c.name, inStock: c.inStock !== false })),
    })),
    // Variações (produtos DSers etc.): a Wix exige o variantId no carrinho.
    variants: (p.variantsInfo?.variants || [])
      .filter((v) => v.visible !== false)
      .map((v) => {
        const vPrice = Number(v.price?.actualPrice?.amount || 0);
        const vCompare = Number(v.price?.compareAtPrice?.amount || 0);
        return {
          id: v._id,
          price: vPrice,
          compareAt: vCompare > vPrice ? vCompare : null,
          inStock: v.inventoryStatus?.inStock !== false,
          image: img(imageUrl(v.media?.image, 800, 800)),
          choices: (v.choices || []).map((c) => ({
            option: c.optionChoiceNames?.optionName,
            choice: c.optionChoiceNames?.choiceName,
          })),
        };
      }),
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
  // getProductBySlug direto: só ele devolve variantsInfo (com variantId,
  // preço e estoque por variação), que o carrinho da Wix exige.
  const res = await client.productsV3.getProductBySlug(slug, {
    fields: ["MEDIA_ITEMS_INFO", "VARIANT_OPTION_CHOICE_NAMES"],
  });
  return res?.product ? mapProduct(res.product) : null;
}

/** Todos os produtos agrupados por slug de categoria. */
export async function getProductsGroupedByCategory() {
  const products = await getProducts();
  const groups = {};
  for (const p of products) {
    (groups[p.category] ||= []).push(p);
  }
  return groups;
}

/** Produtos de uma categoria específica. */
export async function getProductsByCategory(slug) {
  const products = await getProducts();
  return products.filter((p) => p.category === slug);
}
