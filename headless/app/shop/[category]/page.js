import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/lib/catalog";
import { CATEGORIES, categoryBySlug } from "@/lib/categories";
import ProductCard from "@/components/ProductCard";
import CategoryNav from "@/components/CategoryNav";

export const revalidate = 300;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const cat = categoryBySlug(params.category);
  return { title: cat ? `${cat.name} — Bliss Glow` : "Shop — Bliss Glow" };
}

export default async function CategoryPage({ params }) {
  const cat = categoryBySlug(params.category);
  if (!cat) notFound();

  let products = [];
  try {
    products = await getProductsByCategory(cat.slug);
  } catch (e) {
    console.error("Wix catalogue unavailable:", e?.message);
  }

  return (
    <section className="blk">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{products.length} products · free UK delivery over £30</span>
            <h2>{cat.name}</h2>
            <p className="cat-blurb">{cat.blurb}</p>
          </div>
        </div>

        <CategoryNav active={cat.slug} />

        {products.length ? (
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <p>No products in this category yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
