/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_PAGES_PREFIX,
  assetPrefix: process.env.GITHUB_PAGES_PREFIX
}

module.exports = nextConfig
