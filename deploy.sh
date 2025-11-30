#!/bin/bash

# 部署脚本
# 使用方法: ./deploy.sh [docker|pm2|vercel]

set -e

DEPLOY_METHOD=${1:-docker}

echo "🚀 开始部署项目..."
echo "📦 部署方式: $DEPLOY_METHOD"

case $DEPLOY_METHOD in
  docker)
    echo "🐳 使用 Docker 部署..."
    docker build -t homepage:latest .
    echo "✅ Docker 镜像构建完成"
    echo "📝 运行命令: docker run -p 3000:3000 homepage:latest"
    echo "📝 或使用: docker-compose up -d"
    ;;
  
  pm2)
    echo "⚙️  使用 PM2 部署..."
    pnpm install
    pnpm build
    pm2 stop homepage 2>/dev/null || true
    pm2 start npm --name "homepage" -- start
    pm2 save
    echo "✅ PM2 部署完成"
    pm2 status
    ;;
  
  vercel)
    echo "▲ 使用 Vercel 部署..."
    vercel --prod
    echo "✅ Vercel 部署完成"
    ;;
  
  build)
    echo "🔨 仅构建项目..."
    pnpm install
    pnpm build
    echo "✅ 构建完成"
    ;;
  
  *)
    echo "❌ 未知的部署方式: $DEPLOY_METHOD"
    echo "使用方法: ./deploy.sh [docker|pm2|vercel|build]"
    exit 1
    ;;
esac

echo "🎉 部署流程完成！"

