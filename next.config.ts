import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shining-agreement-0c08a3c4d1.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
