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
      // SEO: enforce www.thirdpowerlife.ai as canonical
      {
        source: "/:path*",
        has: [{ type: "host", value: "thirdpowerlife.com" }],
        destination: "https://www.thirdpowerlife.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thirdpowerlife.com" }],
        destination: "https://www.thirdpowerlife.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "thirdpowerlife.ai" }],
        destination: "https://www.thirdpowerlife.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
