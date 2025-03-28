"use client";
import { Link } from "react-scroll";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navLinks = [
  { name: "Figata", target: "hero" },
  { name: "About", target: "about" },
  { name: "Gallery", target: "gallery" },
  { name: "Contact", target: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); //for mobile navbar menu

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-amber-800 transition-colors
                          font-medium text-lg relative group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-800 
                                transition-all group-hover:w-full"
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-amber-50 
                          border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
