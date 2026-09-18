import { EB_Garamond, Source_Sans_3 } from "next/font/google";

export const v2Display = EB_Garamond({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-v2-display",
  display: "swap",
});

export const v2Sans = Source_Sans_3({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-v2-sans",
  display: "swap",
});
