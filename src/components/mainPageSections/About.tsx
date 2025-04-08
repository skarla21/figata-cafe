import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-figata-cup">{t("title")}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aliquid, asperiores nemo repudiandae molestias sit, minima assumenda
          odit obcaecati ut quaerat molestiae amet soluta dolorem fugiat dicta.
          Distinctio, dicta porro!
        </p>
      </div>
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square">
        <Image
          src="/assets/imgs/figata_1.jpg"
          alt="Picture of Figata"
          className="object-cover"
          width={1143}
          height={1143}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
    </div>
  );
}
