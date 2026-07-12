import { getProducts } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export const revalidate = 300;

export const metadata = { title: "Shop — Bliss Glow" };

export default async function ShopPage() {
  let products = [];
  try {
    products = await getProducts();
  } catch (e) {
    console.error("Wix catalogue unavailable:", e?.message);
  }

  return (
    <section className="blk">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{products.length} products · free UK delivery</span>
            <h2>All products</h2>
          </div>
        </div>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
