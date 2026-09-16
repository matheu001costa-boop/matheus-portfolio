import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Configuração pensada para hospedagem estática (Hostinger ou similar).
// base: "./" gera caminhos relativos nos assets, então o build funciona
// tanto na raiz do domínio quanto em uma subpasta, sem depender de
// nenhuma variável de ambiente externa (PORT, BASE_PATH etc.).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
