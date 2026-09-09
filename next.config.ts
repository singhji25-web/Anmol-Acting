import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // PLACEHOLDER - placehold.co is only used for the sample headshots.
      // Once real headshots live in /public/headshots, this entry can be removed.
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
