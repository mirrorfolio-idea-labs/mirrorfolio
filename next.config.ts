import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a static marketing surface plus one POST route handler, so the
  // default (server) output is right — /api/leads must run on every request.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
