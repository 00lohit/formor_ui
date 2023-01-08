/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  useFileSystemPublicRoutes : false,
  distDir: "dist",
  images:{
    unoptimized : true
  }
}

module.exports = nextConfig
