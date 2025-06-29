/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    safelist: [
      /* グラデーション系 */
      'bg-gradient-to-br',
      'from-blue-50',
      'via-indigo-50',
      'to-purple-50',

      /* 高さユーティリティ */
      'min-h-screen',

      /* 正規表現でバリエーションを許可 */
      { pattern: /(from|via|to)-(blue|indigo|purple)-(50|100|200)/ },
      { pattern: /bg-gradient-to-(tr|tl|br|bl)/ },
    ],
  },
  theme: { extend: {} },
  plugins: [],
};
