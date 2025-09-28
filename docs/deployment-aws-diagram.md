# AWS 構成図（Mermaid 記法）

以下のMermaid記法でAWSアーキテクチャの構成図を表現しています。GitHubやMarkdown対応エディタでプレビューできます。

```mermaid
graph TB
    %% インターネットからALBへ
    Internet[Internet] --> ALB["Application Load Balancer\n(HTTPS:443, HTTP:80->HTTPS)"]

    %% ALBからターゲットグループへ
    ALB --> BlueTG["Blue Target Group\n(Blueタスク)"]
    ALB --> GreenTG["Green Target Group\n(Greenタスク)"]

    %% Blue/Greenタスクセット
    BlueTG --> BlueTask["ECS Fargate Task\n(Blue: 旧バージョン)"]
    GreenTG --> GreenTask["ECS Fargate Task\n(Green: 新バージョン)"]

    %% タスクからECSサービスへ
    BlueTask --> ECSService["ECS Service\n(CodeDeploy管理)"]
    GreenTask --> ECSService

    %% ECSサービスからクラスターへ
    ECSService --> ECSCluster["ECS Cluster\n(Fargateモード)"]

    %% ECRからタスクへ（イメージ供給）
    ECR["Amazon ECR\n(コンテナイメージ)"] --> ECSCluster

    %% CodeDeployの制御
    CodeDeploy["CodeDeploy\n(Blue/Greenデプロイ)"] --> ECSService
    CodeDeploy --> ALB

    %% CI/CDフロー
    GitHub["GitHub\n(コードプッシュ)"] --> CI["CI/CD Pipeline\n(CodeBuild/GitHub Actions)"]
    CI --> ECR
    CI --> CodeDeploy

    %% ネットワークレイヤー (subgraphを削除してフラットに)
    VPC["VPC\n(10.10.0.0/16)"]
    PublicSubnets["Public Subnets\n(10.10.0.0/24, 10.10.1.0/24)"]
    PrivateSubnets["Private Subnets\n(10.10.10.0/24, 10.10.11.0/24)"]

    %% 外部ネットワーク
    Internet --> VPC
    VPC --> NATGW["NAT Gateway\n(オプション: アウトバウンド用)"]

    %% セキュリティグループの関連付け
    ALBSG["Security Group\n(ALB: 0.0.0.0 -> 80/443)"] --> ALB
    ECSSG["Security Group\n(ECS: ALB -> 80)"] --> ECSCluster

    %% 監視
    CloudWatch["CloudWatch\n(Logs/Metrics/Alarms)"] --> ALB
    CloudWatch --> ECSCluster
    CloudWatch --> CodeDeploy
```

## 説明
- **フローの流れ**: インターネット → ALB → ECSタスク (Blue/Green) → コンテナアプリ
- **Blue/Greenデプロイ**: CodeDeployがトラフィックをBlueからGreenへシフトし、問題なければBlueを停止
- **ネットワーク**: VPC内でパブリック/プライベートサブネットを分離し、セキュリティグループでアクセス制御
- **監視**: CloudWatchでALB/ECSのメトリクスとログを収集

この図を基に、実際のAWSリソースを構築していきます。Mermaid記法のため、GitHub上で直接プレビュー可能です。

## プレビューTips
- **GitHubで表示されない場合**: GitHubのMarkdownプレビューでMermaidが自動レンダリングされないことがあります。ブラウザの拡張機能（例: "Mermaid Preview"）をインストールするか、VS Codeなどのエディタでプレビューしてください。
- **代替フォーマット**: 必要に応じて、PlantUMLやASCIIアートに変換できます。プレビューが安定しない場合はお知らせください。
