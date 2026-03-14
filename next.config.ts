import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "jhuser-it-services";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;