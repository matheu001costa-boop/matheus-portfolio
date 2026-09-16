export type BlogCategory =
  | "Programação"
  | "Inteligência Artificial"
  | "Automação"
  | "Desenvolvimento Web"
  | "Ferramentas para Programadores"
  | "Como ganhar dinheiro com programação";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  // Conteúdo inicial curto e genérico — expanda com sua experiência real
  // antes de publicar para valorizar o SEO e a autoridade do texto.
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-comecar-a-programar-pelo-celular",
    title: "Como começar a programar pelo celular",
    category: "Programação",
    excerpt:
      "Aplicativos, editores online e um caminho de estudo para dar os primeiros passos na programação usando apenas o smartphone.",
    content: [
      "Programar pelo celular deixou de ser algo raro. Hoje existem editores online, apps de curso interativo e ambientes de execução na nuvem que permitem escrever e rodar código direto do navegador do smartphone, sem instalar nada.",
      "O caminho mais simples costuma ser: escolher uma linguagem acessível (como Python ou JavaScript), praticar em pequenos desafios diários e migrar para um computador assim que os projetos começarem a ficar mais complexos.",
    ],
  },
  {
    slug: "automacoes-que-economizam-horas-de-trabalho",
    title: "5 automações que podem economizar horas de trabalho",
    category: "Automação",
    excerpt:
      "Processos repetitivos do dia a dia — como organização de planilhas, respostas padrão e integração entre sistemas — que costumam valer a pena automatizar primeiro.",
    content: [
      "Boa parte do tempo perdido em tarefas administrativas vem de processos repetitivos: copiar dados entre planilhas, responder as mesmas perguntas, gerar relatórios manualmente.",
      "Automatizar esse tipo de tarefa costuma ter o melhor custo-benefício: são processos bem definidos, repetitivos, e o ganho de tempo aparece já nas primeiras semanas de uso.",
    ],
  },
  {
    slug: "como-usar-inteligencia-artificial-no-desenvolvimento",
    title: "Como usar inteligência artificial no desenvolvimento",
    category: "Inteligência Artificial",
    excerpt:
      "Da geração de código a testes automatizados: como ferramentas de IA estão mudando o fluxo de trabalho de quem desenvolve software.",
    content: [
      "A inteligência artificial já faz parte do fluxo de muitos desenvolvedores, seja para acelerar a escrita de código, revisar trechos existentes ou ajudar a estruturar testes.",
      "O ponto importante é usá-la como ferramenta de apoio: quem entende os fundamentos consegue revisar, ajustar e confiar no resultado, em vez de depender cegamente da sugestão gerada.",
    ],
  },
  {
    slug: "ferramentas-que-todo-desenvolvedor-deveria-conhecer",
    title: "Ferramentas que todo desenvolvedor deveria conhecer",
    category: "Ferramentas para Programadores",
    excerpt:
      "Um panorama rápido de controle de versão, editores, gerenciadores de pacotes e utilitários que aparecem no dia a dia de qualquer stack.",
    content: [
      "Independente da linguagem escolhida, algumas ferramentas aparecem em praticamente todo projeto: um bom editor de código, controle de versão (Git) e um gerenciador de pacotes adequado à stack usada.",
      "Dominar esse conjunto básico costuma acelerar muito o aprendizado de qualquer tecnologia nova, porque o fluxo de trabalho em volta do código muda pouco entre projetos.",
    ],
  },
  {
    slug: "como-conseguir-os-primeiros-clientes-como-programador",
    title: "Como conseguir os primeiros clientes como programador",
    category: "Como ganhar dinheiro com programação",
    excerpt:
      "Portfólio, indicações e presença online: passos práticos para quem está começando a oferecer serviços de desenvolvimento.",
    content: [
      "Os primeiros clientes geralmente vêm de rede de contatos, indicações e de um portfólio que mostre com clareza o que você sabe fazer — mesmo que ainda sejam projetos pessoais ou de estudo.",
      "Ter uma proposta de valor clara (que problema você resolve e para quem) costuma pesar mais do que uma lista extensa de tecnologias no início da carreira.",
    ],
  },
];
