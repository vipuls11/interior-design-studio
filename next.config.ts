import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mindcraft-studio",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3.ru1.storage.beget.cloud",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
