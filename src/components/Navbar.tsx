"use client";
import { Link } from "react-scroll";
import { useState, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import LocaleSwitch from "./LocaleSwitch";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const navbarText = useTranslations("navbar");

  const navLinks = [
    { name: navbarText("figata"), target: "hero" },
    { name: navbarText("about"), target: "about" },
    { name: navbarText("products"), target: "products" },
    { name: navbarText("gallery"), target: "gallery" },
    { name: navbarText("findus"), target: "findus" },
  ];

  // Use named function with useCallback to prevent recreating on each render
  const onSetActiveHandler = useCallback(function handleSetActive(to: string) {
    setActiveSection(to);
  }, []);

  // Create a special handler for the hero section (logo)
  const handleHeroActive = useCallback(
    function handleHeroActive() {
      onSetActiveHandler("hero");
    },
    [onSetActiveHandler]
  );

  // Create individual handlers for each section
  const handleAboutActive = useCallback(
    function handleAboutActive() {
      onSetActiveHandler("about");
    },
    [onSetActiveHandler]
  );

  const handleProductsActive = useCallback(
    function handleProductsActive() {
      onSetActiveHandler("products");
    },
    [onSetActiveHandler]
  );

  const handleGalleryActive = useCallback(
    function handleGalleryActive() {
      onSetActiveHandler("gallery");
    },
    [onSetActiveHandler]
  );

  const handleFindusActive = useCallback(
    function handleFindusActive() {
      onSetActiveHandler("findus");
    },
    [onSetActiveHandler]
  );

  // Map all handlers to their targets with type definition
  const sectionHandlers: Record<string, () => void> = useMemo(
    () => ({
      hero: handleHeroActive,
      about: handleAboutActive,
      products: handleProductsActive,
      gallery: handleGalleryActive,
      findus: handleFindusActive,
    }),
    [
      handleHeroActive,
      handleAboutActive,
      handleProductsActive,
      handleGalleryActive,
      handleFindusActive,
    ]
  );

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="fixed hidden lg:block top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
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
              onSetActive={handleHeroActive}
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
                  onSetActive={sectionHandlers[link.target]}
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
      <div className="fixed block lg:hidden top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
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
              onSetActive={handleHeroActive}
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
                onSetActive={sectionHandlers[link.target]}
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
