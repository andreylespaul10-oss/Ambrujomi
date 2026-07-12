import LegalPage, { H } from "@/components/LegalPage";

export const metadata = { title: "Terms & Conditions — Bliss Glow" };

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        Welcome to Bliss Glow! By accessing and using our site (blissglow.store)
        and placing an order, you agree to be bound by the following terms and
        conditions.
      </p>

      <H>1. General information</H>
      <p>
        Bliss Glow is an online shop operating primarily in the United Kingdom.
        All transactions are processed in pounds sterling (£), with VAT included
        in the price shown.
      </p>

      <H>2. Payment methods</H>
      <p>
        We accept payment by credit and debit card, processed securely at
        checkout (Stripe · Apple Pay · Google Pay). Please make sure the payment
        details you provide are correct and that you are authorised to use the
        card. We never see or store your full card details.
      </p>

      <H>3. Loyalty programme</H>
      <p>
        We run a loyalty programme: after your third purchase, you receive a 10%
        discount on your next order. The discount is applied to the order that
        follows your third completed, non-refunded purchase.
      </p>

      <H>4. Delivery</H>
      <p>
        Delivery is free on every UK order and typically takes 2–4 working days.
        Products are sent to the address you provide at checkout — please check
        it carefully, as we cannot be held responsible for deliveries that fail
        because of an incorrect address. You will receive a tracking link by
        email as soon as your parcel ships.
      </p>

      <H>5. Returns &amp; refunds</H>
      <p>
        For returns and refunds, please see our Refund &amp; Return Policy. You
        have 30 days from delivery to return any unused item in its original
        packaging for a full refund.
      </p>

      <H>6. Use of the site</H>
      <p>
        You agree to use our site only for lawful purposes and in a way that does
        not infringe the rights of, or restrict or inhibit the use and enjoyment
        of this site by, any third party.
      </p>

      <H>7. Product information</H>
      <p>
        Our products are cosmetic and wellness items, not medical devices. Always
        read the included instructions and discontinue use if irritation occurs.
        If you have a medical skin condition, consult a GP or dermatologist first.
      </p>

      <H>8. Your statutory rights</H>
      <p>
        Nothing in these terms affects your statutory rights under the Consumer
        Rights Act 2015 and the Consumer Contracts Regulations 2013, including
        your 14-day right to cancel — which our 30-day return policy exceeds.
      </p>

      <H>9. Governing law</H>
      <p>
        These terms are governed by the laws of England and Wales, and any
        dispute relating to them will be subject to the courts of England and
        Wales. This does not remove any protection you have as a consumer under
        the law of your country of residence.
      </p>

      <H>10. Changes to these terms</H>
      <p>
        We reserve the right to update these terms at any time. Any changes will
        be published on this page.
      </p>

      <H>11. Contact</H>
      <p>
        Questions about these terms? Message us any time via the site chat or
        email — a real person (Ana from Bliss Glow) replies within 24 hours,
        Monday to Saturday.
      </p>
    </LegalPage>
  );
}
