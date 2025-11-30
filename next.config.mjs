/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages 部署配置
  ...(process.env.GITHUB_PAGES === 'true' ? {
    output: 'export',
    basePath: '/homepage',
    assetPrefix: '/homepage',
    trailingSlash: true,
  } : {}),
  // Cloudflare Pages 部署配置（静态导出，无 basePath）
  ...(process.env.CF_PAGES === 'true' || process.env.CF_PAGES_BRANCH ? {
    output: 'export',
    trailingSlash: true,
  } : {}),
  // 在 Docker 环境或 CI 环境中启用 standalone 模式
  ...(process.env.ENABLE_STANDALONE === 'true' || process.env.DOCKER_BUILD === 'true' ? {
    output: 'standalone',
  } : {}),
}

export default nextConfig
