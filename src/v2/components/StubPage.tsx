import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { v2Locale } from "../i18n";
import type { V2Photo } from "../data/media";

type Section = {
  title: string;
  paragraphs: readonly string[];
};

type Props = {
  locale: string;
  title: string;
  body: string;
  sections?: readonly Section[];
  updatedLabel?: string;
  images?: readonly V2Photo[];
  children?: React.ReactNode;
};

export default function StubPage({
  locale,
  title,
  body,
  sections,
  updatedLabel,
  images,
  children,
}: Props) {
  const lang = v2Locale(locale);

  return (
    <>
      <Header />
      <main className="bg-v2-paper px-6 pb-20 pt-28 sm:px-10 lg:px-16">
        <h1 className="font-display max-w-3xl text-4xl text-v2-ink sm:text-5xl">
          {title}
        </h1>
        {updatedLabel ? (
          <p className="mt-3 text-sm text-v2-muted">{updatedLabel}</p>
        ) : null}
        <p className="mt-6 max-w-2xl text-base leading-7 text-v2-muted">{body}</p>
        {sections && sections.length > 0 ? (
          <div className="mt-10 max-w-2xl space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl text-v2-ink">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-v2-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : null}
        {images && images.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt[lang]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
