"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-olive-100 text-olive-700 mt-20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-2">
              <Image
                src="/figata_2.jpg"
                alt="Figata Café Logo"
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
        <div className="md:hidden fixed bottom-4 right-4">
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
