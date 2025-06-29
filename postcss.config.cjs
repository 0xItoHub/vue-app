// postcss.config.cjs （←このファイルはビルドが走る階層に置く）
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      // Tailwind 設定ファイルの絶対 or 相対パスを明示
      // （ビルド開始ディレクトリからの相対パス）
      config: require('path').resolve(__dirname, './tailwind.config.cjs'),
    },
    autoprefixer: {},
  },
};
