import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";

// Google tag (gtag.js) — Google Ads / conversões do tráfego pago
const GOOGLE_ADS_ID = "AW-18320971501";

export const metadata = {
  title: "Bliss Glow — Premium Beauty & Wellness",
  description:
    "Salon-grade skincare tools and self-care essentials, with free UK delivery over £30. Glow is a ritual, not a chance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
        <Script id="tawkto" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a5e1f83096ab21d402a8879/1jtvqm6ko';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
        <div className="announce">
          FREE UK delivery on orders over £30 • Use code <b>GLOW10</b> for 10% off your first order
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
                Premium beauty &amp; wellness, delivered across the United
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
              <Link href="/delivery">Delivery — over £30 free</Link>
              <Link href="/refunds">30-day returns</Link>
              <a href="mailto:contact@blissglow.store">contact@blissglow.store</a>
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
