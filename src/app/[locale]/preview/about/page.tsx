import StubPage from "@/v2/components/StubPage";
import { getV2Messages } from "@/v2/i18n";
import { photos } from "@/v2/data/media";

export default async function AboutPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getV2Messages(locale);
  return (
    <StubPage
      locale={locale}
      title={t.stubs.aboutTitle}
      body={t.stubs.aboutBody}
      images={[photos.storefront, photos.interior, photos.counter]}
    />
  );
}
