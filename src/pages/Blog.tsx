import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import Reveal from "../components/Reveal";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Matheus Costa Dev";
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Blog
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Programação, automação e IA
        </h1>
        <p className="mt-4 max-w-xl text-text-muted">
          Textos sobre desenvolvimento, automação de processos e como usar IA no dia a dia
          de quem programa.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 4) * 60}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface/40 p-7 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-accent">
                {post.category}
              </span>
              <h2 className="mt-3 font-display text-lg font-semibold text-text group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text-faint group-hover:text-text">
                Ler post <ArrowRight size={13} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
