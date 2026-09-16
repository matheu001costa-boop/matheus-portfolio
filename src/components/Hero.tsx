import { Github, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { SITE, whatsappLink } from "../data/site";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="topo"
      className="bg-grid relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* glow de fundo, sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />

      <div className="reveal relative mx-auto flex w-full max-w-2xl flex-col items-center px-5 text-center sm:px-8">
        {/* Foto de perfil — circular, centralizada, com borda sutil */}
        <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full opacity-40 blur-2xl"
            style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
          />
          <img
            src={profilePhoto}
            alt={SITE.name}
            width={176}
            height={176}
            className="relative h-full w-full rounded-full border-2 border-border-soft object-cover shadow-2xl ring-2 ring-bg"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>

        {SITE.available && (
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponível para novos projetos
          </span>
        )}

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
          {SITE.name}
        </h1>
        <p className="mt-3 font-display text-xl font-medium text-text-muted sm:text-2xl">
          {SITE.role}
        </p>
        <p className="mt-4 text-sm font-medium tracking-wide text-accent sm:text-base">
          {SITE.keywords}
        </p>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
          {SITE.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            Ver projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            <MessageCircle size={16} />
            Entrar em contato
          </a>
        </div>

        {/* Área de redes sociais — GitHub | Instagram */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SITE.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/40 px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent/40 hover:text-text"
          >
            <Github size={17} />
            GitHub
          </a>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/40 px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent/40 hover:text-text"
          >
            <Instagram size={17} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
