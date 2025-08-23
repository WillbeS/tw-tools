import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // Local development
      {
        protocol: "https",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      // Production
      {
        protocol: "https",
        hostname: "twtools.vvillbes.eu",
        pathname: "/**", // Allow all paths for both API and static files
      },
    ],
  },
};

export default nextConfig;
