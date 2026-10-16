import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function FigMark({ className = "h-10 w-8" }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: "url(/v2/brand/fig.png)",
        maskImage: "url(/v2/brand/fig.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

export default function Logo({ className = "", markClassName }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/v2/brand/fig.png"
        alt=""
        width={379}
        height={532}
        className={
          markClassName ??
          "h-12 w-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]"
        }
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.65rem] tracking-[0.22em]">
          FIGATA
        </span>
        <span className="mt-1 font-display text-[0.7rem] tracking-[0.55em] opacity-90">
          CAFE
        </span>
      </span>
    </span>
  );
}
