import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-text">{SITE.brand}</p>
          <p className="mt-1 text-xs text-text-faint">
            Desenvolvedor Python • Automação • APIs • Inteligência Artificial
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-faint transition-colors hover:text-text">
            <Github size={17} />
          </a>
          <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-faint transition-colors hover:text-text">
            <Linkedin size={17} />
          </a>
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-faint transition-colors hover:text-text">
            <Instagram size={17} />
          </a>
          <a href={`mailto:${SITE.social.email}`} aria-label="E-mail" className="text-text-faint transition-colors hover:text-text">
            <Mail size={17} />
          </a>
        </div>

        <p className="text-xs text-text-faint">
          © {year} {SITE.brand}
        </p>
      </div>
    </footer>
  );
}
