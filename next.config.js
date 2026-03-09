/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel symlink deduplication 오류 방지
  outputFileTracingExcludes: {
    '*': ['**/@swc/core*', '**/@esbuild*'],
  },
}

module.exports = nextConfig
