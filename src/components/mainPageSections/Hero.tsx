import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="text-center space-y-8">
      <h1 className="text-6xl md:text-8xl font-bold text-figata-cup mb-8 animate-fade-in">
        Figata Café
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
        {t("description")}
      </p>
    </div>
  );
}
