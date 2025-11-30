/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // output: 'standalone', // 注释掉以避免 Windows 权限问题，Docker 部署时可启用
}

export default nextConfig
