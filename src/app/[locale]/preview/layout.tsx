import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { v2Display, v2Sans } from "@/v2/fonts";
import { getV2Messages } from "@/v2/i18n";
import "@/v2/styles/v2.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getV2Messages(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function PreviewLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <div
      className={`v2 ${v2Display.variable} ${v2Sans.variable}`}
    >
      {children}
    </div>
  );
}
