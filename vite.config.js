import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// ⚠️ GitHub Pages の URL = https://<USER>.github.io/<REPO>/
//     → base に "/<REPO>/" を必ず指定
export default defineConfig({
  plugins: [vue()],
  base: "/vue-app/",   // ←リポジトリ名と合わせる
}); 
