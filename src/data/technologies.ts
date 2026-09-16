export type Technology = {
  name: string;
  category: "Linguagem" | "Frontend" | "Backend" | "Ferramenta" | "IA/Automação";
};

export const TECHNOLOGIES: Technology[] = [
  { name: "JavaScript", category: "Linguagem" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "Python", category: "Linguagem" },
  { name: "React", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "APIs", category: "Backend" },
  { name: "Git/GitHub", category: "Ferramenta" },
  { name: "Automação", category: "IA/Automação" },
  { name: "Inteligência Artificial", category: "IA/Automação" },
];
