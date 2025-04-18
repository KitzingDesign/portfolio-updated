import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Maps `@/` to `src/`
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase", // Converts SCSS class `btn-primary` to `btnPrimary` in JS
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables" as *;
        `, // Globally injects SCSS variables/mixins
      },
    },
  },
  // Optional optimizations:
  build: {
    minify: "terser", // Smaller bundle size
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning (in kB)
  },
});
