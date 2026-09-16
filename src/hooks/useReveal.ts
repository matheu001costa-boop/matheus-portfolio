import { useEffect, useRef } from "react";

/**
 * Adiciona a classe "is-visible" a um elemento quando ele entra na viewport.
 * Combinado com as classes utilitárias `.reveal` do index.css, cria uma
 * microinteração discreta de entrada, sem depender de bibliotecas externas.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
