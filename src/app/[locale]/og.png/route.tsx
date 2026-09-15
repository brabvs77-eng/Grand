import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const OG_SIZE = { width: 1200, height: 630 };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const [t, meta] = await Promise.all([
    getTranslations({ locale, namespace: "hero" }),
    getTranslations({ locale, namespace: "meta.og" }),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a0f0d 0%, #162820 60%, #1e3a2c 100%)",
          color: "#e8f0eb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "linear-gradient(135deg, #f0c96b, #d4a843)",
              color: "#0a0f0d",
              fontSize: 46,
              fontWeight: 900,
            }}
          >
            G
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 38, fontWeight: 700 }}>
            <span>Grand</span>
            <span style={{ color: "#d4a843" }}>Club</span>
          </div>
        </div>

        <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.15, marginBottom: 28 }}>
          {t("title")}
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 28, color: "#8fd4a6" }}>
          <span>{meta("rakeback")}</span>
          <span>{meta("cashier")}</span>
          <span>{meta("domain")}</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
