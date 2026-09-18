import el from "./locales/el.json";
import en from "./locales/en.json";
import { isV2Locale, type V2Locale } from "./data/store";

export type V2Messages = typeof el;

export function v2Locale(locale: string): V2Locale {
  return isV2Locale(locale) ? locale : "el";
}

export function getV2Messages(locale: string): V2Messages {
  return v2Locale(locale) === "en" ? en : el;
}
