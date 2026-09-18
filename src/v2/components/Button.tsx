import V2Link from "./V2Link";

const variants = {
  solid:
    "bg-v2-olive text-white hover:bg-v2-olive-dark border border-v2-olive",
  ghost:
    "border border-white/80 text-white hover:bg-white/10 bg-transparent",
  "outline-light":
    "border border-v2-gold/90 text-v2-gold hover:bg-white/5 bg-transparent",
  "outline-dark":
    "border border-v2-olive text-v2-olive hover:bg-v2-olive hover:text-white bg-transparent",
} as const;

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  return (
    <V2Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </V2Link>
  );
}
