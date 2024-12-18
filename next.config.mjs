import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      /* {
        source: '/',
        destination: '/home',
        permanent: true,
      }, */
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.dakaiai.app',
      },
      {
        protocol: 'https',
        hostname: 'static.dakaiai.app',
      },
      {
        protocol: 'https',
        hostname: 'favicon.im',
      },
    ],
  },
  // 使用 webpack 配置 MDX
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
            providerImportSource: '@mdx-js/react',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;