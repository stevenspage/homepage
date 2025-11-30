# 部署指南

本项目是一个 Next.js 应用，支持多种部署方式。

## 部署方式

### 1. Vercel 部署（推荐）

Vercel 是 Next.js 的官方部署平台，提供最简单的部署体验。

#### 使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 生产环境部署
vercel --prod
```

#### 使用 GitHub 集成

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测 Next.js 项目并配置部署

### 2. Docker 部署

#### 构建 Docker 镜像

```bash
# 构建镜像
docker build -t homepage:latest .

# 运行容器
docker run -p 3000:3000 homepage:latest
```

#### 使用 Docker Compose

创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'

services:
  homepage:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

运行：

```bash
docker-compose up -d
```

### 3. 传统服务器部署

#### 使用 PM2

```bash
# 构建项目
pnpm build

# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "homepage" -- start

# 查看状态
pm2 status

# 查看日志
pm2 logs homepage

# 重启应用
pm2 restart homepage
```

#### 使用 systemd

创建 `/etc/systemd/system/homepage.service`：

```ini
[Unit]
Description=Next.js Homepage
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/homepage
ExecStart=/usr/bin/pnpm start
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

启用服务：

```bash
sudo systemctl enable homepage
sudo systemctl start homepage
```

### 4. 静态导出部署

如果需要静态导出（适用于纯静态网站）：

1. 在 `next.config.mjs` 中添加：

```javascript
const nextConfig = {
  output: 'export',
  // ... 其他配置
}
```

2. 构建并导出：

```bash
pnpm build
```

3. 将 `out` 目录部署到任何静态文件服务器

## 环境变量

如果项目需要环境变量，创建 `.env.local` 文件：

```env
NODE_ENV=production
# 其他环境变量
```

## 构建命令

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 生产构建
pnpm build

# 启动生产服务器
pnpm start
```

## 常见问题

### 端口配置

默认端口是 3000，可以通过环境变量修改：

```bash
PORT=8080 pnpm start
```

### 内存优化

生产环境建议至少 512MB 内存。对于大型应用，建议 1GB 或更多。

### 性能优化

- 确保启用 Next.js 的图片优化（如适用）
- 使用 CDN 加速静态资源
- 启用 gzip 压缩

## 健康检查

应用运行后，访问：

- 主页: `http://localhost:3000`
- 健康检查: `http://localhost:3000/api/health` (如果配置)

## 监控和日志

### 日志

- 开发环境：控制台输出
- 生产环境：建议使用日志聚合服务（如 LogDNA、Papertrail）

### 监控

项目已集成 Vercel Analytics，部署到 Vercel 后会自动启用。

## 更新部署

### Vercel

推送到 Git 仓库后自动更新。

### Docker

```bash
# 重新构建并运行
docker-compose up -d --build
```

### PM2

```bash
# 停止、构建、重启
pm2 stop homepage
pnpm build
pm2 restart homepage
```

## 支持

如有问题，请查看：
- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)

