"use client";

import { MouseEvent } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { hashFromHref, isV2HomePath, v2Routes } from "../data/nav";
import { scrollToHash } from "./HashScroll";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function V2Link({ href, className, children, onClick }: Props) {
  const pathname = usePathname();
  const hash = hashFromHref(href);
  const pathPart = href.includes("#") ? href.slice(0, href.indexOf("#")) || v2Routes.home : href;
  const isHomeHash =
    Boolean(hash) && (pathPart === v2Routes.home || pathPart === "");
  const isBareHome = href === v2Routes.home || href === `${v2Routes.home}/`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (isV2HomePath(pathname) && (isHomeHash || isBareHome)) {
      event.preventDefault();
      const nextUrl = isBareHome
        ? window.location.pathname
        : `${window.location.pathname}#${hash}`;
      window.history.pushState(null, "", nextUrl);
      scrollToHash(isBareHome ? "" : hash);
    }
    onClick?.();
  }

  return (
    <Link
      href={href}
      className={className}
      scroll={!isHomeHash}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
