import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grand Club — PPPoker",
  description: "Premium PPPoker club with 24/7 agent cashier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
