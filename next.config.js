/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/image-classifier' : '', 
  assetPrefix: isProd ? '/image-classifier' : '', 
}

module.exports = nextConfig
