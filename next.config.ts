const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/MindVentureHikes' : '',
  assetPrefix: isGithubPages ? '/MindVentureHikes/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;