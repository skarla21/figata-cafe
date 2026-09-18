import Image from "next/image";
import Button from "../Button";
import { getV2Messages, v2Locale } from "../../i18n";
import { galleryStrip } from "../../data/media";
import { v2Routes } from "../../data/nav";

export default function GalleryStrip({ locale }: { locale: string }) {
  const t = getV2Messages(locale);
  const lang = v2Locale(locale);

  return (
    <section id="gallery" className="scroll-mt-24 bg-v2-olive-dark py-16 text-v2-beige">
      <h2 className="px-4 text-center text-[12px] tracking-[0.32em] uppercase">
        {t.gallery.title}
      </h2>
      <div className="mt-10 flex gap-3 overflow-x-auto px-4 pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-16">
        {galleryStrip.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] min-w-[70%] overflow-hidden sm:min-w-[45%] lg:min-w-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt[lang]}
              fill
              sizes="(min-width: 1024px) 20vw, 70vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={v2Routes.gallery} variant="outline-light">
          {t.gallery.cta}
        </Button>
      </div>
    </section>
  );
}
