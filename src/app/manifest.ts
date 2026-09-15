import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "GrandPoker",
    description: "Grand PPPoker club — 24/7 agent cashier, rakeback up to 60%, VIP program.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0a0f0d",
    theme_color: "#0a0f0d",
    orientation: "portrait",
    categories: ["games", "entertainment"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
