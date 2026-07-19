const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? { output: 'export' }
    : {
        async rewrites() {
          return [
            { source: '/about', destination: '/' },
            { source: '/products', destination: '/' },
            { source: '/services', destination: '/' },
            { source: '/why-choose', destination: '/' },
            { source: '/contact', destination: '/' },
            { source: '/farm-setup', destination: '/' },
            { source: '/dairy-equipment', destination: '/' },
            { source: '/super-genetics', destination: '/' },
            { source: '/dairy-nutrition', destination: '/' },
          ];
        },
      }),
};

export default nextConfig;

