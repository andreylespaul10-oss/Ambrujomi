import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

// Pills de navegação por categoria. `active` = slug atual (ou "all").
export default function CategoryNav({ active = "all" }) {
  return (
    <nav className="catnav" aria-label="Categories">
      <Link className={`cat-pill${active === "all" ? " on" : ""}`} href="/shop">
        All products
      </Link>
      {CATEGORIES.map((c) => (
        <Link
          key={c.slug}
          className={`cat-pill${active === c.slug ? " on" : ""}`}
          href={`/shop/${c.slug}`}
        >
          {c.name}
        </Link>
      ))}
    </nav>
  );
}
