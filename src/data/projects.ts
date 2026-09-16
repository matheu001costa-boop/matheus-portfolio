import { SITE } from "./site";

export type AutomationProject = {
  name: string;
  description: string;
  tech: string[];
  // Principais funcionalidades, exibidas como lista no card.
  highlights: string[];
  // Comandos reais para rodar o projeto localmente (testados).
  howToRun: string[];
  // Caminho da pasta do projeto dentro do repositório no GitHub.
  repoPath: string;
};

export const AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    name: "File Organizer",
    description:
      "Automação em Python que organiza arquivos automaticamente por extensão e categoria (PDF → Documentos, JPG/PNG → Imagens, MP4 → Vídeos, ZIP/RAR → Compactados, XLSX/CSV → Planilhas).",
    tech: ["Python"],
    highlights: [
      "Analisa a pasta e identifica a extensão de cada arquivo",
      "Cria as pastas de categoria automaticamente",
      "Evita sobrescrever arquivos com o mesmo nome",
      "Registra todas as operações em log",
      "Trata erros de permissão sem interromper o processo",
    ],
    howToRun: [
      "python -m venv .venv",
      "source .venv/bin/activate  # Windows: .venv\\Scripts\\activate",
      "pip install -r requirements.txt",
      "python src/main.py examples/pasta-exemplo",
    ],
    repoPath: "automation-projects/file-organizer",
  },
  {
    name: "Report Generator",
    description:
      "Ferramenta em Python que importa um CSV, valida e calcula totais dos dados, e gera automaticamente um relatório em PDF com o resumo.",
    tech: ["Python", "ReportLab"],
    highlights: [
      "Importa e valida os dados de um CSV",
      "Calcula soma, média, mínimo e máximo por coluna",
      "Gera um relatório em PDF pronto para compartilhar",
      "Exporta o PDF para o caminho que você escolher",
      "Tratamento de erros para arquivo ausente ou inválido",
    ],
    howToRun: [
      "python -m venv .venv",
      "source .venv/bin/activate  # Windows: .venv\\Scripts\\activate",
      "pip install -r requirements.txt",
      "python src/main.py examples/vendas.csv",
    ],
    repoPath: "automation-projects/report-generator",
  },
  {
    name: "Excel Automation",
    description:
      "Automação em Python que importa uma planilha .xlsx, limpa e organiza os dados, calcula totais e gera uma nova planilha com o resultado.",
    tech: ["Python", "pandas", "OpenPyXL"],
    highlights: [
      "Importa e lê os dados de uma planilha .xlsx",
      "Remove linhas vazias e espaços extras",
      "Organiza e padroniza os nomes das colunas",
      "Calcula totais automaticamente por coluna numérica",
      "Gera uma nova planilha e informa o resultado da operação",
    ],
    howToRun: [
      "python -m venv .venv",
      "source .venv/bin/activate  # Windows: .venv\\Scripts\\activate",
      "pip install -r requirements.txt",
      "python src/main.py examples/dados-brutos.xlsx",
    ],
    repoPath: "automation-projects/excel-automation",
  },
];

// Link para o README do projeto (visão geral, exemplos, instruções completas).
export const projectReadmeUrl = (repoPath: string) =>
  `${SITE.social.github}/tree/main/${repoPath}#readme`;

// Link direto para o código-fonte do projeto.
export const projectCodeUrl = (repoPath: string) =>
  `${SITE.social.github}/tree/main/${repoPath}/src`;
