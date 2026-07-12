import LegalPage, { H } from "@/components/LegalPage";

export const metadata = { title: "Delivery & Contact — Bliss Glow" };

export default function Delivery() {
  return (
    <LegalPage title="Delivery & Contact">
      <H>Free UK delivery on every order</H>
      <p>Standard delivery is free on all UK orders with no minimum spend, and typically takes 2–4 working days. Every parcel is tracked — your tracking link arrives by email as soon as it ships.</p>
      <H>Order processing</H>
      <p>Orders are processed within 24 hours, Monday to Saturday. During busy periods (such as holiday sales) please allow one extra day.</p>
      <H>Contact us</H>
      <p>Email us and a real person — Ana from BlissGlow — replies within 24 hours, Monday to Saturday.</p>
    </LegalPage>
  );
}
