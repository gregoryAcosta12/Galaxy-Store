/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 ESTO ES LO IMPORTANTE

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig