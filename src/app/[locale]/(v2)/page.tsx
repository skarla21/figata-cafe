import type { Metadata } from "next";
import Home from "@/v2/views/Home";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "");
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return <Home locale={locale} />;
}
