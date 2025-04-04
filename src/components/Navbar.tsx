"use client";
import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

const navLinks = [
  { name: "Figata", target: "hero" },
  { name: "About", target: "about" },
  { name: "Gallery", target: "gallery" },
  { name: "Find Us", target: "findus" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="fixed hidden md:block top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex-1 flex justify-start w-[60px]">
            <Image
              src="/assets/imgs/icon.ico"
              alt="Figata Logo"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="rounded-full"
              priority
            />
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
                  onSetActive={handleSetActive}
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
          <div className="flex-1 flex justify-end">
            <SocialMedia />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed block md:hidden top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        {/* First Row - Logo & Socials */}
        <div className="px-4 sm:px-6 py-2.5 flex justify-between items-center border-b border-olive-100">
          <div>
            <Image
              src="/assets/imgs/icon.ico"
              alt="Figata Logo"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="rounded-full"
              priority
            />
          </div>
          <div className="flex flex-row">
            <SocialMedia />
          </div>
        </div>

        {/* Second Row - Sticky Navigation */}
        <div className="sticky top-[60px] bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <div className="py-4 flex items-center justify-center space-x-2 sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                className={`relative cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors ${
                  activeSection === link.target ? "text-olive-700" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all bg-olive-700 ${
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
