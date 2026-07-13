"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    // TODO (Ana/Andrey): ligar num provedor de e-mail (Mailchimp/Wix)
    // para de fato capturar o contato. Por ora, confirma pro visitante.
    setDone(true);
  }

  return (
    <section className="newsletter">
      <div className="wrap">
        <div className="nl-card">
          <span className="eyebrow">Join the glow</span>
          <h2>10% off your first order</h2>
          <p>
            Be first to hear about new arrivals, self-care tips and members-only
            offers. Sign up and your welcome discount lands straight in your inbox.
          </p>
          {done ? (
            <p className="nl-thanks">
              ✓ You&apos;re in! Check your inbox for your 10% welcome code. 💛
            </p>
          ) : (
            <form className="nl-form" onSubmit={onSubmit}>
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Get 10% off
              </button>
            </form>
          )}
          <small className="nl-fine">
            No spam, ever. Unsubscribe any time. See our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </small>
        </div>
      </div>
    </section>
  );
}
