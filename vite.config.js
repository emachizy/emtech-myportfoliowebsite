import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import typography from "@tailwindcss/typography";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react(),
    tailwindcss({
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [typography],
    }),
  ],
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Ensures correct routing for SPAs
  },
});
