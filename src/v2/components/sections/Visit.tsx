import Image from "next/image";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";
import Eyebrow from "../Eyebrow";
import { ClockIcon, PhoneIcon, PinIcon } from "../Icons";
import { getV2Messages, v2Locale } from "../../i18n";
import { photos } from "../../data/media";
import { store } from "../../data/store";

export default function Visit({ locale }: { locale: string }) {
  const t = getV2Messages(locale);
  const lang = v2Locale(locale);

  return (
    <section id="visit" className="scroll-mt-24 grid lg:grid-cols-2">
      <div className="relative bg-v2-cream px-6 py-16 sm:px-10 lg:px-16">
        <Eyebrow>{t.visit.eyebrow}</Eyebrow>
        <h2 className="font-display mt-4 text-4xl leading-tight text-v2-ink sm:text-5xl">
          {t.visit.title}
        </h2>

        <ul className="mt-10 space-y-6 text-sm text-v2-ink">
          <li className="flex gap-4">
            <ClockIcon className="mt-0.5 h-8 w-8 shrink-0 text-v2-olive" />
            <div>
              <p className="text-v2-muted">{t.visit.hoursNote}</p>
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
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
          </li>
          <li className="flex items-start gap-4">
            <PinIcon className="mt-0.5 h-8 w-8 shrink-0 text-v2-olive" />
            <a
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-v2-olive"
            >
              {store.address[lang]}
            </a>
          </li>
          <li className="flex items-center gap-4">
            <PhoneIcon className="h-8 w-8 shrink-0 text-v2-olive" />
            <a href={`tel:${store.phoneTel}`} className="hover:text-v2-olive">
              {store.phoneDisplay}
            </a>
          </li>
        </ul>

        <div className="mt-8 flex gap-3 text-v2-olive">
          <SocialCircle href={store.social.facebook} label="Facebook">
            <FaFacebookF className="h-3.5 w-3.5" />
          </SocialCircle>
          <SocialCircle href={store.social.instagram} label="Instagram">
            <FaInstagram className="h-3.5 w-3.5" />
          </SocialCircle>
          <SocialCircle href={store.mapsUrl} label="Google Maps">
            <FaMapMarkerAlt className="h-3.5 w-3.5" />
          </SocialCircle>
          <SocialCircle href={store.social.tiktok} label="TikTok">
            <FaTiktok className="h-3.5 w-3.5" />
          </SocialCircle>
        </div>

        <p className="font-hand pointer-events-none mt-10 text-right text-4xl leading-tight text-v2-ink lg:absolute lg:right-10 lg:bottom-24 lg:mt-0">
          {t.visit.tagline}
          <span className="mt-2 block text-v2-olive" aria-hidden="true">
            ♡
          </span>
        </p>
      </div>

      <div className="relative min-h-[22rem]">
        <Image
          src={photos.cupHand.src}
          alt={photos.cupHand.alt[lang]}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

function SocialCircle({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-v2-olive/40 text-v2-olive hover:bg-v2-olive hover:text-white"
    >
      {children}
    </a>
  );
}
