import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'katherinehoustonart.com' },
    ],
  },
}

export default nextConfig
