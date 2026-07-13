"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/#bestsellers", label: "Bestsellers" },
  { href: "/delivery", label: "Delivery" },
  { href: "/refunds", label: "Returns" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Trava o scroll do fundo quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site">
      <div className="wrap bar">
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          Bliss <em>Glow</em>
        </Link>

        <nav className="main" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link className="cartbtn" href="/cart" aria-label="Basket">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 7h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <span>Basket</span>
        </Link>
      </div>

      {/* Menu mobile (drawer) */}
      <div className={`drawer${open ? " show" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="drawer-scrim" onClick={() => setOpen(false)} />
        <div className="drawer-panel">
          <div className="drawer-top">
            <span className="logo">
              Bliss <em>Glow</em>
            </span>
            <button className="drawer-x" aria-label="Close menu" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <nav className="drawer-nav" aria-label="Mobile">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)}>
              Basket
            </Link>
          </nav>
          <div className="drawer-foot">
            <p>Free UK delivery on every order</p>
            <Link href="/terms" onClick={() => setOpen(false)}>Terms</Link>
            <Link href="/privacy" onClick={() => setOpen(false)}>Privacy</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
