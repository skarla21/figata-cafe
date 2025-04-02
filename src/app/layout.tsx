import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figata Café",
  description: "Website for Figata Café",
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
