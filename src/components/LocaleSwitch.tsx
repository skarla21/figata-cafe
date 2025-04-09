"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { Transition } from "@headlessui/react";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const locales = {
    el: { name: "Ελληνικά", flag: "gr" },
    en: { name: "English", flag: "gb" },
  };

  //helper to render a flag
  const renderFlag = (countryCode: string, alt: string) => (
    <Image
      src={`/assets/imgs/${countryCode}.png`}
      alt={alt}
      height="20"
      width="20"
      className="object-cover"
      priority
    />
  );

  return (
    <div className="relative">
      <div className="flex justify-center mt-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-2 py-2 text-gray-700 hover:bg-olive-100 rounded-lg transition-colors cursor-pointer"
        >
          {currentLocale === "en"
            ? renderFlag(locales.en.flag, "United States flag")
            : renderFlag(locales.el.flag, "Greek flag")}
          <FiChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2">
          {Object.entries(locales).map(([code, { name }]) => (
            <Link
              key={code}
              href={pathname.replace(`/${currentLocale}`, `/${code}`)}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {code === "en"
                ? renderFlag(locales.en.flag, "United States flag")
                : renderFlag(locales.el.flag, "Greek flag")}
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </Transition>
    </div>
  );
}
