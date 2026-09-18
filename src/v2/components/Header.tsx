"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import V2Link from "./V2Link";
import { getV2Messages } from "../i18n";
import { hashFromHref, headerNav, isV2HomePath, v2Routes } from "../data/nav";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = getV2Messages(locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const isHome = isV2HomePath(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }

    const ids = headerNav
      .map((item) => hashFromHref(item.href))
      .filter(Boolean)
      .concat("hero");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const solid = !isHome || scrolled || open;
  const otherLocale = locale === "en" ? "el" : "en";

  function itemIsActive(key: string, href: string) {
    if (!isHome) return false;
    if (key === "home") return !activeId || activeId === "hero";
    return hashFromHref(href) === activeId;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-v2-olive-dark/95 text-v2-beige shadow-sm backdrop-blur"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center gap-4 px-4 py-4 lg:px-10">
        <V2Link href={v2Routes.home} className="shrink-0 text-current">
          <Logo />
        </V2Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {headerNav.map((item) => (
            <V2Link
              key={item.key}
              href={item.href}
              className="relative text-[11px] tracking-[0.2em] uppercase opacity-90 hover:opacity-100"
            >
              {t.nav[item.key]}
              {itemIsActive(item.key, item.href) ? (
                <span className="absolute left-1/2 -bottom-1.5 h-px w-6 -translate-x-1/2 bg-v2-gold" />
              ) : null}
            </V2Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href={pathname}
            locale={otherLocale}
            className="hidden text-[10px] tracking-[0.22em] uppercase opacity-80 hover:opacity-100 lg:inline"
          >
            {otherLocale}
          </Link>
          <V2Link
            href={`${v2Routes.home}#visit`}
            className="bg-v2-olive px-4 py-2 text-[10px] tracking-[0.18em] text-white uppercase hover:bg-v2-olive-mid sm:px-5"
          >
            {t.nav.visitUs}
          </V2Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? t.nav.closeMenu : t.nav.openMenu}
            </span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-px w-full bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-v2-olive-dark px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {headerNav.map((item) => (
              <V2Link
                key={item.key}
                href={item.href}
                className="text-sm tracking-[0.18em] text-v2-beige uppercase"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.key]}
              </V2Link>
            ))}
            <Link
              href={pathname}
              locale={otherLocale}
              className="text-sm tracking-[0.18em] text-v2-gold uppercase"
            >
              {otherLocale === "en" ? "English" : "Ελληνικά"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
