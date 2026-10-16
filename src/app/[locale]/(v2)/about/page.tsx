import type { Metadata } from "next";
import StubPage from "@/v2/components/StubPage";
import Faq from "@/v2/components/sections/Faq";
import { getV2Messages } from "@/v2/i18n";
import { photos } from "@/v2/data/media";
import JsonLd from "@/components/JsonLd";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "about", "about");
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = getV2Messages(locale);
  return (
    <>
      <JsonLd data={buildFaqJsonLd(locale)} />
      <StubPage
        locale={locale}
        title={t.stubs.aboutTitle}
        body={t.stubs.aboutBody}
        images={[photos.storefront, photos.interior, photos.counter]}
      >
        <Faq locale={locale} />
      </StubPage>
    </>
  );
}
