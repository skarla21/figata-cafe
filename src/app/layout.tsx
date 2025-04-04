import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figata Café",
  metadataBase: new URL("https://figata-cafe.vercel.app"), //change this
  icons: {
    icon: [
      { url: "/assets/imgs/icon.ico", type: "image/png", sizes: "192x192" },
    ],
  },
  openGraph: {
    type: "website",
    title: "Figata Café",
    siteName: "Figata Café",
    images: [
      {
        url: "/assets/imgs/logo.jpg",
        width: 720,
        height: 720,
      },
    ],
  },
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
