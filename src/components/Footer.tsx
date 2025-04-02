"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust 100 to your preferred threshold
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer className="bg-olive-100 text-olive-700 mt-20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-2">
              <Image
                src="/assets/imgs/logo.jpg"
                alt="Figata Café Logo"
                sizes="(max-width: 1440px) 100vw, (max-width: 1440px) 50vw, 33vw"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="font-medium italic">#συκοκαιχαμογελα</p>
          </div>

          {/* Copyright Text */}
          <div className="text-center md:order-none">
            <p className="text-sm">
              Copyright © 2024 Figata Café
              <br />
              Designed by{" "}
              <a
                href="https://github.com/skarla21"
                target="_blank"
                className="hover:underline"
              >
                Antonis Skarlatos
              </a>
            </p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-olive-700 text-olive-100 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Scroll Button */}
        <div
          className={`md:hidden fixed bottom-4 right-4 transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-olive-700 text-olive-100 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
