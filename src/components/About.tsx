import { Search, Hammer, Workflow, Sparkle } from "lucide-react";
import { SITE } from "../data/site";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Search,
    title: "Entender o problema",
    description: "Antes de codar, entendo o contexto e o que realmente precisa ser resolvido.",
  },
  {
    icon: Hammer,
    title: "Desenvolver a solução",
    description: "Construo o sistema ou site com uma stack moderna e adequada ao problema.",
  },
  {
    icon: Workflow,
    title: "Automatizar processos",
    description: "Onde faz sentido, elimino tarefas manuais e repetitivas com automação.",
  },
  {
    icon: Sparkle,
    title: "Entregar uma experiência simples",
    description: "O resultado final precisa ser simples de usar, não só funcional.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Sobre
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {SITE.altRole}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
          {SITE.tagline}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.title}
            delay={i * 60}
            className="rounded-2xl border border-border-soft bg-surface/50 p-6 transition-colors hover:border-border"
          >
            <step.icon className="text-accent" size={22} />
            <h3 className="mt-4 font-display text-base font-semibold text-text">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
