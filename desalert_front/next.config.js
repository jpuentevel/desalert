/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['rickandmortyapi.com'],
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
}