import StubPage from "@/v2/components/StubPage";
import { getV2Messages, v2Locale } from "@/v2/i18n";
import { store } from "@/v2/data/store";

export default async function ContactPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getV2Messages(locale);
  const lang = v2Locale(locale);
  const mapsKey = process.env.MAPS_API_KEY;
  const mapUrl = mapsKey
    ? `https://www.google.com/maps/embed/v1/place?q=place_id:${store.mapsPlaceId}&key=${mapsKey}&zoom=15`
    : store.mapsUrl;

  return (
    <StubPage locale={locale} title={t.stubs.contactTitle} body={t.stubs.contactBody}>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-v2-ink">
          <p>
            <a
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-v2-olive"
            >
              {store.address[lang]}
            </a>
          </p>
          <p>
            <a href={`tel:${store.phoneTel}`} className="hover:text-v2-olive">
              {store.phoneDisplay}
            </a>
          </p>
          {process.env.NEXT_PUBLIC_FIGATA_EMAIL ? (
            <p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_FIGATA_EMAIL}`}
                className="hover:text-v2-olive"
              >
                {process.env.NEXT_PUBLIC_FIGATA_EMAIL}
              </a>
            </p>
          ) : null}
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 pt-4">
            {store.hours.map((row) => (
              <div key={row.day.en} className="contents">
                <dt>{row.day[lang]}</dt>
                <dd>
                  {row.open} – {row.close}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="h-80 overflow-hidden bg-v2-beige">
          {mapsKey ? (
            <iframe
              title={t.stubs.contactTitle}
              src={mapUrl}
              className="h-full w-full border-0"
              loading="lazy"
            />
          ) : (
            <a
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex h-full items-center justify-center text-v2-olive underline"
            >
              {store.address[lang]}
            </a>
          )}
        </div>
      </div>
    </StubPage>
  );
}
