import { ImageResponse } from "next/og";

export function renderIcon(size: number, padding = 0) {
  const inner = size - padding * 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f0d",
        }}
      >
        <div
          style={{
            width: inner,
            height: inner,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: inner * 0.22,
            background: "linear-gradient(135deg, #f0c96b, #d4a843)",
            color: "#0a0f0d",
            fontSize: inner * 0.62,
            fontWeight: 900,
            letterSpacing: -inner * 0.02,
          }}
        >
          G
        </div>
      </div>
    ),
    { width: size, height: size }
  );
}
