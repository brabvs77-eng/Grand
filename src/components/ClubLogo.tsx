import { CLUB_NAME } from "@/lib/constants";

const LOGO = "/brand/logo.png";

const sizes = {
  header: "h-14 w-auto md:h-16",
  mark: "h-12 w-auto",
  hero: "h-64 w-auto sm:h-72 md:h-[22rem]",
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
      width={variant === "hero" ? 640 : variant === "header" ? 200 : 160}
      height={variant === "hero" ? 352 : variant === "header" ? 64 : 48}
      className={`object-contain ${sizes[variant]} ${className}`}
      decoding="async"
      fetchPriority={variant === "hero" ? "high" : undefined}
    />
  );
}
