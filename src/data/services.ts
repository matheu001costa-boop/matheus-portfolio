import type { LucideIcon } from "lucide-react";
import { Code2, Workflow, Sparkles, Blocks } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Desenvolvimento Web",
    description: "Sites, sistemas e aplicações modernas.",
    icon: Code2,
  },
  {
    title: "Automação",
    description: "Automação de tarefas e processos repetitivos.",
    icon: Workflow,
  },
  {
    title: "Inteligência Artificial",
    description: "Integração de IA em sistemas e processos.",
    icon: Sparkles,
  },
  {
    title: "Sistemas personalizados",
    description: "Soluções desenvolvidas de acordo com a necessidade do negócio.",
    icon: Blocks,
  },
];
