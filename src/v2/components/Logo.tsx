import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function FigMark({ className = "h-10 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 72"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 10c-1-5.2-7.2-9-12-6.8C18.4 5 21.6 12 23 18"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M23.2 18C10 21 3.2 37 6.8 54c2.4 12.2 10 18 17.2 18s14.8-5.8 17.2-18c2.8-13.2-2.4-27.2-12.8-36"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ className = "", markClassName }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/v2/brand/fig.png"
        alt=""
        width={40}
        height={57}
        className={markClassName ?? "h-11 w-auto"}
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
