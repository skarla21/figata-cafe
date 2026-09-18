import Button from "../Button";
import Eyebrow from "../Eyebrow";
import { getV2Messages } from "../../i18n";
import { v2Routes } from "../../data/nav";

export default function MenuTeaser({ locale }: { locale: string }) {
  const t = getV2Messages(locale);

  return (
    <section id="menu" className="scroll-mt-24 bg-v2-cream px-6 py-16 text-center sm:px-10 lg:py-20">
      <Eyebrow align="center">{t.nav.menu}</Eyebrow>
      <h2 className="font-display mt-4 text-4xl text-v2-ink sm:text-5xl">
        {t.stubs.menuTitle}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-v2-muted">
        {t.stubs.comingSoon}. {t.stubs.menuBody}
      </p>
      <Button href={v2Routes.menu} variant="outline-dark" className="mt-8">
        {t.hero.ctaMenu}
      </Button>
    </section>
  );
}
