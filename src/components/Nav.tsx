import { NAV_LINKS, SITE } from "../content";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 border-b border-rule bg-black">
      <a
        href="#"
        className="font-bebas text-3xl tracking-widest text-white no-underline"
      >
        {SITE.name}
        <span className="block mt-[-4px] text-[12px] font-mono font-light tracking-[0.2em] text-grey uppercase">
          {SITE.tagline}
        </span>
      </a>
      <ul className="hidden md:flex list-none gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-grey no-underline transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
