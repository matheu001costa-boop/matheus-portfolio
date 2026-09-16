import { TECHNOLOGIES } from "../data/technologies";
import Reveal from "./Reveal";

export default function Technologies() {
  return (
    <section id="tecnologias" className="border-y border-border-soft bg-bg-soft/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Tecnologias
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Stack que uso no dia a dia
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TECHNOLOGIES.map((tech, i) => (
            <Reveal
              key={tech.name}
              delay={(i % 8) * 40}
              className="group flex items-center justify-between rounded-xl border border-border-soft bg-surface/40 px-5 py-4 transition-colors hover:border-accent/50 hover:bg-surface"
            >
              <span className="font-medium text-text">{tech.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-text-faint transition-colors group-hover:text-accent">
                {tech.category}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
