import Eyebrow from "../Eyebrow";
import { getV2Messages } from "../../i18n";

export default function Faq({ locale }: { locale: string }) {
  const t = getV2Messages(locale);

  return (
    <section
      id="faq"
      className="mt-16 border-t border-v2-olive/15 bg-v2-cream px-6 py-14 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
      aria-labelledby="faq-heading"
    >
      <Eyebrow>{t.faq.eyebrow}</Eyebrow>
      <h2
        id="faq-heading"
        className="font-display mt-4 max-w-xl text-3xl leading-tight text-v2-ink sm:text-4xl"
      >
        {t.faq.title}
      </h2>

      <div className="mt-10 max-w-3xl divide-y divide-v2-olive/15 border-y border-v2-olive/15">
        {t.faq.items.map((item) => (
          <details
            key={item.q}
            className="group py-5 open:bg-v2-cream/80"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="font-display text-lg leading-snug text-v2-ink sm:text-xl">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-v2-olive/35 text-v2-olive transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl pr-12 text-sm leading-7 text-v2-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
