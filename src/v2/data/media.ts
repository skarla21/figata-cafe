export const photos = {
  interior: {
    src: "/v2/photos/interior.webp",
    alt: { el: "Το εσωτερικό του Figata Cafe", en: "Inside Figata Cafe" },
  },
  latteCup: {
    src: "/v2/photos/latte-cup.webp",
    alt: { el: "Καφές Figata σε χάρτινο ποτήρι", en: "Figata coffee in a paper cup" },
  },
  figsBowl: {
    src: "/v2/photos/figs-bowl.webp",
    alt: { el: "Αποξηραμένα σύκα σε μπολ", en: "Bowl of dried figs" },
  },
  figToast: {
    src: "/v2/photos/fig-toast.webp",
    alt: { el: "Τοστ με σύκο", en: "Toast with fig" },
  },
  figGift: {
    src: "/v2/photos/fig-gift.webp",
    alt: { el: "Συσκευασία σύκων για δώρο", en: "Gift bag of figs" },
  },
  storefront: {
    src: "/v2/photos/storefront.webp",
    alt: { el: "Έξω από το Figata Cafe στον Βύρωνα", en: "Outside Figata Cafe in Vyronas" },
  },
  counter: {
    src: "/v2/photos/counter.webp",
    alt: { el: "Στον πάγκο του Figata", en: "At the Figata counter" },
  },
  peopleCups: {
    src: "/v2/photos/people-cups.webp",
    alt: { el: "Καφέδες Figata στο χέρι", en: "Figata cups in hand" },
  },
  cupHand: {
    src: "/v2/photos/cup-hand.webp",
    alt: { el: "Ποτήρι Figata στο χέρι", en: "Figata cup held in hand" },
  },
  productSpread: {
    src: "/v2/photos/product-spread.webp",
    alt: { el: "Προϊόντα και καφές Figata", en: "Figata coffee and products" },
  },
  productSpill: {
    src: "/v2/photos/product-spill.webp",
    alt: { el: "Καφές και ξηροί καρποί Figata", en: "Figata coffee and snacks" },
  },
  productBars: {
    src: "/v2/photos/product-bars.webp",
    alt: { el: "Σνακ και καφές Figata", en: "Figata snacks and coffee" },
  },
  chocolateFigs: {
    src: "/v2/photos/chocolate-figs.webp",
    alt: { el: "Σύκα με σοκολάτα", en: "Chocolate-covered figs" },
  },
  yogurtFigs: {
    src: "/v2/photos/yogurt-figs.webp",
    alt: { el: "Γιαούρτι με σύκο", en: "Yogurt with fig" },
  },
  picnicVineyard: {
    src: "/v2/photos/picnic-vineyard.webp",
    alt: { el: "Σύκα Figata στην εξοχή", en: "Figata figs outdoors" },
  },
  picnicBoard: {
    src: "/v2/photos/picnic-board.webp",
    alt: { el: "Πιατέλα με σύκα και γλυκά", en: "Board of figs and sweets" },
  },
} as const;

export type V2Photo = (typeof photos)[keyof typeof photos];

export const productCards = [
  { id: "figs", image: photos.figsBowl, titleKey: "figsTitle", bodyKey: "figsBody" },
  { id: "coffee", image: photos.latteCup, titleKey: "coffeeTitle", bodyKey: "coffeeBody" },
  { id: "handmade", image: photos.figToast, titleKey: "handmadeTitle", bodyKey: "handmadeBody" },
  { id: "gifts", image: photos.figGift, titleKey: "giftsTitle", bodyKey: "giftsBody" },
] as const;

export const galleryStrip = [
  photos.latteCup,
  photos.interior,
  photos.peopleCups,
  photos.cupHand,
  photos.productSpread,
] as const;

export const galleryPagePhotos = [
  photos.peopleCups,
  photos.storefront,
  photos.counter,
  photos.interior,
  photos.latteCup,
  photos.cupHand,
  photos.figsBowl,
  photos.figToast,
  photos.figGift,
  photos.chocolateFigs,
  photos.yogurtFigs,
  photos.productSpread,
  photos.productSpill,
  photos.picnicBoard,
  photos.picnicVineyard,
] as const;
