# 快速部署指南

本项目已配置好多种部署方式，你可以选择最适合的方式。

## 🚀 最快部署方式

### 方式 1: Vercel（推荐，最简单）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 部署
vercel --prod
```

或者直接在 [vercel.com](https://vercel.com) 连接 GitHub 仓库，自动部署。

### 方式 2: Docker（适合服务器部署）

```bash
# 1. 构建镜像
docker build -t homepage:latest .

# 2. 运行容器
docker run -p 3000:3000 homepage:latest
```

或者使用 Docker Compose：

```bash
docker-compose up -d
```

### 方式 3: 使用部署脚本

**Windows:**
```bash
deploy.bat docker
```

**Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh docker
```

## 📝 详细说明

查看 [DEPLOY.md](./DEPLOY.md) 获取完整的部署文档，包括：
- Vercel 部署
- Docker 部署
- PM2 部署
- 传统服务器部署
- 静态导出

## 🔧 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 运行生产版本
pnpm start
```

## 📦 项目结构

- `Dockerfile` - Docker 镜像构建文件
- `docker-compose.yml` - Docker Compose 配置
- `deploy.sh` / `deploy.bat` - 部署脚本
- `.github/workflows/` - GitHub Actions CI/CD 配置

## 🆘 需要帮助？

查看 [DEPLOY.md](./DEPLOY.md) 获取详细部署说明和故障排除。

