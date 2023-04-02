import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import mix from 'vite-plugin-mix'
import path from "path";

// console.log(mix)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    //  mix.default({handler: './api/server.ts'})
  ],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $form: path.resolve("./src/lib/form"),
      $modal: path.resolve("./src/lib/modal"),
      $table: path.resolve("./src/lib/data-table"),
    },
  },
  build: {
    outDir: './build/public'
  },
  base: '/admin'
});
