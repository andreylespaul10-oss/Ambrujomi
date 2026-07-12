import LegalPage, { H } from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy — Bliss Glow" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <H>What we collect</H>
      <p>When you shop with us we collect the information needed to fulfil your order: your name, delivery address, email address and order history. Payment details are processed by our payment provider and never stored by us.</p>
      <H>How we use it</H>
      <ul style={{ paddingLeft: "1.2rem" }}>
        <li>To process and deliver your orders and send tracking updates</li>
        <li>To answer support questions</li>
        <li>To send offers and news — only if you opt in, and you can unsubscribe at any time with one click</li>
      </ul>
      <H>Your rights (UK GDPR)</H>
      <p>You may request a copy of your data, ask us to correct it, or ask us to delete it at any time. We respond to all requests within 30 days. We never sell your personal data to third parties.</p>
      <H>Cookies</H>
      <p>We use essential cookies to keep your basket working, and analytics cookies (with your consent) to improve the shop. You can withdraw consent at any time.</p>
    </LegalPage>
  );
}
