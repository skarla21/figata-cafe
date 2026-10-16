import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import JsonLd from "@/components/JsonLd";
import { buildCafeJsonLd, buildPageMetadata } from "@/lib/seo";
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...buildPageMetadata(locale, ""),
    verification: {
      google: "C5Cx4N7NKFXNEeh-sm-tjLBr9EuXoe5_798xqv2Qq40",
    },
    icons: {
      icon: [
        { url: "/assets/imgs/icon.ico", type: "image/png", sizes: "192x192" },
      ],
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <JsonLd data={buildCafeJsonLd(locale)} />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
