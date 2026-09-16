import { whatsappLink } from "../data/site";
import Reveal from "./Reveal";

export default function CommercialCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal
        className="relative overflow-hidden rounded-3xl border border-border-soft bg-surface/50 px-8 py-16 text-center sm:px-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, var(--color-accent), transparent 45%), radial-gradient(circle at 80% 80%, var(--color-accent-2), transparent 45%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-xl font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Tem uma ideia ou processo que poderia ser melhor?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-text-muted">
            Posso transformar sua ideia em uma solução digital.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-text px-7 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            Falar comigo
          </a>
        </div>
      </Reveal>
    </section>
  );
}
