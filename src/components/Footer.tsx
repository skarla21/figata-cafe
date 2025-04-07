"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { FiArrowUp } from "react-icons/fi";
import { scrollToTop } from "@/utilities";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  // name the scroll handler function
  const handleScroll = useCallback(function handleScroll() {
    setIsScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <footer className="bg-olive-100 text-figata-cup mt-20 py-8 px-4 sm:px-6 lg:px-8">
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
              Copyright © 2025 Figata Café
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
            onClick={() => scrollToTop("smooth")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-figata-cup text-olive-100 shadow-lg hover:shadow-xl cursor-pointer transition-shadow"
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
            onClick={() => scrollToTop("smooth")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-figata-cup text-olive-100 shadow-lg hover:shadow-xl cursor-pointer transition-shadow"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
