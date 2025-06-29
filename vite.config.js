import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// ⚠️ GitHub Pages の URL = https://<USER>.github.io/<REPO>/
//     → base に "/<REPO>/" を必ず指定
export default defineConfig({
  plugins: [vue()],
  base: "/my-portfolio-bot/",   // ←リポジトリ名と合わせる
}); 