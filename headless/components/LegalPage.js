import Link from "next/link";

export default function LegalPage({ title, children }) {
  return (
    <div className="wrap">
      <div style={{ maxWidth: "70ch", margin: "0 auto", padding: "2.4rem 0 1rem" }}>
        <h1 style={{ fontSize: "clamp(1.7rem,5vw,2.3rem)", marginBottom: ".2rem" }}>{title}</h1>
        <p style={{ fontSize: ".78rem", color: "var(--grey)", marginBottom: "1.4rem" }}>
          Last updated: July 2026 · Bliss Glow · blissglow.store
        </p>
        {children}
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn btn-ghost" href="/">
            ← Back to shop
          </Link>
        </p>
      </div>
    </div>
  );
}

export function H({ children }) {
  return <h3 style={{ marginTop: "1.6rem", color: "var(--rose-deep)", fontSize: ".98rem" }}>{children}</h3>;
}
