// Categorias da loja. Como o catálogo Wix (V3) ainda não tem categorias
// configuradas, derivamos a categoria de cada produto pelo nome — de forma
// determinística. Quando a Ana/Andrey criarem categorias reais na Wix,
// basta trocar categorize() por uma leitura de p.mainCategoryId.

export const CATEGORIES = [
  {
    slug: "skincare",
    name: "Skincare",
    blurb: "Serums, masks & facial treatments for a visibly brighter, healthier glow.",
  },
  {
    slug: "tools",
    name: "Tools & Rollers",
    blurb: "Gua sha, rollers & brushes — the sculpting rituals loved by facialists.",
  },
  {
    slug: "body",
    name: "Body & Bath",
    blurb: "Soaps, scrubs, bath rituals & fragrance to nourish from head to toe.",
  },
  {
    slug: "wellness",
    name: "Wellness & Sleep",
    blurb: "Massage, aromatherapy & rest — self-care beyond the bathroom shelf.",
  },
  {
    slug: "hair",
    name: "Hair & Scalp",
    blurb: "Heatless styling & scalp care for healthy, happy hair.",
  },
];

// A ordem importa: a primeira regra que casar vence. Regras mais específicas
// vêm antes; "skincare" é o padrão para produtos de rosto.
const RULES = [
  { slug: "hair", kw: ["curl", "scalp", "hair"] },
  { slug: "wellness", kw: ["massager", "diffuser", "aromatherapy", "sleep", "neck", "relax"] },
  { slug: "body", kw: ["soap", "bath", "exfoliat", "glove", "foot", "bronzer", "soak", "scrub", "loose powder", "edt", "1 million", "cologne", "perfume", "fragrance", "body wash", "shower"] },
  { slug: "tools", kw: ["gua sha", "roller", "cleansing brush", "body brush", "ice"] },
];

/** Devolve o slug da categoria de um produto a partir do nome. */
export function categorize(name = "") {
  const n = String(name).toLowerCase();
  for (const r of RULES) {
    if (r.kw.some((k) => n.includes(k))) return r.slug;
  }
  return "skincare";
}

/** Metadados de exibição de uma categoria pelo slug. */
export function categoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || null;
}
