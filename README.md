# 寿司打クローン

寿司打をモチーフにしたローマ字タイピングゲームです。制限時間 60 秒のあいだに次々と流れてくる寿司ネタをタイプして、ハイスコアを目指しましょう。

## 主な機能

- ランダムに出題される寿司ネタ（日本語表示 + ローマ字読み）
- 正確さに応じたスコアリング、コンボ、獲得した皿の金額表示
- リアルタイムで更新されるステータスボードと結果サマリー
- 全体を React + Vite + TypeScript で構築

## 開発の始め方

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開くと開発用サーバーが起動します。

## ビルド・テスト

- 本番ビルド: `npm run build`
- テスト: `npm test`
- Lint: `npm run lint`
- フォーマッタ: `npm run format`

## テスト

Vitest と Testing Library でゲームロジックの主要な挙動をカバーしています。`npm test` で実行できます。

## フォルダ構成

- `src/game/` ゲームロジック、定数、データ
- `src/ui/` UI コンポーネントと画面
- `src/app/` ルートコンポーネント
- `tests/` Vitest のテストコード
- `assets/` 画像やサウンドなど（未使用）

## GitHub Flow の進め方

1. `main` ブランチから新しいトピックブランチを切ります（例: `git checkout -b feat/add-sound`）。
2. 変更を加え、`npm run lint` と `npm test` で品質を確認します。必要に応じて `npm run build` でビルド確認も行います。
3. 意味のある単位で Conventional Commits に沿ったコミットメッセージをつけてコミットします。
4. GitHub にプッシュします（例: `git push -u origin feat/add-sound`）。初回は `git remote add origin <YOUR_REPO_URL>` を設定してください。
5. GitHub 上で Pull Request を作成し、レビューが完了したら `main` にマージします。マージ後はローカルの `main` を更新し、不要になったトピックブランチを削除します。

## GitHub CI でのプッシュ準備

1. リポジトリを GitHub に作成し、`git remote add origin <YOUR_REPO_URL>` でリモートを登録します。
2. `git push -u origin main` で初回プッシュを行います。
3. 以後はトピックブランチをプッシュすると、CI が自動でテスト・Lint・ビルドを実行します。

## ライセンス

このサンプルは MIT ライセンスで提供します。
<!-- Meaningless comment added at Tue Sep 16 12:19:46 UTC 2025 -->
<!-- Meaningless comment added at Wed Sep 17 07:42:39 UTC 2025 -->
