import Link from "next/link";
import { getProducts } from "@/lib/catalog";
import { wixMediaUrl, HERO_IMAGE_ID } from "@/lib/wix";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

export const revalidate = 300; // atualiza o catálogo a cada 5 minutos

const PROMISE = [
  {
    title: "Free UK delivery",
    body: "On every order, no minimum spend. Tracked, 5–12 working days.",
    icon: (
      <path d="M3 7h11v8H3V7Zm11 3h4l3 3v2h-7v-5ZM7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    ),
  },
  {
    title: "30-day returns",
    body: "Changed your mind? Send it back within 30 days for a full refund.",
    icon: (
      <path d="M4 12a8 8 0 1 1 2.3 5.6M4 12V7m0 5h5" />
    ),
  },
  {
    title: "Secure checkout",
    body: "Encrypted payments via Stripe, Apple Pay & Google Pay.",
    icon: (
      <path d="M6 10V8a6 6 0 1 1 12 0v2m-13 0h14v10H5V10Zm7 4v2" />
    ),
  },
  {
    title: "Real human care",
    body: "Ana replies within 24 hours, Monday to Saturday. Always a person.",
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    ),
  },
];

export default async function HomePage() {
  let products = [];
  try {
    products = await getProducts();
  } catch (e) {
    console.error("Wix catalogue unavailable:", e?.message);
  }
  const featured = products.slice(0, 8);
  const heroBanner = wixMediaUrl(HERO_IMAGE_ID, 1600, 970);

  return (
    <>
      <section className="hero-banner">
        <div className="wrap">
          {heroBanner ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="hero-banner-img"
              src={heroBanner}
              alt="Bliss Glow — Skincare, Beauty & Wellness. Care that reveals your best glow."
            />
          ) : null}
          <div className="hero-banner-cta">
            <Link className="btn btn-primary" href="/shop">
              Shop the collection
            </Link>
            <Link className="btn btn-ghost" href="/#bestsellers">
              View bestsellers
            </Link>
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
            <b>5–12 working days</b>
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

      <section className="blk" id="bestsellers">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Customer favourites</span>
              <h2>Bestsellers</h2>
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

      <section className="promise">
        <div className="wrap">
          <div className="sec-head center">
            <div>
              <span className="eyebrow">Why Bliss Glow</span>
              <h2>The Bliss Glow promise</h2>
            </div>
          </div>
          <div className="promise-grid">
            {PROMISE.map((p) => (
              <div className="promise-item" key={p.title}>
                <span className="promise-ico" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
