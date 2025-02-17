import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    target: "esnext", // ✅ Allows top-level await
    modulePreload: { polyfill: false }, // ✅ Ensures ES module compatibility
  }
});
