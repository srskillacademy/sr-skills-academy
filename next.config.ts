import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: "/sr-skills-academy",
  assetPrefix: "/sr-skills-academy/",
};

export default nextConfig;