import StubPage from "@/v2/components/StubPage";
import { getV2Messages } from "@/v2/i18n";
import { galleryPagePhotos } from "@/v2/data/media";

export default async function GalleryPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
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
