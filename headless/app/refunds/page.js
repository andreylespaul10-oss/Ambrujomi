import LegalPage, { H } from "@/components/LegalPage";

export const metadata = { title: "Refund & Return Policy — Bliss Glow" };

export default function Refunds() {
  return (
    <LegalPage title="Refund & Return Policy">
      <H>30-day returns, no questions asked</H>
      <p>If you are not completely happy with your purchase, you have 30 days from delivery to return any unused item in its original packaging for a full refund.</p>
      <H>How to start a return</H>
      <p>Message us via email with your order number. We will send you return instructions the same day. Returns are free for UK customers.</p>
      <H>Damaged or incorrect items</H>
      <p>If anything arrives damaged or incorrect, send us a photo within 48 hours of delivery and we will ship a free replacement or issue an immediate full refund — you will not need to return the item.</p>
      <H>Refund timing</H>
      <p>Refunds are issued to your original payment method within 3–5 working days of approval. Your statutory rights are not affected.</p>
    </LegalPage>
  );
}
