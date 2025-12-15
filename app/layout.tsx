import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prism | Intelligent AI Photo Sharing",
  description: "Next-generation photo sharing powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
