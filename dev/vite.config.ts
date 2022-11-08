import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { string } from "rollup-plugin-string";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "mosfez-faust/run-in-iframe": path.resolve(
        __dirname,
        "../dist/run-in-iframe.mjs"
      ),
      "mosfez-faust/offline-render": path.resolve(
        __dirname,
        "../dist/offline-render.mjs"
      ),
      "mosfez-faust/offline-render-dsp": path.resolve(
        __dirname,
        "../dist/offline-render-dsp.mjs"
      ),
      "mosfez-faust": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [
    react(),
    string({
      include: `**/*.stringify.js`,
    }),
  ],
  optimizeDeps: {
    exclude: ["ws"],
  },
});
