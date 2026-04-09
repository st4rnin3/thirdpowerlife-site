import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/schedule/introductory-call",
        destination: "/schedule",
        permanent: true,
      },
      {
        source: "/schedule/introductory-call/",
        destination: "/schedule",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
