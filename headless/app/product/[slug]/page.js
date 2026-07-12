import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/catalog";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const p = await getProductBySlug(params.slug).catch(() => null);
  return { title: p ? `${p.name} — Bliss Glow` : "Product — Bliss Glow" };
}

export default async function ProductPage({ params }) {
  const p = await getProductBySlug(params.slug).catch(() => null);
  if (!p) notFound();

  let related = [];
  try {
    related = (await getProducts()).filter((x) => x.id !== p.id).slice(0, 4);
  } catch {}

  return (
    <div className="wrap">
      <p className="crumb">
        <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / {p.name}
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
          <div className="pricing" style={{ margin: ".7rem 0" }}>
            <span className="now">{p.priceFmt}</span>
            {p.compareAtFmt ? <span className="was">{p.compareAtFmt}</span> : null}
          </div>
          {p.description ? <p style={{ maxWidth: "52ch" }}>{p.description}</p> : null}
          <AddToCart productId={p.id} />
          <div className="freeline">
            ✓ FREE UK delivery, 2–4 working days · 30-day returns
          </div>
        </div>
      </div>
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
