import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";

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
          FREE UK delivery on every order • Use code <b>GLOW10</b> for 10% off your first order
        </div>
        <Header />
        <main>{children}</main>
        <ChatWidget />
        <footer className="site">
          <div className="wrap">
            <div className="foot-brand">
              <div className="logo" style={{ marginBottom: ".5rem", color: "#fff" }}>
                Bliss <em style={{ color: "#FFE1EE" }}>Glow</em>
              </div>
              <p style={{ fontSize: ".84rem", maxWidth: "32ch", margin: "0 0 1rem" }}>
                Premium beauty &amp; wellness, delivered free across the United
                Kingdom. Glow is a ritual, not a chance.
              </p>
              <div className="pay" aria-label="Accepted payment methods">
                <span>VISA</span>
                <span>Mastercard</span>
                <span>AMEX</span>
                <span>Apple&nbsp;Pay</span>
                <span>Google&nbsp;Pay</span>
              </div>
            </div>
            <div>
              <h4>Shop</h4>
              <Link href="/shop">All products</Link>
              <Link href="/#bestsellers">Bestsellers</Link>
              <Link href="/cart">Basket</Link>
            </div>
            <div>
              <h4>Help</h4>
              <Link href="/delivery">Delivery — free, 5–12 days</Link>
              <Link href="/refunds">30-day returns</Link>
              <Link href="/delivery">Contact us</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/refunds">Refund Policy</Link>
            </div>
          </div>
          <div className="fin">
            © 2026 Bliss Glow · blissglow.store · Prices include VAT where applicable
          </div>
        </footer>
      </body>
    </html>
  );
}
