# GitHub Pages 设置步骤

## 🔧 第一步：启用 GitHub Pages

### 详细步骤

1. **访问仓库设置页面**
   - 打开：https://github.com/stevenspage/homepage/settings/pages
   - 或者：进入仓库 → 点击 "Settings" → 左侧菜单找到 "Pages"

2. **配置 Build and deployment**
   - 找到 "Build and deployment" 部分
   - 在 "Source" 下拉菜单中选择：**"GitHub Actions"**
   - ⚠️ 不要选择 "Deploy from a branch"

3. **保存设置**
   - 设置后会自动保存
   - 页面会显示 "Your site is ready to be published"

## 🚀 第二步：触发部署

### 方式 1：自动触发（推荐）

推送代码到 `master` 分支会自动触发部署：

```bash
git push origin master
```

### 方式 2：手动触发

1. 访问 Actions 页面：https://github.com/stevenspage/homepage/actions
2. 在左侧找到 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择分支（通常是 `master`）
5. 点击绿色的 "Run workflow" 按钮

## ⏳ 第三步：等待部署完成

1. **查看部署进度**
   - 访问：https://github.com/stevenspage/homepage/actions
   - 点击最新的工作流运行
   - 查看构建和部署日志

2. **部署时间**
   - 首次部署：约 3-5 分钟
   - 后续部署：约 2-3 分钟

3. **确认部署成功**
   - 工作流状态显示绿色 ✅
   - 所有步骤都显示成功

## 🌐 第四步：访问网站

部署成功后，访问：
**https://stevenspage.github.io/homepage/**

⚠️ **注意**：
- URL 末尾有 `/homepage/` 路径
- 首次部署后可能需要等待几分钟才能访问
- 如果显示 404，检查部署是否完成

## 🔍 故障排除

### 问题 1：页面显示 404

**可能原因：**
- GitHub Pages 未启用
- 部署未完成
- basePath 配置错误

**解决方法：**
1. 确认已在 Settings → Pages 中选择了 "GitHub Actions"
2. 检查 Actions 页面，确认部署成功
3. 等待 5-10 分钟后重试

### 问题 2：工作流运行失败

**检查步骤：**
1. 访问 Actions 页面查看错误日志
2. 常见错误：
   - 构建失败：检查代码是否有错误
   - 权限问题：确认已启用 GitHub Pages

### 问题 3：样式或资源加载失败

**可能原因：**
- basePath 配置不正确
- 资源路径问题

**解决方法：**
- 检查 `next.config.mjs` 中的 `basePath` 是否为 `/homepage`
- 查看浏览器控制台错误信息

## 📸 设置截图说明

### Settings → Pages 页面应该显示：

```
Build and deployment
┌─────────────────────────────────────┐
│ Source: [GitHub Actions        ▼]  │
│                                     │
│ ✓ Your site is ready to be         │
│   published at:                     │
│   https://stevenspage.github.io/    │
│   homepage/                         │
└─────────────────────────────────────┘
```

### Actions 页面应该显示：

- "Deploy to GitHub Pages" 工作流
- 最新的运行状态（绿色 ✅ 表示成功）

## ✅ 验证清单

完成设置后，确认以下项目：

- [ ] 在 Settings → Pages 中选择了 "GitHub Actions"
- [ ] Actions 中有 "Deploy to GitHub Pages" 工作流
- [ ] 工作流运行成功（绿色 ✅）
- [ ] 可以访问 https://stevenspage.github.io/homepage/

## 📞 需要帮助？

如果设置过程中遇到问题：
1. 查看 Actions 日志：https://github.com/stevenspage/homepage/actions
2. 检查部署文档：查看仓库中的 `GITHUB_PAGES.md`
3. 查看 GitHub Pages 官方文档：https://docs.github.com/en/pages


