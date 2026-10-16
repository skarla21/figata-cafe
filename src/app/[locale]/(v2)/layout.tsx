import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { v2Display, v2Sans } from "@/v2/fonts";
import "@/v2/styles/v2.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function V2Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <div className={`v2 ${v2Display.variable} ${v2Sans.variable}`}>
      {children}
    </div>
  );
}
