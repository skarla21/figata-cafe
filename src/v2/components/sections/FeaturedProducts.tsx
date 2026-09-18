import Image from "next/image";
import Button from "../Button";
import Eyebrow from "../Eyebrow";
import { getV2Messages, v2Locale } from "../../i18n";
import { productCards } from "../../data/media";
import { v2Routes } from "../../data/nav";

export default function FeaturedProducts({ locale }: { locale: string }) {
  const t = getV2Messages(locale);
  const lang = v2Locale(locale);

  return (
    <section id="products" className="scroll-mt-24 bg-v2-paper px-4 py-20 sm:px-8 lg:px-16">
      <Eyebrow align="center">{t.products.eyebrow}</Eyebrow>
      <h2 className="font-display mt-4 text-center text-4xl text-v2-ink sm:text-5xl">
        {t.products.title}
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {productCards.map((card) => (
          <article key={card.id} className="flex flex-col items-center text-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={card.image.src}
                alt={card.image.alt[lang]}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 text-[12px] tracking-[0.16em] uppercase">
              {t.products[card.titleKey]}
            </h3>
            <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-v2-muted">
              {t.products[card.bodyKey]}
            </p>
            <Button
              href={v2Routes.products}
              variant="outline-dark"
              className="mt-5"
            >
              {t.products.more}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
