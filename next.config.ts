import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },

      { protocol: "https", hostname: "placehold.co" },

      { protocol: "https", hostname: "via.placeholder.com" },

      { protocol: "https", hostname: "dummyimage.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/images/duka.png?v=2",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
