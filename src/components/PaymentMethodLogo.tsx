import type { ReactNode } from "react";

const logos: Record<string, ReactNode> = {
  usdt: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#26A17B" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">
        USDT
      </text>
    </svg>
  ),
  pix: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#32BCAD" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily="system-ui,sans-serif">
        pix
      </text>
    </svg>
  ),
  gcash: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#007DFE" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif">
        GCash
      </text>
    </svg>
  ),
  maya: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#00B14F" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">
        Maya
      </text>
    </svg>
  ),
  sbp: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#5B57A2" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">
        СБП
      </text>
    </svg>
  ),
  visa: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#1A1F71" />
      <text x="60" y="27" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontStyle="italic" fontFamily="system-ui,sans-serif">
        VISA
      </text>
    </svg>
  ),
  mastercard: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#1a1a1a" />
      <circle cx="48" cy="20" r="11" fill="#EB001B" opacity="0.95" />
      <circle cx="62" cy="20" r="11" fill="#F79E1B" opacity="0.95" />
    </svg>
  ),
  uzcard: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#004B87" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="system-ui,sans-serif">
        UZCARD
      </text>
    </svg>
  ),
  humo: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#E31E24" />
      <text x="60" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">
        HUMO
      </text>
    </svg>
  ),
  payme: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#00CCCC" />
      <text x="60" y="26" textAnchor="middle" fill="#003" fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif">
        Payme
      </text>
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 120 40" aria-hidden className="h-8 w-auto">
      <rect width="120" height="40" rx="8" fill="#2d5a3f" />
      <path d="M60 10 L78 18 V20 H42 V18 L60 10Z" fill="#f0c96b" />
      <rect x="46" y="22" width="6" height="10" fill="#f0c96b" />
      <rect x="57" y="22" width="6" height="10" fill="#f0c96b" />
      <rect x="68" y="22" width="6" height="10" fill="#f0c96b" />
      <rect x="42" y="32" width="36" height="3" fill="#f0c96b" />
    </svg>
  ),
};

export function PaymentMethodLogo({ id }: { id: string }) {
  return logos[id] ?? null;
}
