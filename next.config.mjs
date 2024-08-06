/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Example: Fixes packages that depend on `fs` module
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
};


export default nextConfig;
