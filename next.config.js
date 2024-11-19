/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Extract the repo name from the GitHub repository slug
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static exports
  trailingSlash: true, // Ensures trailing slashes for all paths
  assetPrefix: assetPrefix, // Prefix for static assets
  basePath: basePath, // Base path for the app
};

module.exports = nextConfig;
