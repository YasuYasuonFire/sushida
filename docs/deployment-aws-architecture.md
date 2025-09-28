# AWS 公開アーキテクチャ設計（CodeDeploy + ECS Blue/Green）

## 1. 目的と前提

- フロントエンド: `npm run build` でビルドされる静的 SPA（Vite + React）。
- ホスティング: AWS Fargate 上の Nginx コンテナで配信し、ALB 経由で公開する。
- デプロイ: CodeDeploy の Blue/Green デプロイで無停止切り替え。
- インフラ操作: AWS CLI と IaC（後続タスクで Terraform/CloudFormation などに置き換え検討）。
- ネットワーク: 既存の VPC が無い前提で新規作成。後から共有 VPC への統合も可能な設計にする。

## 2. アーキテクチャ概要

```
  [GitHub] --push--> [CI (CodeBuild/GitHub Actions)] --docker build-->
    [Amazon ECR]
        │ push
        ▼
  [CodeDeploy (ECS Blue/Green)]
        │ 部署指示
        ▼
  [ECS Cluster (Fargate)]
        ├── Blue タスク (旧バージョン)
        └── Green タスク (新バージョン)
                │
                ▼
        [Application Load Balancer]
                │
         Internet (HTTPS)
```

## 3. コンポーネント設計

- **VPC / ネットワーク**
  - `/16` の VPC を新規作成（例: `10.10.0.0/16`）。
  - パブリックサブネット ×2（例: `10.10.0.0/24`, `10.10.1.0/24`）。ALB と NAT 用途。
  - プライベートサブネット ×2（例: `10.10.10.0/24`, `10.10.11.0/24`）。Fargate タスク配置。
  - インターネットゲートウェイ、必要に応じて NAT ゲートウェイ（アウトバウンド通信が必要な場合）。

- **セキュリティグループ**
  - `alb-sg`: 0.0.0.0/0 からの `:80/:443` を許可。ターゲットは ECS タスク。
  - `ecs-service-sg`: ALB からの `:80` のみ許可。アウトバウンドは 0.0.0.0/0。
  - 必要に応じて CI などから ECR へのアクセスを IAM で制御。

- **ALB & ターゲットグループ**
  - HTTPS リスナー (443)。証明書は ACM で管理。
  - HTTP (80) は HTTPS へリダイレクト。
  - ターゲットグループは Blue/Green 用に 2 つ（`blue-tg`, `green-tg`）。ヘルスチェックパスは `/`。

- **ECS / Fargate**
  - クラスター名: `sushida-ecs-cluster`。
  - サービス名: `sushida-frontend`。デプロイタイプは `CODE_DEPLOY`。
  - タスク定義: `sushida-frontend-task`。
    - CPU: 0.25 vCPU (256) / メモリ: 0.5 GB (512) から開始。
    - コンテナ: `frontend`
      - イメージ: `<<AWS_ACCOUNT_ID>>.dkr.ecr.<<REGION>>.amazonaws.com/sushida-frontend:<<TAG>>`
      - ポート: 80
      - 環境変数: `NODE_ENV=production`

- **ECR**
  - リポジトリ名: `sushida-frontend`。
  - ライフサイクルポリシーで古いイメージを自動削除（例: `keep: last 10`）。

- **CodeDeploy (ECS)**
  - アプリケーション名: `sushida-frontend-app`。
  - デプロイグループ: `sushida-frontend-dg`。
  - ブルー/グリーン設定: ALB 切り替えを自動。トラフィックシフト 5 分、監視時間 10 分などを初期値に。
  - AppSpec: `appspec.yaml` にタスク定義 ARN とロードバランサー情報を記述。

- **CI/CD**
  - **CI**: GitHub Actions もしくは CodeBuild で Docker イメージをビルド＆ECR push。
  - **CD**: CI から CodeDeploy を CLI で呼び出して `appspec` + `taskdef` を S3 にアップロード。

- **監視**
  - CloudWatch Logs: ECS タスクのログを `awslogs` ドライバで集約。
  - CloudWatch Metrics: ALB 4XX/5XX、ターゲットのヘルス、CPU/メモリ使用率。
  - アラーム: 5XX が閾値超えたら SNS 通知、デプロイ失敗時にロールバック。

## 4. 初学者向けポイント解説

- **なぜコンテナ?**
  - ビルド成果物は静的ファイルだが、Nginx コンテナにまとめるとローカルと本番の挙動を揃えやすい。
  - 将来的に API や SSR を追加したくなっても同じ基盤を活用できる。

- **なぜ CodeDeploy?**
  - ECS サービスのバージョン切替を自動で行ってくれる。デプロイ中に古いタスクを残しておく Blue/Green 方式なので、失敗時は即ロールバック可能。

- **Blue/Green の流れ**
  1. 新しいコンテナイメージを用意。
  2. CodeDeploy が新しいタスクセット（Green）を起動。
  3. ヘルスチェック成功後、ALB がトラフィックを順次 Green へ切替。
  4. 問題なければ Blue を停止。

- **AWS CLI で触る理由**
  - 画面操作より再現性・自動化が高く、チームで同じ手順を共有しやすい。
  - 後の IaC 化（Terraform/CloudFormation）への移行もしやすい。

## 5. リソース命名規則

| 種別 | 命名例 |
|------|--------|
| VPC | `sushida-prod-vpc` |
| サブネット | `sushida-prod-public-a` / `sushida-prod-private-a` |
| セキュリティグループ | `sushida-prod-alb-sg` / `sushida-prod-ecs-sg` |
| ALB | `sushida-prod-alb` |
| ターゲットグループ | `sushida-prod-blue-tg` / `sushida-prod-green-tg` |
| ECS クラスター | `sushida-prod-cluster` |
| ECS サービス | `sushida-prod-frontend` |
| ECR リポジトリ | `sushida-frontend` |
| CodeDeploy アプリ | `sushida-frontend-app` |
| CodeDeploy デプロイグループ | `sushida-frontend-dg` |

## 6. コスト目安（東京リージョン）

- Fargate: 0.25 vCPU / 0.5 GB × 最小 1 タスク ≒ 数百円/月。
- ALB: 約 17 USD/月 + 転送量。
- NAT ゲートウェイ: 使う場合は約 40 USD/月。静的配信のみなら不要にできる構成を検討。
- CodeDeploy/ECR/CloudWatch: 低コスト（利用量課金）。

## 7. 今後のタスク連携

- **次のステップ**
  1. AWS CLI コマンドのスクリプト化（VPC/ALB/ECS/ECR/CodeDeploy）。
  2. コンテナビルド用の `Dockerfile` と `taskdef.json`、`appspec.yaml` の作成。
  3. CI での自動ビルド＆デプロイジョブ整備。
  4. 監視・ログ収集設定のスクリプト化、ランブック整備。

- **注意点**
  - HTTPS 証明書は ACM で事前に発行しておく。
  - AWS CLI のプロファイルと認証情報管理（`aws configure sso` 推奨）。
  - 環境変数や機密情報は AWS Systems Manager Parameter Store などで管理。

---

以降のタスクでは、この設計書を基に各リソースを CLI で構築し、デプロイパイプラインを段階的に整備していく。

