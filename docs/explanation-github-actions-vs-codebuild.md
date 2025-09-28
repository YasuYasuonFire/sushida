# GitHub Actions vs CodeBuild の違い（初学者向け）

## 1. 基本的な違い

| 項目 | GitHub Actions | AWS CodeBuild |
|------|----------------|---------------|
| **提供者** | GitHub | AWS |
| **場所** | GitHub内 | AWS内 |
| **設定ファイル** | `.github/workflows/xxx.yml` | `buildspec.yml` |
| **料金体系** | GitHub課金 | AWS課金 |

## 2. 具体的な役割

### GitHub Actions（今回推奨）
- **役割**: GitHub のリポジトリに直接組み込まれたCI/CD
- **特徴**: 
  - コードをプッシュしたら自動で動く
  - GitHub と深く連携
  - 設定が比較的簡単
- **例**: 家の隣にある工場。すぐにアクセスできて便利

### AWS CodeBuild  
- **役割**: AWS専用のビルドサービス
- **特徴**:
  - AWS の他サービスと深く連携
  - AWS内で完結
  - 設定がやや複雑
- **例**: 車で行く必要のある専門工場。高機能だけど手間がかかる

## 3. 今回のプロジェクトでの使い分け

### GitHub Actions を使う場合（推奨）
```yaml
# .github/workflows/deploy.yml
name: Deploy to AWS
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t sushida .
      
      - name: Push to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REGISTRY
          docker tag sushida:latest $ECR_REGISTRY/sushida-frontend:$GITHUB_SHA
          docker push $ECR_REGISTRY/sushida-frontend:$GITHUB_SHA
      
      - name: Deploy with CodeDeploy
        run: aws deploy create-deployment --application-name sushida-frontend-app
```

### CodeBuild を使う場合
```yaml
# buildspec.yml
version: 0.2
phases:
  pre_build:
    commands:
      - echo Logging in to Amazon ECR...
      - aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REGISTRY
  build:
    commands:
      - echo Build started on `date`
      - docker build -t sushida .
      - docker tag sushida:latest $ECR_REGISTRY/sushida-frontend:$CODEBUILD_BUILD_NUMBER
  post_build:
    commands:
      - docker push $ECR_REGISTRY/sushida-frontend:$CODEBUILD_BUILD_NUMBER
```

## 4. それぞれのメリット・デメリット

### GitHub Actions
**メリット**:
- GitHubと一体化している（プルリクエストとの連携が簡単）
- 無料枠が充実（パブリックリポジトリは無料）
- 設定が直感的
- GitHub Secrets で認証情報管理が簡単

**デメリット**:
- AWSサービスとの連携に追加設定が必要
- GitHub外のトリガーは設定が複雑

### AWS CodeBuild
**メリット**:
- AWS IAMロールで認証が簡単
- 他のAWSサービス（CodePipeline、CodeDeploy）との連携がスムーズ
- VPC内でビルド可能（セキュリティ重視の場合）

**デメリット**:
- 設定が複雑
- GitHub連携に追加設定が必要
- 料金がビルド時間に比例

## 5. 初学者へのおすすめ

### まずはGitHub Actionsから始める理由

1. **学習コストが低い**
   - GitHubを既に使っているなら追加学習が少ない
   - YAML設定が比較的シンプル

2. **デバッグしやすい**
   - GitHub UIでログが見やすい
   - エラーの原因を特定しやすい

3. **段階的に移行可能**
   - 最初はGitHub Actionsで慣れる
   - 後からCodeBuildに移行も可能

## 6. 実際の選び方

### GitHub Actionsを選ぶ場合
- GitHubをメインで使っている
- 小〜中規模のプロジェクト
- 学習コストを抑えたい
- **今回のような個人・学習プロジェクト**

### CodeBuildを選ぶ場合
- 企業でAWSを全面採用
- 大規模なプロジェクト
- VPC内でビルドする必要がある
- AWSの他サービスと深く連携したい

## 7. 今回のプロジェクトの方針

**GitHub Actionsを採用**します：

1. 学習目的なので、シンプルな方から始める
2. GitHub Secretsで AWS認証情報を管理
3. ECRへのプッシュとCodeDeployの呼び出しを自動化
4. 慣れてきたらCodeBuildへの移行も検討

これで無停止デプロイが実現できます！
