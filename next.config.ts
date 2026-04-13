import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Make sure you're using static export mode
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

export default nextConfig;
