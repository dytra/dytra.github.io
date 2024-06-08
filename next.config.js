/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
const nextConfig = {
  reactStrictMode: true,
}
let assetPrefix = ''
let basePath = undefined

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  nextConfig,
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'standalone'
}
