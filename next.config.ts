// import type { NextConfig } from "next";
// import path from 'path'; // Import path at the top

// const nextConfig: NextConfig = {
//   reactStrictMode: true, // Enable React Strict Mode
//   swcMinify: true,       // Enable SWC minifier for better performance

//   webpack(config) {
//     // Configure path aliases using Webpack
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname), // Set the base directory for the '@' alias
//     };
    
//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         pathname: '/images/**',
//       },
//     ],
//   },

//   // Any other custom configurations can go here
// };

// export default nextConfig;

import path from 'path';
import type { NextConfig } from 'next';
import type { Configuration as WebpackConfig } from 'webpack';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config: WebpackConfig) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname), // Set the base directory for the '@' alias
      },
    };
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pix10.agoda.net', // Allow images from pix10.agoda.net
        pathname: '/hotelImages/**', // Restrict to paths under /hotelImages/
      },
    ],
  },
};

export default nextConfig;
