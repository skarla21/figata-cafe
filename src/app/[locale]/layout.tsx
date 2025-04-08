import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
