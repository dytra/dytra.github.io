/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
const nextConfig = {
  reactStrictMode: true,
  output: "export",  // <=== enables static exports
  trailingSlash: true
}
let assetPrefix = ''
let basePath = undefined

if (isGithubActions) {
  // trim off `<owner>/`
  // const repo = ""
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
  // assetPrefix = `/${repo}/`
  // basePath = `/${repo}`
}

module.exports = {
  nextConfig,
  assetPrefix: assetPrefix,
  basePath: basePath,
}
