export const store = {
  name: "Figata Cafe",
  address: {
    el: "Αγίας Σοφίας 128, Βύρωνας 16232",
    en: "Agias Sofias 128, Vyronas 16232",
  },
  phoneDisplay: "+30 21 1217 5717",
  phoneTel: "+302112175717",
  mapsUrl: "https://maps.app.goo.gl/bt8ssrzkD9kT16Sp8",
  mapsPlaceId: "ChIJsxVeB4q9oRQRzBN8DtslF3A",
  social: {
    instagram: "https://www.instagram.com/figata_cafe/",
    facebook: "https://www.facebook.com/FigataDriedFigs",
    tiktok: "https://www.tiktok.com/@figata_cafe",
  },
  hours: [
    { day: { el: "Δευτέρα", en: "Monday" }, open: "07:00", close: "19:00" },
    { day: { el: "Τρίτη", en: "Tuesday" }, open: "07:00", close: "15:00" },
    { day: { el: "Τετάρτη", en: "Wednesday" }, open: "07:00", close: "19:00" },
    { day: { el: "Πέμπτη", en: "Thursday" }, open: "07:00", close: "19:00" },
    { day: { el: "Παρασκευή", en: "Friday" }, open: "07:00", close: "19:00" },
    { day: { el: "Σάββατο", en: "Saturday" }, open: "08:00", close: "15:00" },
    { day: { el: "Κυριακή", en: "Sunday" }, open: "09:00", close: "15:00" },
  ],
} as const;

export type V2Locale = "el" | "en";

export function isV2Locale(value: string): value is V2Locale {
  return value === "el" || value === "en";
}
