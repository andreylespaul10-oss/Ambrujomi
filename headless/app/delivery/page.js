import LegalPage, { H } from "@/components/LegalPage";

export const metadata = { title: "Delivery & Contact — Bliss Glow" };

export default function Delivery() {
  return (
    <LegalPage title="Delivery & Contact">
      <H>Free UK delivery over £30</H>
      <p>Standard delivery is free on UK orders over £30, and £3.75 on smaller orders. Delivery typically takes 5–12 working days. Every parcel is tracked — your tracking link arrives by email as soon as it ships.</p>
      <H>Need it sooner?</H>
      <p>Express delivery is available at checkout for a small additional charge, for those times when you just can&apos;t wait to glow.</p>
      <H>Order processing</H>
      <p>Orders are processed within 24 hours, Monday to Saturday. During busy periods (such as holiday sales) please allow one extra day.</p>
      <H>Contact us</H>
      <p>
        Email <a href="mailto:contact@blissglow.store">contact@blissglow.store</a> and a
        real person — Ana from BlissGlow — replies within 24 hours, Monday to Saturday.
      </p>
    </LegalPage>
  );
}
