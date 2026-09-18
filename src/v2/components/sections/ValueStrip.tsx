import { FigMark } from "../Logo";
import { CupIcon, LeafIcon, SmileIcon } from "../Icons";
import { getV2Messages } from "../../i18n";

export default function ValueStrip({ locale }: { locale: string }) {
  const t = getV2Messages(locale);
  const items = [
    { icon: <FigMark className="h-10 w-7" />, title: t.value.figs, sub: t.value.figsSub },
    { icon: <LeafIcon />, title: t.value.local, sub: t.value.localSub },
    { icon: <CupIcon />, title: t.value.coffee, sub: t.value.coffeeSub },
    { icon: <SmileIcon />, title: t.value.smile, sub: t.value.smileSub },
  ];

  return (
    <section id="values" className="scroll-mt-24 bg-v2-beige">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col items-center border-v2-olive/15 px-4 py-10 text-center text-v2-olive ${
              index % 2 === 0 ? "border-r" : ""
            } ${index < 2 ? "border-b" : ""} lg:border-b-0 ${
              index < 3 ? "lg:border-r" : "lg:border-r-0"
            }`}
          >
            <div className="text-v2-olive/80">{item.icon}</div>
            <p className="mt-4 text-[11px] leading-5 tracking-[0.14em] uppercase">
              {item.title}
              <br />
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
