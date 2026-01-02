import type { NextConfig } from 'next';

const nextConfig: NextConfig & { serverActions?: { bodySizeLimit?: string } } =
  {
    reactCompiler: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
    serverActions: {
      bodySizeLimit: '10mb',
    },
  };

export default nextConfig;
