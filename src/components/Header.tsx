"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/profile";

/** 따라오는 헤더. 맨 위에서는 넉넉하게, 스크롤을 내리면 얇게 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="header" data-scrolled={scrolled || undefined}>
      <nav className="wrap nav" aria-label="주 메뉴">
        <a className="brand" href="#">
          fncberry<span>*</span>
        </a>
        <div className="navlinks">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
