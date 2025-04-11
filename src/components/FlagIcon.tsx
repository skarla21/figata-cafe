import Image from "next/image";

interface FlagIconProps {
  countryCode: string;
  alt: string;
}

export default function FlagIcon({ countryCode, alt }: FlagIconProps) {
  return (
    <Image
      src={`/assets/imgs/${countryCode}.png`}
      alt={alt}
      height="20"
      width="20"
      className="object-cover"
      loading="eager"
      unoptimized={false}
      priority
    />
  );
}
