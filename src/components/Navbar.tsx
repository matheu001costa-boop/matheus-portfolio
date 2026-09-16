import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/site";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const renderLink = (link: (typeof NAV_LINKS)[number]) => {
    const isAnchor = link.href.startsWith("#");
    if (isAnchor) {
      const href = isHome ? link.href : `/${link.href}`;
      return (
        <a
          key={link.label}
          href={href}
          className="text-sm font-medium text-text-muted transition-colors hover:text-text"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        className="text-sm font-medium text-text-muted transition-colors hover:text-text"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-text">
          Matheus<span className="text-gradient">.dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(renderLink)}
        </div>

        <a
          href={`mailto:${SITE.social.email}`}
          className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          Entrar em contato
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-soft bg-bg-soft px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("#");
              const mobileLinkClass =
                "rounded-lg px-3 py-3 text-base font-medium text-text-muted transition-colors hover:bg-surface hover:text-text";

              if (isAnchor) {
                const href = isHome ? link.href : `/${link.href}`;
                return (
                  <a key={link.label} href={href} className={mobileLinkClass}>
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.label} to={link.href} className={mobileLinkClass}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
