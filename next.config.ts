import type { NextConfig } from "next";
import socialMedia from "./social-media.config.json";

const nextConfig: NextConfig = {
  // Keep existing Buffer/Instagram URLs working without bundling social media.
  async rewrites() {
    return socialMedia.prefixes.map((prefix) => ({
      source: `/${prefix}/:path*`,
      destination: `${socialMedia.origin}/${prefix}/:path*`,
    }));
  },
  async headers() {
    return socialMedia.prefixes.map((prefix) => ({
      source: `/${prefix}/:path*`,
      headers: [{ key: "x-vercel-enable-rewrite-caching", value: "1" }],
    }));
  },
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
