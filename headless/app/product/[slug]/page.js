import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductsByCategory, getProducts } from "@/lib/catalog";
import { categoryBySlug } from "@/lib/categories";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const p = await getProductBySlug(params.slug).catch(() => null);
  return { title: p ? `${p.name} — Bliss Glow` : "Product — Bliss Glow" };
}

const PERKS = [
  { t: "Free UK delivery", s: "Tracked · 5–12 working days" },
  { t: "30-day returns", s: "Not for you? Send it back" },
  { t: "Secure checkout", s: "Stripe · Apple & Google Pay" },
];

const RITUAL = [
  "Start with clean, dry skin — a fresh canvas lets every product work harder.",
  "Use gently and consistently; a few mindful minutes a day beats an hour once a month.",
  "Follow with your favourite serum or moisturiser to lock in the glow.",
];

export default async function ProductPage({ params }) {
  const p = await getProductBySlug(params.slug).catch(() => null);
  if (!p) notFound();

  const cat = categoryBySlug(p.category);

  let related = [];
  try {
    const sameCat = (await getProductsByCategory(p.category)).filter((x) => x.id !== p.id);
    related = sameCat.length
      ? sameCat.slice(0, 4)
      : (await getProducts()).filter((x) => x.id !== p.id).slice(0, 4);
  } catch {}

  return (
    <div className="wrap">
      <p className="crumb">
        <Link href="/">Home</Link> / <Link href="/shop">Shop</Link>
        {cat ? (
          <>
            {" / "}
            <Link href={`/shop/${cat.slug}`}>{cat.name}</Link>
          </>
        ) : null}{" "}
        / {p.name}
      </p>

      <div className="pd">
        <div className="pd-art">
          {p.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.image} alt={p.imageAlt} />
          ) : null}
        </div>
        <div>
          {p.ribbon ? (
            <span className="badge" style={{ position: "static", display: "inline-block", marginBottom: ".6rem" }}>
              {p.ribbon}
            </span>
          ) : null}
          <h1 style={{ fontSize: "clamp(1.5rem,4.5vw,2.1rem)" }}>{p.name}</h1>
          {p.description ? <p style={{ maxWidth: "52ch" }}>{p.description}</p> : null}
          <AddToCart
            productId={p.id}
            price={p.price}
            compareAt={p.compareAt}
            options={p.options}
            variants={p.variants}
          />
          <div className="freeline">
            ✓ FREE UK delivery, 5–12 working days · 30-day returns
          </div>

          <ul className="perks">
            {PERKS.map((x) => (
              <li key={x.t}>
                <b>{x.t}</b>
                <span>{x.s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="ritual">
        <div className="ritual-inner">
          <span className="eyebrow">The Bliss Glow ritual</span>
          <h2>How to get the most from it</h2>
          <ol>
            {RITUAL.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className="ritual-note">
            Our products are cosmetic &amp; wellness items, not medical devices.
            If irritation occurs, discontinue use. With a skin condition, check
            with a GP or dermatologist first.
          </p>
        </div>
      </section>

      <Reviews productName={p.name} reviews={[]} />

      {related.length ? (
        <section className="blk">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Complete the ritual</span>
              <h2>You may also like</h2>
            </div>
          </div>
          <div className="grid">
            {related.map((x) => (
              <ProductCard key={x.id} p={x} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
