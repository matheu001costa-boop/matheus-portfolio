// ============================================================================
// CONFIGURAÇÃO DO SITE — edite os valores abaixo antes de publicar.
// Nenhum destes contatos foi informado por você ainda, então estão como
// placeholder. Troque pelos seus dados reais.
// ============================================================================

export const SITE = {
  name: "Matheus Costa",
  brand: "Matheus Costa Dev",
  role: "Desenvolvedor Python",
  // Forma alternativa de apresentação, usada na seção "Sobre".
  altRole: "Desenvolvedor Full Stack e Automação",
  keywords: "Automação • Sistemas Web • APIs • Inteligência Artificial",
  tagline:
    "Desenvolvedor focado em Python, automação, desenvolvimento web e criação de soluções digitais práticas.",
  heroSubtitle: "Desenvolvedor Python",
  available: true, // controla o badge "Disponível para novos projetos"

  // TODO: coloque o número no formato internacional, só dígitos (ex: 5511999999999)
  whatsappNumber: "SEU_NUMERO_WHATSAPP",
  whatsappMessage: "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.",

  social: {
    // GitHub já configurado com o link real informado.
    github: "https://github.com/matheu001costa-boop/matheus-portfolio",

    // TODO: substitua pelo seu link real do LinkedIn.
    linkedin: "https://linkedin.com/in/SEU_USUARIO",

    // ============================================================
    // 👉 INSTAGRAM: coloque aqui o link real do seu Instagram.
    // Troque APENAS o valor abaixo (ex: "https://instagram.com/matheuscosta")
    // Nenhum usuário foi inventado — o link continua como placeholder
    // até você preencher.
    // ============================================================
    instagram: "https://instagram.com/SEU_USUARIO", // INSTAGRAM_URL — troque aqui

    // TODO: substitua pelo seu e-mail real.
    email: "seuemail@exemplo.com",
  },
};

// Alias explícito para facilitar a localização do valor a ser editado.
export const INSTAGRAM_URL = SITE.social.instagram;

export const whatsappLink = (customMessage?: string) => {
  const msg = encodeURIComponent(customMessage ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${msg}`;
};
