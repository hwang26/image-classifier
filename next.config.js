/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD";

console.log("Test");
console.log(isProd);
console.log(process.env.NEXT_PUBLIC_ENVIRONMENT);

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/image-classifier' : '', 
  assetPrefix: isProd ? '/image-classifier' : '' 
}

module.exports = nextConfig
