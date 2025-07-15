import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias['@core'] = path.join(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
