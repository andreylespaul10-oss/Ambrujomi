// Seção de avaliações — mostra reviews REAIS quando existirem.
// Enquanto não há nenhuma, exibe um estado vazio elegante ("seja o
// primeiro"). Nada é fabricado: avaliação falsa é ilegal no Reino Unido
// (DMCC Act 2024). Quando ligar um app de reviews (Wix), passe os dados
// reais em `reviews` e o resumo é calculado automaticamente.

function Stars({ value = 0 }) {
  return (
    <span className="stars" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" className={i <= Math.round(value) ? "on" : ""}>
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 21l1.2-6.5L2.5 9.9l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews({ productName = "this product", reviews = [] }) {
  const count = reviews.length;
  const avg = count ? reviews.reduce((s, r) => s + (r.rating || 0), 0) / count : 0;

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-head">
        <div>
          <span className="eyebrow">Customer reviews</span>
          <h2>What people say</h2>
        </div>
        <div className="reviews-score">
          <Stars value={avg} />
          <span className="rscore">
            {count ? avg.toFixed(1) : "—"}
            <small>{count ? `${count} review${count > 1 ? "s" : ""}` : "No reviews yet"}</small>
          </span>
        </div>
      </div>

      {count ? (
        <ul className="review-list">
          {reviews.map((r, i) => (
            <li className="review" key={i}>
              <div className="review-top">
                <Stars value={r.rating} />
                <b>{r.name}</b>
                {r.verified ? <span className="verified">✓ Verified buyer</span> : null}
              </div>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="review-empty">
          <p className="re-title">Be the first to review {productName}</p>
          <p className="re-sub">
            Bought this and loving it? Your honest review helps other shoppers glow
            with confidence. We&apos;ll email you a link to share your thoughts a
            few days after your parcel arrives.
          </p>
        </div>
      )}
    </section>
  );
}
