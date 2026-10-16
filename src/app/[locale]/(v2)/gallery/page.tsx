import type { Metadata } from "next";
import StubPage from "@/v2/components/StubPage";
import { getV2Messages } from "@/v2/i18n";
import { galleryPagePhotos } from "@/v2/data/media";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "gallery", "gallery");
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  const t = getV2Messages(locale);
  return (
    <StubPage
      locale={locale}
      title={t.stubs.galleryTitle}
      body={t.stubs.galleryBody}
      images={galleryPagePhotos}
    />
  );
}
