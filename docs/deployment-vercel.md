# Vercel へのデプロイ手順

このドキュメントは寿司打クローンを Vercel にデプロイする手順をまとめたものです。基本的には Vercel の自動設定に従って `npm run build` の成果物（`dist/`）を公開するだけで動作します。

## 前提条件

- Vercel アカウントを作成済みであること
- ローカル環境に Node.js 18 以降と npm がインストールされていること
- Vercel CLI が必要な場合は `npm i -g vercel` でインストールしておくこと

## 1. リポジトリの準備

```bash
npm ci
npm run lint
npm test -- --run
npm run build
```

すべて成功することを確認してください。`npm run build` の出力先は `dist/` です。

## 2. プロジェクトを Vercel にリンクする

1. `vercel login` で CLI から Vercel にログイン
2. プロジェクトルートで `vercel link` を実行し、既存の Vercel プロジェクトと紐付けるか、新規に作成します
   - Framework は自動的に **Vite** と認識されます
   - Build Command は `npm run build`
   - Output Directory は `dist`

## 3. 環境変数について

現状このアプリが必要とする環境変数はありません。もし将来的に追加する場合は `vercel env` またはダッシュボードから Production/Preview を設定し、`.env.example` にも反映してください。

## 4. プレビュー環境へのデプロイ

```bash
vercel
```

- 初回実行時はプロジェクトが作成され、プレビュー URL が発行されます
- ビルドログにエラーがないこと、プレビュー URL でアプリが正しく動作することを確認してください

## 5. 本番デプロイ

プレビューで問題がなければ、以下で Production に昇格します。

```bash
vercel --prod
```

ダッシュボードでもデプロイ履歴とステータスをチェックしてください。

## 6. Git 連携（推奨）

GitHub/GitLab/Bitbucket のリポジトリを Vercel に接続すると、ブランチごとに自動でプレビューが生成されます。`main` ブランチへのプッシュで自動的に本番へデプロイする設定にするのが一般的です。

## 補足

- `vite.config.ts` では Vercel でビルドする場合、自動的にルートパス(`/`)を利用するようになっています
- GitHub Pages などサブディレクトリ配信が必要な場合は、`VERCEL` 環境変数が無効な状態で `npm run build` を実行すると従来どおり `/sushida-clone/` がベースパスとして利用されます

