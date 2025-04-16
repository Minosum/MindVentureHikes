import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    output: 'export',  // Static HTML export
    basePath: '/MindVentureHikes', // Your repo name
    assetPrefix: '/MindVentureHikes/', // Prefix for assets
    images: {
      unoptimized: true, // Required for static export
    },
    trailingSlash: true,
};

export default nextConfig;