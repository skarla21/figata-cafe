import type { Metadata } from "next";
import { getV2Messages, v2Locale, type V2Messages } from "@/v2/i18n";
import { store, type V2Locale } from "@/v2/data/store";

export const SITE_URL = "https://figata.gr";

export function localePath(locale: string, path = ""): string {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  const suffix = normalized ? `/${normalized}` : "";
  return `/${locale}${suffix}`;
}

export function absoluteUrl(locale: string, path = ""): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

export function languageAlternates(path = ""): Record<string, string> {
  return {
    el: absoluteUrl("el", path),
    en: absoluteUrl("en", path),
    "x-default": absoluteUrl("el", path),
  };
}

type PageMetaKey = keyof V2Messages["meta"]["pages"];

export function buildPageMetadata(
  locale: string,
  path: string,
  page?: PageMetaKey,
): Metadata {
  const lang = v2Locale(locale);
  const t = getV2Messages(lang);
  const title = page ? t.meta.pages[page].title : t.meta.title;
  const description = page
    ? t.meta.pages[page].description
    : t.meta.description;
  const canonical = absoluteUrl(lang, path);
  const ogLocale = lang === "en" ? "en_US" : "el_GR";

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: store.name,
      locale: ogLocale,
      images: [
        {
          url: "/assets/imgs/logo.jpg",
          width: 720,
          height: 720,
          alt: `${store.name} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/imgs/logo.jpg"],
    },
  };
}

const DAY_SCHEMA = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function cafeDescription(locale: V2Locale): string {
  return locale === "en"
    ? "A cozy neighborhood cafe in Vyronas serving specialty coffee, natural dried figs from Taxiarches in Evia, and authentic Greek flavors."
    : "Ένα ζεστό γειτονικό καφέ στον Βύρωνα με καλό specialty καφέ, φυσικά αποξηραμένα σύκα από τον Ταξιάρχη Ευβοίας και αυθεντικές ελληνικές γεύσεις.";
}

export function buildCafeJsonLd(locale: string) {
  const lang = v2Locale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE_URL}/#cafe`,
    name: store.name,
    url: SITE_URL,
    telephone: store.phoneTel,
    image: `${SITE_URL}/assets/imgs/logo.jpg`,
    description: cafeDescription(lang),
    servesCuisine: lang === "en" ? "Coffee, Greek" : "Καφές, Ελληνική",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Agias Sofias 128",
      addressLocality: "Vyronas",
      postalCode: "16232",
      addressCountry: "GR",
    },
    hasMap: store.mapsUrl,
    sameAs: [
      store.social.instagram,
      store.social.facebook,
      store.social.tiktok,
    ],
    openingHoursSpecification: store.hours.map((row, index) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_SCHEMA[index],
      opens: row.open,
      closes: row.close,
    })),
  };
}

export function buildFaqJsonLd(locale: string) {
  const t = getV2Messages(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
