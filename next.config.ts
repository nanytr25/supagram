import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "tmggqjawpznlawvajifn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
