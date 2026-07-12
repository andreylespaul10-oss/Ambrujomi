import Link from "next/link";

export default function ProductCard({ p }) {
  return (
    <article className="pcard">
      <Link className="part" href={`/product/${p.slug}`}>
        {p.ribbon ? <span className="badge">{p.ribbon}</span> : null}
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="main" src={p.image} alt={p.imageAlt} loading="lazy" />
        ) : null}
        {p.image2 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="alt" src={p.image2} alt="" aria-hidden="true" loading="lazy" />
        ) : null}
      </Link>
      <div className="pbody">
        <h3>
          <Link href={`/product/${p.slug}`}>{p.name}</Link>
        </h3>
        <div className="pricing">
          <span className="now">{p.priceFmt}</span>
          {p.compareAtFmt ? <span className="was">{p.compareAtFmt}</span> : null}
        </div>
      </div>
    </article>
  );
}
