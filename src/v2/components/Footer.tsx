import Logo from "./Logo";
import V2Link from "./V2Link";
import NewsletterForm from "./NewsletterForm";
import { getV2Messages } from "../i18n";
import { v2Routes } from "../data/nav";

export default function Footer({ locale }: { locale: string }) {
  const t = getV2Messages(locale);

  return (
    <footer className="bg-v2-olive-dark text-v2-beige">
      <div className="grid gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div>
          <V2Link href={v2Routes.home} className="text-v2-beige">
            <Logo />
          </V2Link>
          <p className="mt-4 max-w-[16rem] text-sm text-v2-beige/75">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.22em] uppercase">
            {t.footer.menu}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-v2-beige/80">
            <li>
              <V2Link href={v2Routes.products} className="hover:text-white">
                {t.footer.coffee}
              </V2Link>
            </li>
            <li>
              <V2Link href={v2Routes.products} className="hover:text-white">
                {t.footer.drinks}
              </V2Link>
            </li>
            <li>
              <V2Link href={v2Routes.products} className="hover:text-white">
                {t.footer.figsSweets}
              </V2Link>
            </li>
            <li>
              <V2Link href={v2Routes.products} className="hover:text-white">
                {t.footer.products}
              </V2Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.22em] uppercase">
            {t.footer.useful}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-v2-beige/80">
            <li>
              <V2Link href={v2Routes.about} className="hover:text-white">
                {t.footer.about}
              </V2Link>
            </li>
            <li>
              <V2Link href={v2Routes.gallery} className="hover:text-white">
                {t.footer.gallery}
              </V2Link>
            </li>
            <li>
              <V2Link href={v2Routes.contact} className="hover:text-white">
                {t.footer.contact}
              </V2Link>
            </li>
            <li>
              <V2Link href={v2Routes.terms} className="hover:text-white">
                {t.footer.terms}
              </V2Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.22em] uppercase">
            {t.footer.newsletter}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-v2-beige/80">
            {t.footer.newsletterText}
          </p>
          <NewsletterForm />
        </div>
      </div>
      <p className="border-t border-white/10 px-6 py-5 text-center text-xs text-v2-beige/55">
        {t.footer.copyright}
      </p>
    </footer>
  );
}
