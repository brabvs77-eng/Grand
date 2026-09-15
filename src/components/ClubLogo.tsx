import { CLUB_NAME } from "@/lib/constants";

const LOGO_HEADER = "/brand/logo-header.png";
const LOGO_MARK = "/brand/logo.png";

export function ClubLogo({
  variant = "header",
  className = "",
}: {
  variant?: "header" | "mark";
  className?: string;
}) {
  const src = variant === "mark" ? LOGO_MARK : LOGO_HEADER;
  const height = variant === "mark" ? 48 : 40;

  return (
    <img
      src={src}
      alt={CLUB_NAME}
      width={variant === "mark" ? height : 160}
      height={height}
      className={`object-contain ${className}`}
      decoding="async"
    />
  );
}
