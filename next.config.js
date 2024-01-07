// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Use "output: export" configuration
  output: 'export',
};

module.exports = nextConfig;
