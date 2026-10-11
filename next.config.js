/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    // Prevent ESLint interactive prompt or errors from failing Vercel production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type validity is strictly checked locally
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
