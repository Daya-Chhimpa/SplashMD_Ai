import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_BASE_URL || 'https://conversable-jimmy-dispersedly.ngrok-free.dev'}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
