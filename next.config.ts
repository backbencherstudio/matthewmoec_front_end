import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cartforfood.pixelstack.cloud",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "api.cartforgood.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
