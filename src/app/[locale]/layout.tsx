import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figata Café",
  description:
    "Σε μια ήσυχη γωνιά του Βύρωνα, δημιουργήσαμε ένα μικρό καφέ. Έναν χώρο που γεννήθηκε από μια προσωπική αγάπη: τον καφέ, την υγιεινή διατροφή και τα αρώματα της ελληνικής γης.",
  metadataBase: new URL("https://figata.gr"),
  verification: {
    google: "C5Cx4N7NKFXNEeh-sm-tjLBr9EuXoe5_798xqv2Qq40",
  },
  icons: {
    icon: [
      { url: "/assets/imgs/icon.ico", type: "image/png", sizes: "192x192" },
    ],
  },
  openGraph: {
    type: "website",
    title: "Figata Café",
    description:
      "Σε μια ήσυχη γωνιά του Βύρωνα, δημιουργήσαμε ένα μικρό καφέ. Έναν χώρο που γεννήθηκε από μια προσωπική αγάπη: τον καφέ, την υγιεινή διατροφή και τα αρώματα της ελληνικής γης.",
    siteName: "Figata Café",
    locale: "el_GR",
    images: [
      {
        url: "/assets/imgs/logo.jpg",
        width: 720,
        height: 720,
        alt: "Figata Café Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Figata Café",
    description:
      "Σε μια ήσυχη γωνιά του Βύρωνα, δημιουργήσαμε ένα μικρό καφέ. Έναν χώρο που γεννήθηκε από μια προσωπική αγάπη: τον καφέ, την υγιεινή διατροφή και τα αρώματα της ελληνικής γης.",
    images: ["/assets/imgs/logo.jpg"],
  },
  alternates: {
    canonical: "https://figata.gr",
    languages: {
      en: "https://figata.gr/en",
      el: "https://figata.gr/el",
    },
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
