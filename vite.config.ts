import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $form: path.resolve("./src/lib/form"),
      $modal: path.resolve("./src/lib/modal"),
      $table: path.resolve("./src/lib/data-table"),
    },
  },
});
