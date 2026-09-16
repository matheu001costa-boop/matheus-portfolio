import { Github, Terminal, CheckCircle2, BookOpen } from "lucide-react";
import { AUTOMATION_PROJECTS, projectCodeUrl, projectReadmeUrl } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Projetos
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Projetos de Automação
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
          Automações em Python reais e executáveis, com código-fonte aberto no
          GitHub. Cada projeto roda localmente via linha de comando — o card
          abaixo mostra exatamente como executar.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AUTOMATION_PROJECTS.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 60}
            className="flex min-w-0 flex-col justify-between rounded-2xl border border-border-soft bg-surface/50 p-6 transition-colors hover:border-accent/40"
          >
            <div>
              <h3 className="font-display text-lg font-semibold text-text">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-soft px-2.5 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-text-muted">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <details className="group mt-5 rounded-xl border border-border-soft bg-bg-soft/60 px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold text-text-muted marker:content-none">
                  <Terminal size={14} className="text-accent" />
                  Como executar localmente
                </summary>
                <pre className="mt-3 overflow-x-auto rounded-lg bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-text-muted">
                  {project.howToRun.join("\n")}
                </pre>
              </details>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={projectReadmeUrl(project.repoPath)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
              >
                <BookOpen size={15} /> Ver projeto
              </a>
              <a
                href={projectCodeUrl(project.repoPath)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2"
              >
                <Github size={15} /> Código
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
