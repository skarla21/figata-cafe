import StubPage from "@/v2/components/StubPage";
import { getV2Messages } from "@/v2/i18n";

export default async function TermsPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getV2Messages(locale);
  return (
    <StubPage
      locale={locale}
      title={t.stubs.termsTitle}
      body={t.stubs.termsBody}
    />
  );
}
