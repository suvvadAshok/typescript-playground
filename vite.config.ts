import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      "@lib": "/src/lib",
    },
  },
});
