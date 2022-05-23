/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['rickandmortyapi.com'],
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
}