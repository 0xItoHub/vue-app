# ポートフォリオ Bot（Vue 3 + Vite + TailwindCSS）

![screenshot](./screenshot.png)

## 概要

Vue 3 + Vite + TailwindCSS で作成した、質問ボット風のポートフォリオWebアプリです。GitHub Pagesで無料公開できます。

## 特徴
- 選択肢で会話が進むチャットボットUI
- シナリオは `src/data/scenario.json` で簡単カスタマイズ
- モダンなデザイン（TailwindCSS）
- レスポンシブ対応
- GitHub Actionsで自動デプロイ

## ローカル開発

```bash
# 依存パッケージをインストール
npm install

# 開発サーバー起動
npm run dev
```

## ビルド & 公開

```bash
# 本番ビルド
npm run build

# dist/ フォルダが生成されます
```

### GitHub Pages で公開する場合
1. このリポジトリをGitHubにpush
2. `.github/workflows/deploy.yml` を用意（サンプルは公式ドキュメント参照）
3. GitHub Pagesの設定で「GitHub Actions」を選択

## カスタマイズ
- `src/data/scenario.json` を編集するだけで会話内容を自由に変更できます
- デザインや機能追加も簡単

## ライセンス
MIT 