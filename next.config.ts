import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.igdb.com",
        pathname: "/igdb/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "i.gadgets360cdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gameranx.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "assets-prd.ignimgs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
