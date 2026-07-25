import type { NextConfig } from "next";
import { resolve } from "node:path";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
// import path from "path";
// import { WebpackManifestPlugin } from "webpack-manifest-plugin";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  devIndicators: false,
  reactStrictMode: false,
  async headers() {
    return [
      {
        // Matches all paths and files served at the root (from the public folder)
        source: "/:path*{.}*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Replace '*' with your specific allowed domain if needed
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
