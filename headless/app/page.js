import Link from "next/link";
import { getProducts } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export const revalidate = 300; // atualiza o catálogo a cada 5 minutos

export default async function HomePage() {
  let products = [];
  try {
    products = await getProducts();
  } catch (e) {
    console.error("Wix catalogue unavailable:", e?.message);
  }
  const featured = products.slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Premium beauty &amp; wellness · UK</span>
            <h1>
              Glow is a ritual,
              <br />
              not a chance.
            </h1>
            <p className="lead">
              Salon-grade skincare tools and self-care essentials, hand-picked and
              delivered free to your door anywhere in the UK.
            </p>
            <div className="cta">
              <Link className="btn btn-primary" href="/shop">
                Shop the collection
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            ✨
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="wrap">
          <div>
            <b>Free UK delivery</b>
            <span>on every order</span>
          </div>
          <div>
            <b>2–4 working days</b>
            <span>tracked shipping</span>
          </div>
          <div>
            <b>30-day returns</b>
            <span>no questions asked</span>
          </div>
          <div>
            <b>Secure checkout</b>
            <span>Stripe · Apple Pay</span>
          </div>
        </div>
      </div>

      <section className="blk">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Customer favourites</span>
              <h2>Best sellers</h2>
            </div>
            <Link href="/shop">View all →</Link>
          </div>
          {featured.length ? (
            <div className="grid">
              {featured.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <p>Our catalogue is loading — please refresh in a moment.</p>
          )}
        </div>
      </section>
    </>
  );
}
