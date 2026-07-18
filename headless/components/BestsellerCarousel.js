"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AUTO_MS = 3500;

function money(amount, currency) {
  const n = Number(amount || 0);
  const sym = currency === "GBP" ? "£" : currency === "EUR" ? "€" : "";
  return sym + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function BestsellerCarousel({ products = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = products.length;
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, count]);

  if (!count) return null;

  function go(i) {
    setIndex(((i % count) + count) % count);
  }

  return (
    <section
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Bestsellers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((p) => (
            <Link
              href={`/product/${p.slug}`}
              className="carousel-slide"
              key={p.id}
              aria-label={`${p.name}, ${money(p.price, "GBP")}`}
            >
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.imageAlt || p.name} />
              ) : (
                <div className="carousel-noimg" />
              )}
              <div className="carousel-caption">
                <span className="carousel-eyebrow">Bestseller</span>
                <b>{p.name}</b>
                <span className="carousel-price">
                  {p.priceRange ? `${money(p.price, "GBP")} – ${money(p.priceMax, "GBP")}` : money(p.price, "GBP")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            className="carousel-arrow prev"
            aria-label="Previous product"
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow next"
            aria-label="Next product"
            onClick={() => go(index + 1)}
          >
            ›
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Choose product">
            {products.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${p.name}`}
                className={"carousel-dot" + (i === index ? " on" : "")}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
