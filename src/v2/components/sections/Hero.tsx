import Image from "next/image";
import Button from "../Button";
import V2Link from "../V2Link";
import { getV2Messages, v2Locale } from "../../i18n";
import { photos } from "../../data/media";
import { v2Routes } from "../../data/nav";

export default function Hero({ locale }: { locale: string }) {
  const t = getV2Messages(locale);
  const lang = v2Locale(locale);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden text-white">
      <Image
        src={photos.interior.src}
        alt={photos.interior.alt[lang]}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_18%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />

      <div className="relative flex min-h-screen flex-col justify-end px-6 pb-24 pt-32 sm:px-10 lg:max-w-3xl lg:px-16 lg:pb-28">
        <h1 className="font-display text-[4.2rem] leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
          <span className="block font-medium">{t.hero.titleLine1}</span>
          <span className="mt-1 block italic">
            <span className="text-v2-gold not-italic">{t.hero.ampersand}</span>{" "}
            <span className="font-normal">{t.hero.titleLine2}</span>
          </span>
        </h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={v2Routes.menu} variant="solid">
            {t.hero.ctaMenu}
          </Button>
          <Button href={`${v2Routes.home}#about`} variant="ghost">
            {t.hero.ctaAbout}
          </Button>
        </div>
      </div>

      <V2Link
        href={`${v2Routes.home}#values`}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <span className="sr-only">{t.nav.scrollDown}</span>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </V2Link>
    </section>
  );
}
