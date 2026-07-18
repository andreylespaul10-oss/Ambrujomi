import Link from "next/link";
import { getProductsGroupedByCategory } from "@/lib/catalog";
import { CATEGORIES } from "@/lib/categories";
import ProductCard from "@/components/ProductCard";
import CategoryNav from "@/components/CategoryNav";

export const revalidate = 300;

export const metadata = { title: "Shop — Bliss Glow" };

export default async function ShopPage() {
  let groups = {};
  try {
    groups = await getProductsGroupedByCategory();
  } catch (e) {
    console.error("Wix catalogue unavailable:", e?.message);
  }
  const total = Object.values(groups).reduce((n, arr) => n + arr.length, 0);

  return (
    <section className="blk">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{total} products · free UK delivery over £30</span>
            <h2>Shop everything</h2>
          </div>
        </div>

        <CategoryNav active="all" />

        {CATEGORIES.map((c) => {
          const items = groups[c.slug] || [];
          if (!items.length) return null;
          return (
            <div className="catblock" key={c.slug} id={c.slug}>
              <div className="catblock-head">
                <h3>{c.name}</h3>
                <Link href={`/shop/${c.slug}`}>See all {c.name.toLowerCase()} →</Link>
              </div>
              <div className="grid">
                {items.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </div>
          );
        })}

        {!total ? (
          <p>Our catalogue is loading — please refresh in a moment.</p>
        ) : null}
      </div>
    </section>
  );
}
