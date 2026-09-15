import type { MetadataRoute } from "next";
import { AI_CRAWLER_AGENTS } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const HOST = SITE_URL.replace(/^https?:\/\//, "");

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const };

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      ...AI_CRAWLER_AGENTS.map((agent) => ({
        userAgent: agent,
        ...allowAll,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: HOST,
  };
}
