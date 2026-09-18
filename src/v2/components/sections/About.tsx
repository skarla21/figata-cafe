import Image from "next/image";
import Button from "../Button";
import Eyebrow from "../Eyebrow";
import { FigBranch } from "../Icons";
import { getV2Messages, v2Locale } from "../../i18n";
import { photos } from "../../data/media";
import { v2Routes } from "../../data/nav";

export default function About({ locale }: { locale: string }) {
  const t = getV2Messages(locale);
  const lang = v2Locale(locale);

  return (
    <section id="about" className="scroll-mt-24 grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
      <div className="relative overflow-hidden bg-v2-cream px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <Eyebrow>{t.about.eyebrow}</Eyebrow>
        <h2 className="font-display mt-5 max-w-md text-4xl leading-tight text-v2-ink sm:text-5xl">
          {t.about.title}
        </h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-v2-muted">{t.about.p1}</p>
        <p className="mt-4 max-w-md text-sm leading-7 text-v2-muted">{t.about.p2}</p>
        <Button href={v2Routes.about} variant="solid" className="mt-8">
          {t.about.cta}
        </Button>
        <FigBranch className="pointer-events-none absolute right-2 bottom-2 h-36 w-44 text-v2-olive/25" />
      </div>
      <div className="relative min-h-[22rem] lg:min-h-full">
        <Image
          src={photos.storefront.src}
          alt={photos.storefront.alt[lang]}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
