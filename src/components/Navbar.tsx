"use client";
import { Link } from "react-scroll";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import LocaleSwitch from "./LocaleSwitch";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const t = useTranslations("navbar");

  const navLinks = [
    { name: t("figata"), target: "hero" },
    { name: t("about"), target: "about" },
    { name: t("products"), target: "products" },
    { name: t("gallery"), target: "gallery" },
    { name: t("findus"), target: "findus" },
  ];

  const onSetActiveHandler = (to: string) => setActiveSection(to);

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="fixed hidden md:block top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex-1 flex justify-start w-[60px] items-center space-x-6">
            <Link
              key={"hero"}
              to={"hero"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => onSetActiveHandler("hero")}
              className="group hover:bg-olive-100 cursor-pointer p-1 rounded-full transition-colors hover:scale-105"
            >
              <Image
                src="/assets/imgs/icon.ico"
                alt="Figata Logo"
                width={40}
                height={40}
                style={{
                  width: "40px",
                  height: "40px",
                }}
                priority
              />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => onSetActiveHandler(link.target)}
                  className={`group cursor-pointer text-lg font-medium relative transition-colors ${
                    activeSection === link.target
                      ? "text-figata-cup"
                      : "text-gray-700 hover:text-olive-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                      activeSection === link.target
                        ? "w-full bg-figata-cup"
                        : "w-0 bg-olive-600 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-end space-x-6">
            <SocialMedia />
            <LocaleSwitch />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed block md:hidden top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        {/* First Row - Logo & Socials */}
        <div className="grid grid-cols-3 items-center px-4 sm:px-6 py-2.5 border-b border-olive-100">
          <div className="flex justify-start">
            <Link
              key={"hero"}
              to={"hero"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => onSetActiveHandler("hero")}
            >
              <Image
                src="/assets/imgs/icon.ico"
                alt="Figata Logo"
                width={40}
                height={40}
                style={{
                  width: "40px",
                  height: "40px",
                }}
                className="rounded-full"
                priority
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <SocialMedia />
          </div>
          <div className="flex justify-end z-50">
            <LocaleSwitch />
          </div>
        </div>

        {/* Second Row - Sticky Navigation */}
        <div className="sticky top-[60px] bg-white/80 backdrop-blur-md z-40 shadow-sm">
          <div className="py-4 flex items-center justify-center space-x-2 sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => onSetActiveHandler(link.target)}
                className={`relative cursor-pointer px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === link.target
                    ? "text-figata-cup"
                    : "text-gray-700"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all bg-figata-cup ${
                    activeSection === link.target ? "w-full " : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
