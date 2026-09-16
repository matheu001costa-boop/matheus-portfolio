import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import Reveal from "./Reveal";

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="border-y border-border-soft bg-bg-soft/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Blog
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Programação, automação e IA
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2"
          >
            Ver todos os posts <ArrowRight size={14} />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface/40 p-6 transition-colors hover:border-accent/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-wide text-accent">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-text group-hover:text-accent">
                  {post.title}
                </h3>
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
    </section>
  );
}
