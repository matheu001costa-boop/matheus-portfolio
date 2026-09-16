import { SERVICES } from "../data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="border-y border-border-soft bg-bg-soft/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Como posso ajudar
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 60}
              className="rounded-2xl border border-border-soft bg-surface/40 p-6 transition-colors hover:border-accent/40"
            >
              <service.icon className="text-accent" size={24} />
              <h3 className="mt-4 font-display text-base font-semibold text-text">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
