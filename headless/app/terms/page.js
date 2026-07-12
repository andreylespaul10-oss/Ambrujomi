import LegalPage, { H } from "@/components/LegalPage";

export const metadata = { title: "Terms & Conditions — Bliss Glow" };

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions">
      <H>1. About us</H>
      <p>Bliss Glow (blissglow.store) is an online retailer of beauty and wellness products serving customers in the United Kingdom. By placing an order you agree to these terms.</p>
      <H>2. Orders &amp; payment</H>
      <p>All prices are shown in pounds sterling (GBP) and include VAT. Payment is taken securely at checkout — we accept major credit and debit cards, PayPal, Apple Pay and Google Pay. We never see or store your full card details.</p>
      <H>3. Delivery</H>
      <p>Delivery is free on every UK order and typically takes 2–4 working days. You will receive a tracking link by email as soon as your parcel ships.</p>
      <H>4. Your rights</H>
      <p>Nothing in these terms affects your statutory rights under the Consumer Rights Act 2015 and the Consumer Contracts Regulations 2013, including your 14-day right to cancel — which our 30-day return policy exceeds.</p>
      <H>5. Product information</H>
      <p>Our products are cosmetic and wellness items, not medical devices. Always read the included instructions and discontinue use if irritation occurs. If you have a medical skin condition, consult a GP or dermatologist first.</p>
      <H>6. Contact</H>
      <p>Questions about these terms? Message us any time via email — we reply within 24 hours, Monday to Saturday.</p>
    </LegalPage>
  );
}
