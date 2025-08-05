import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Generate sitemap and robots.txt
  generateBuildId: () => 'build',
};

export default nextConfig;
