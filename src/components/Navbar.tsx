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
                className="cursor-pointer text-gray-700 hover:text-olive-700 transition-colors
                          font-medium text-lg relative group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-700
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

          {/* Right side - Social links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/figata_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-olive-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700 hover:text-olive-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 
                        4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 
                        1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 
                        4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 
                        0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 
                        110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/FigataDriedFigs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-olive-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700 hover:text-olive-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>

            <a
              href="https://www.threads.net/@figata_cafe"
              className="p-2 rounded-full hover:bg-olive-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700 hover:text-olive-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15 3.308c-2.363 0-4.242 2.06-4.242 4.576v.173c0 2.516 1.88 4.576 4.242 4.576s4.242-2.06 4.242-4.576v-.173c0-2.516-1.879-4.576-4.242-4.576Zm0 7.922c-1.795 0-3.242-1.88-3.242-4.153v-.173c0-2.272 1.447-4.153 3.242-4.153 1.795 0 3.242 1.88 3.242 4.153v.173c0 2.273-1.447 4.153-3.242 4.153Z" />
                <path d="M15 20.615c-3.135 0-5.769-1.966-6.673-4.644h-.001a13.083 13.083 0 0 1-1.098-5.07V8.641c0-1.933.438-3.136 1.237-3.972C9.253 3.792 10.368 3.308 12 3.308h3c1.632 0 2.747.484 3.535 1.361.799.836 1.237 2.039 1.237 3.972v2.26c0 1.72-.374 3.544-1.098 5.07-.904 2.678-3.538 4.644-6.673 4.644Zm-3.385-5.94h6.77c.583-1.756.934-3.575.934-5.234v-2.26c0-1.52-.343-2.453-.879-3.015-.536-.561-1.435-.968-2.85-.968h-3c-1.415 0-2.314.407-2.85.968-.536.562-.879 1.495-.879 3.015v2.26c0 1.659.351 3.478.934 5.234Z" />
              </svg>
            </a>
          </div>
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
                className="block px-4 py-3 text-gray-700 hover:bg-olive-700
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
