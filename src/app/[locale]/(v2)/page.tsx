import Home from "@/v2/views/Home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <Home locale={locale} />;
}
