import { nav } from "@/data/profile";

export function Header() {
  return (
    <header className="header">
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
