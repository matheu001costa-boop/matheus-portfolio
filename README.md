# Matheus Costa — Desenvolvedor Python

Portfólio profissional de **Matheus Costa**, desenvolvedor Python e Full
Stack especializado em automação, desenvolvimento web e soluções digitais.

Site estático (React + TypeScript + Vite + Tailwind CSS v4), com uma
seção de **Projetos de Automação** contendo 3 automações em Python reais
e executáveis, com código-fonte aberto.

---

## Sumário

- [Antes de publicar](#antes-de-publicar)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar o portfólio localmente](#como-executar-o-portfólio-localmente)
- [Como fazer o build de produção](#como-fazer-o-build-de-produção)
- [Como publicar (deploy)](#como-publicar-deploy)
- [Projetos de automação](#projetos-de-automação)
- [SEO e acessibilidade](#seo-e-acessibilidade)

---

## Antes de publicar

Edite os seguintes arquivos com os seus dados reais:

1. **`src/data/site.ts`**
   - `whatsappNumber` — número no formato internacional, só dígitos (ex: `5511999999999`).
   - `social.linkedin` — link do seu LinkedIn.
   - `social.instagram` — link do seu Instagram (procure pelo comentário `👉 INSTAGRAM` no arquivo).
   - `social.email` — seu e-mail real.
   - `social.github` — já preenchido com `https://github.com/matheu001costa-boop/matheus-portfolio`.
2. **`index.html`** e **`public/robots.txt`** / **`public/sitemap.xml`** — troque `SEU-DOMINIO-AQUI.com` pelo domínio real onde o site será publicado.
3. **`src/assets/profile.jpg`** — já está com a sua foto de perfil (circular, no Hero). Troque o arquivo se quiser usar outra foto, mantendo o mesmo nome e formato quadrado.

## Tecnologias

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- React Router v7
- lucide-react (ícones)

## Estrutura do projeto

```
matheus-costa-dev-portfolio/
├── index.html                  # SEO, meta tags, Open Graph, fontes
├── src/
│   ├── assets/                 # imagens (foto de perfil, etc.)
│   ├── components/             # Navbar, Hero, About, Projects, Contact, Footer...
│   ├── data/                   # conteúdo editável (site.ts, projects.ts, services.ts...)
│   ├── hooks/                  # useReveal (animação ao rolar a página)
│   ├── pages/                  # Home, Blog, BlogPost
│   ├── App.tsx                 # rotas da aplicação
│   └── main.tsx                # ponto de entrada
├── public/                     # favicon, robots.txt, sitemap.xml, og-image.jpg
├── automation-projects/        # 3 automações Python reais (ver seção abaixo)
│   ├── file-organizer/
│   │   ├── src/main.py
│   │   ├── examples/
│   │   ├── requirements.txt
│   │   └── README.md
│   ├── report-generator/
│   │   ├── src/main.py
│   │   ├── examples/
│   │   ├── requirements.txt
│   │   └── README.md
│   └── excel-automation/
│       ├── src/main.py
│       ├── examples/
│       ├── requirements.txt
│       └── README.md
└── package.json
```

## Como executar o portfólio localmente

Requer [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

Isso abre o site em `http://localhost:5173` com hot-reload.

## Como fazer o build de produção

```bash
npm install
npm run build
```

Isso roda o `tsc --noEmit` (checagem de tipos) e depois gera os arquivos
finais em `dist/`. Para conferir o build localmente antes de publicar:

```bash
npm run preview
```

## Como publicar (deploy)

O `dist/` gerado é 100% estático e pode ser hospedado em qualquer
plataforma compatível com Vite/React (Vercel, Netlify, GitHub Pages,
Hostinger, etc.).

**Hospedagem compartilhada (ex: Hostinger):**

1. Rode `npm run build` na sua máquina — a hospedagem compartilhada
   normalmente não roda Node/build.
2. Envie **todo o conteúdo** da pasta `dist/` (não a pasta em si) para
   `public_html/` via FTP ou o Gerenciador de Arquivos do hPanel.
3. O arquivo `dist/.htaccess` (copiado de `public/.htaccess` no build) vai
   junto — ele é necessário para as rotas `/blog/...` funcionarem ao
   acessar a URL diretamente.

**Vercel/Netlify:** aponte o build command para `npm run build` e o
diretório de saída para `dist`. Como as rotas são feitas com React
Router, configure um rewrite de SPA (`/* -> /index.html`) — a Vercel e a
Netlify fazem isso automaticamente na maioria dos casos.

Não há variáveis de ambiente nem chaves de API no código — o site é
inteiramente estático.

## Projetos de automação

A pasta [`automation-projects/`](./automation-projects) contém 3
automações em Python, independentes do site, com código real e testado:

| Projeto | O que faz |
|---|---|
| [`file-organizer/`](./automation-projects/file-organizer) | Organiza arquivos de uma pasta automaticamente por categoria (extensão). |
| [`report-generator/`](./automation-projects/report-generator) | Lê um CSV e gera um relatório em PDF com resumo estatístico. |
| [`excel-automation/`](./automation-projects/excel-automation) | Limpa, organiza e calcula totais em planilhas `.xlsx`. |

Cada um tem seu próprio `README.md` com instruções de instalação (venv +
`requirements.txt`), comandos de execução (`python src/main.py ...`),
exemplos reais de entrada e saída dentro de `examples/`, e tratamento de
erros. O site exibe essas informações nos cards da seção **Projetos de
Automação**, com dois links por projeto — **Ver projeto** (README
completo) e **Código** (pasta `src/`) — sem simular uma execução que o
navegador não pode realmente fazer.

## SEO e acessibilidade

- `index.html` já inclui title, meta description, canonical, Open Graph,
  Twitter Card, `lang="pt-BR"`, viewport e favicon.
- `public/sitemap.xml` e `public/robots.txt` já configurados (lembre de
  trocar o domínio placeholder).
- Hierarquia de headings (`h1` único por página, `h2`/`h3` em sequência),
  `alt` na foto de perfil, links externos com
  `target="_blank" rel="noopener noreferrer"`, e navegação por teclado
  nos elementos interativos.

## Informações de desenvolvimento

- **Autor:** Matheus Costa
- **Stack:** React 19 + TypeScript + Vite 7 + Tailwind CSS v4
- **Status:** pronto para publicação — falta apenas preencher os dados
  de contato reais indicados em [Antes de publicar](#antes-de-publicar).
- Nenhuma chave de API, token ou variável de ambiente é usada neste
  projeto — o site é inteiramente estático e não depende de backend.
