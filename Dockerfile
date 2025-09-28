# ステージ1：Reactアプリケーションのビルド
# 公式のNode.js 20の軽量イメージをベースにします
FROM node:20-alpine AS builder

# 作業ディレクトリを作成
WORKDIR /app

# 依存関係のファイルをコピー
COPY package*.json ./

# package-lock.json に基づいて依存関係をクリーンインストール
RUN npm ci

# アプリケーションのソースコードをすべてコピー
COPY . .

# 本番用にアプリケーションをビルド
RUN npm run build

# ---

# ステージ2：Nginxでアプリケーションを配信
# 公式のNginxの軽量イメージをベースにします
FROM nginx:1.25-alpine

# ビルダーステージで生成されたビルド成果物（distディレクトリ）を
# Nginxがコンテンツを配信するデフォルトのディレクトリにコピーします
COPY --from=builder /app/dist /usr/share/nginx/html

# コンテナが80番ポートを公開することを指定
EXPOSE 80

# コンテナ起動時にNginxをフォアグラウンドで実行
CMD ["nginx", "-g", "daemon off;"]
