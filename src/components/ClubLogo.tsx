import { CLUB_NAME } from "@/lib/constants";

const LOGO = "/brand/logo.png";

const sizes = {
  header: "h-14 w-auto md:h-16",
  mark: "h-12 w-auto",
  hero: "h-32 w-auto sm:h-36 md:h-44",
} as const;

export function ClubLogo({
  variant = "header",
  className = "",
}: {
  variant?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <img
      src={LOGO}
      alt={CLUB_NAME}
      width={variant === "hero" ? 320 : variant === "header" ? 200 : 160}
      height={variant === "hero" ? 176 : variant === "header" ? 64 : 48}
      className={`object-contain ${sizes[variant]} ${className}`}
      decoding="async"
      fetchPriority={variant === "hero" ? "high" : undefined}
    />
  );
}
