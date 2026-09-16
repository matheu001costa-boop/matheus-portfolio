import { useState, type FormEvent } from "react";
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "../data/site";
import Reveal from "./Reveal";

// Site 100% estático (sem backend): o formulário monta um e-mail pré-preenchido
// via mailto: e abre o cliente de e-mail do visitante. Se no futuro você quiser
// receber as mensagens sem o visitante precisar ter um cliente de e-mail
// configurado, integre um serviço como Formspree ou EmailJS aqui.

const CONTACT_LINKS = [
  { icon: MessageCircle, label: "WhatsApp", href: whatsappLink() },
  { icon: Github, label: "GitHub", href: SITE.social.github },
  { icon: Linkedin, label: "LinkedIn", href: SITE.social.linkedin },
  { icon: Instagram, label: "Instagram", href: SITE.social.instagram },
  { icon: Mail, label: "E-mail", href: `mailto:${SITE.social.email}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${SITE.social.email}?subject=${encodeURIComponent(
      form.subject || "Contato pelo portfólio",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contato
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Vamos construir algo juntos?
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-border-soft bg-surface/40 px-5 py-4 text-sm font-medium text-text transition-colors hover:border-accent/40"
            >
              <link.icon size={18} className="text-accent" />
              {link.label}
            </a>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border border-border-soft bg-surface/40 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none focus:border-accent"
            />
            <input
              required
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-border-soft bg-surface/40 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none focus:border-accent"
            />
            <input
              placeholder="Assunto"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="rounded-xl border border-border-soft bg-surface/40 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none focus:border-accent sm:col-span-2"
            />
            <textarea
              required
              rows={5}
              placeholder="Mensagem"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="resize-none rounded-xl border border-border-soft bg-surface/40 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none focus:border-accent sm:col-span-2"
            />
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] sm:col-span-2"
            >
              Enviar mensagem
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
