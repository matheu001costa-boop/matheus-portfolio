import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import Reveal from "../components/Reveal";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | Matheus Costa Dev`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <Reveal>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={14} /> Voltar para o blog
        </Link>

        <span className="mt-8 block font-mono text-xs uppercase tracking-wide text-accent">
          {post.category}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {post.title}
        </h1>

        <div className="prose-content mt-8 flex flex-col gap-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
