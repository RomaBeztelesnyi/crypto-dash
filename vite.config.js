import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      api: {
        target: "http://localhost:5173/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "crypto-dash",
    // minify: false,
    // base: '/crypto-dash/'
    // assetsDir: 'files-of-pr'
    // soursemap: true,
  },
});
