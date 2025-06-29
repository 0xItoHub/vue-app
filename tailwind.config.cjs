/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // ← ここはそのまま
  ],
  safelist: [
    /* グラデーション系 */
    'bg-gradient-to-br',
    'from-blue-50',
    'via-indigo-50',
    'to-purple-50',

    /* 高さユーティリティ */
    'min-h-screen',

    /* カラーバリエーションや方向の増加を想定して正規表現でも登録 */
    { pattern: /(from|via|to)-(blue|indigo|purple)-(50|100|200)/ },
    { pattern: /bg-gradient-to-(tr|tl|br|bl)/ },
  ],
  theme: { extend: {} },
  plugins: [],
}
