# GitHub Pages 部署指南

本项目已配置为支持自动部署到 GitHub Pages。

## 📍 访问地址

部署成功后，你的主页将可以通过以下地址访问：

**https://stevenspage.github.io/homepage/**

## 🚀 自动部署

项目已配置 GitHub Actions 工作流，当你推送代码到 `master` 或 `main` 分支时，会自动构建并部署到 GitHub Pages。

### 首次启用 GitHub Pages

1. 访问仓库设置：https://github.com/stevenspage/homepage/settings/pages
2. 在 "Source" 部分，选择 "GitHub Actions"
3. 保存设置

### 手动触发部署

如果需要在 Actions 页面手动触发：

1. 访问：https://github.com/stevenspage/homepage/actions
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow"

## 🔧 配置说明

### basePath 配置

当前配置的 `basePath` 为 `/homepage`，对应仓库名称。如果你的仓库名不同，需要修改：

1. 编辑 `.github/workflows/deploy-gh-pages.yml`
2. 修改 `basePath` 和 `assetPrefix` 为你自己的仓库名

### 使用自定义域名

如果你想使用自定义域名（如 `homepage.example.com`）：

1. 在 `next.config.mjs` 中移除或修改 `basePath` 配置
2. 在 GitHub 仓库设置中添加自定义域名
3. 配置 DNS 记录指向 GitHub Pages

### 部署到根域名

如果你想部署到 `https://stevenspage.github.io/`（根域名），需要：

1. 创建名为 `stevenspage.github.io` 的仓库
2. 修改 `basePath` 为空字符串 `''`
3. 将代码推送到该仓库

## 📦 本地构建测试

在推送之前，你可以本地测试 GitHub Pages 构建：

```bash
# 构建静态站点
pnpm run build:gh-pages

# 构建结果在 out 目录
# 可以使用任何静态服务器预览，例如：
npx serve out
```

## 🔍 查看部署状态

1. 访问 Actions 页面：https://github.com/stevenspage/homepage/actions
2. 查看最新的 "Deploy to GitHub Pages" 工作流运行状态
3. 绿色勾号表示部署成功

## ⚠️ 注意事项

1. **首次部署可能需要几分钟**：GitHub Pages 首次构建和部署通常需要 2-5 分钟
2. **路径问题**：确保所有资源路径使用相对路径或包含 basePath
3. **图片优化**：已配置 `images: { unoptimized: true }` 以支持静态导出
4. **Analytics**：Vercel Analytics 在静态导出时可能无法正常工作，如需分析功能，考虑使用其他方案

## 🐛 故障排除

### 部署失败

- 检查 Actions 日志：https://github.com/stevenspage/homepage/actions
- 确保 GitHub Pages 已启用
- 检查构建日志中的错误信息

### 404 错误

- 确认 basePath 配置正确
- 检查文件路径是否包含 basePath
- 尝试清除浏览器缓存

### 样式或资源加载失败

- 检查资源路径是否正确
- 确认 basePath 和 assetPrefix 配置一致
- 查看浏览器控制台错误信息

## 📚 相关链接

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Next.js 静态导出文档](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Actions 文档](https://docs.github.com/en/actions)

