import { CLUB_NAME } from "@/lib/constants";

const LOGO = "/brand/logo.png";

export function ClubLogo({
  variant = "header",
  className = "",
}: {
  variant?: "header" | "mark";
  className?: string;
}) {
  const isHeader = variant === "header";

  return (
    <img
      src={LOGO}
      alt={CLUB_NAME}
      width={isHeader ? 200 : 160}
      height={isHeader ? 64 : 48}
      className={`object-contain ${isHeader ? "h-14 w-auto md:h-16" : "h-12 w-auto"} ${className}`}
      decoding="async"
    />
  );
}
