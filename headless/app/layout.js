import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Bliss Glow — Premium Beauty & Wellness",
  description:
    "Salon-grade skincare tools and self-care essentials with free UK delivery. Glow is a ritual, not a chance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <div className="announce">
          FREE UK delivery on every order • Use code <b>GLOW10</b> for 10% off
        </div>
        <header className="site">
          <div className="wrap bar">
            <Link className="logo" href="/">
              Bliss <em>Glow</em>
            </Link>
            <nav className="main" aria-label="Main">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
            </nav>
            <Link className="cartbtn" href="/cart">
              Basket
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site">
          <div className="wrap">
            <div>
              <div className="logo" style={{ marginBottom: ".5rem", color: "#fff" }}>
                Bliss <em style={{ color: "#FFE1EE" }}>Glow</em>
              </div>
              <p style={{ fontSize: ".84rem", maxWidth: "30ch", margin: 0 }}>
                Premium beauty &amp; wellness, delivered free across the United Kingdom.
              </p>
            </div>
            <div>
              <h4>Shop</h4>
              <Link href="/shop">All products</Link>
              <Link href="/cart">Basket</Link>
            </div>
            <div>
              <h4>Help</h4>
              <Link href="/delivery">Delivery — free, 2–4 days</Link>
              <Link href="/refunds">30-day returns</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="fin">© 2026 Bliss Glow · blissglow.store · Prices include VAT</div>
        </footer>
      </body>
    </html>
  );
}
