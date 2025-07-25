// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export

  images: {
    unoptimized: true, // Disable Image Optimization for static export
    domains: ['i.ytimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**', // All YouTube thumbnails
      },
    ],
  },

  // If deploying to GitHub Pages at /repo-name, uncomment these:
  // basePath: '/YOUR_REPO_NAME',
  // assetPrefix: '/YOUR_REPO_NAME',
};

export default nextConfig;
