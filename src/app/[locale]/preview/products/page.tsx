import StubPage from "@/v2/components/StubPage";
import { getV2Messages } from "@/v2/i18n";
import { photos } from "@/v2/data/media";

export default async function ProductsPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getV2Messages(locale);
  return (
    <StubPage
      locale={locale}
      title={t.stubs.productsTitle}
      body={t.stubs.productsBody}
      images={[
        photos.figsBowl,
        photos.latteCup,
        photos.figToast,
        photos.figGift,
        photos.chocolateFigs,
        photos.yogurtFigs,
      ]}
    />
  );
}
