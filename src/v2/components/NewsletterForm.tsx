"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";
import { getV2Messages } from "../i18n";

export default function NewsletterForm() {
  const locale = useLocale();
  const t = getV2Messages(locale);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm text-v2-beige/80">{t.footer.newsletterThanks}</p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative mt-4">
      <label className="sr-only" htmlFor="v2-newsletter-email">
        {t.footer.emailPlaceholder}
      </label>
      <input
        id="v2-newsletter-email"
        type="email"
        required
        placeholder={t.footer.emailPlaceholder}
        className="w-full border border-white/25 bg-transparent px-3 py-2.5 pr-12 text-sm text-v2-beige placeholder:text-white/45 outline-none focus:border-v2-gold"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 px-3 text-v2-beige hover:text-v2-gold"
        aria-label={t.footer.subscribe}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M3 11.5 21 4l-7.5 17-2.2-6.3L3 11.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
