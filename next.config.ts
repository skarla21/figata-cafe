import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.figata.gr" }],
        destination: "https://figata.gr/:path*",
        permanent: true,
      },
      {
        source: "/:locale/preview",
        destination: "/:locale",
        permanent: true,
      },
      {
        source: "/:locale/preview/:path*",
        destination: "/:locale/:path*",
        permanent: true,
      },
      {
        source: "/:locale/contact",
        destination: "/:locale#visit",
        permanent: true,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
