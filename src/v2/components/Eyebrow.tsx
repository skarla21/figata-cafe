type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Eyebrow({
  children,
  align = "left",
  className = "",
}: Props) {
  const rule = <span className="h-px w-7 bg-current" aria-hidden="true" />;
  return (
    <div
      className={`flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-v2-olive ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      {rule}
      <span>{children}</span>
      {align === "center" ? rule : null}
    </div>
  );
}
