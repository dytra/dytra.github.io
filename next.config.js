/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const repo = 'dytra.github.iov3'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
  nextConfig,
  assetPrefix: assetPrefix,
  basePath: basePath,
}
