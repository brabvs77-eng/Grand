import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages serves a static bundle; locale negotiation for `/`
  // happens in the Pages Function under `functions/`.
  output: "export",
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
