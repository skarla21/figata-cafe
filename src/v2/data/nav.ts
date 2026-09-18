export const v2Routes = {
  home: "/preview",
  about: "/preview/about",
  menu: "/preview/menu",
  products: "/preview/products",
  gallery: "/preview/gallery",
  contact: "/preview/contact",
  terms: "/preview/terms",
} as const;

export type V2RouteKey = keyof typeof v2Routes;

export function v2Href(locale: string, path: string) {
  if (
    path.startsWith("#") ||
    path.startsWith("http") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function isV2HomePath(pathname: string) {
  return pathname === v2Routes.home || pathname === `${v2Routes.home}/`;
}

export function hashFromHref(href: string) {
  const index = href.indexOf("#");
  return index === -1 ? "" : href.slice(index + 1);
}

export const headerNav = [
  { key: "home", href: v2Routes.home },
  { key: "about", href: `${v2Routes.home}#about` },
  { key: "menu", href: `${v2Routes.home}#menu` },
  { key: "products", href: `${v2Routes.home}#products` },
  { key: "gallery", href: `${v2Routes.home}#gallery` },
  { key: "contact", href: `${v2Routes.home}#visit` },
] as const;
