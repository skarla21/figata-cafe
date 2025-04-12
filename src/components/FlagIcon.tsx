import { useState } from "react";
import Image from "next/image";

interface FlagIconProps {
  countryCode: string;
  alt: string;
}

export default function FlagIcon({ countryCode, alt }: FlagIconProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-full"
          style={{ width: "20px", height: "20px" }}
        >
          <div className="w-3 h-3 border-2 border-figata-cup border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={`/assets/imgs/${countryCode}.png`}
        alt={alt}
        height="20"
        width="20"
        className={`object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        loading="eager"
        unoptimized={false}
        priority
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
