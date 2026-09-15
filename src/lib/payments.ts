export type PaymentMethod = {
  id: string;
  /** Accessible label; visible name comes from i18n. */
  label: string;
};

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "usdt", label: "USDT" },
  { id: "pix", label: "Pix" },
  { id: "gcash", label: "GCash" },
  { id: "maya", label: "Maya" },
  { id: "sbp", label: "SBP" },
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "uzcard", label: "Uzcard" },
  { id: "humo", label: "Humo" },
  { id: "payme", label: "Payme" },
  { id: "bank", label: "Bank transfer" },
];
