/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: '/landing-page/',
  basePath: '/landing-page',
};

export default nextConfig;
