/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * @sanity/workbench (pulled in by the embedded Studio) declares a
   * "development" export condition that points at raw .ts source inside
   * node_modules. Next resolves that condition in dev, and Turbopack will not
   * compile TypeScript from node_modules unless the package is listed here.
   * Without this, /studio 500s in dev with "Unknown module type".
   */
  transpilePackages: ['@sanity/workbench'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig
