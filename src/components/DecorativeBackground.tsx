"use client";
import { motion } from "framer-motion";
import { FiCoffee, FiHeart } from "react-icons/fi";
import { BiCookie } from "react-icons/bi";

// Fixed positions for icons to prevent hydration mismatches
const iconPositions = [
  { left: "10%", top: "20%" },
  { left: "30%", top: "70%" },
  { left: "50%", top: "30%" },
  { left: "70%", top: "60%" },
  { left: "85%", top: "40%" },
  { left: "20%", top: "50%" },
];

export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Curved lines - Desktop only (md and above) */}
      <div className="absolute inset-0 hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q25,20 50,50 T100,50"
            stroke="rgba(115, 145, 127, 0.15)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,30 Q40,10 80,30 T100,30"
            stroke="rgba(115, 145, 127, 0.15)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M0,70 Q30,90 60,70 T100,70"
            stroke="rgba(115, 145, 127, 0.15)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      {/* Mobile friendly lines - only on small screens */}
      <div className="absolute inset-0 md:hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Gently curved lines for mobile */}
          <motion.path
            d="M0,30 C25,28 75,32 100,25"
            stroke="rgba(115, 145, 127, 0.15)"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,50 C30,48 70,52 100,55"
            stroke="rgba(115, 145, 127, 0.15)"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M0,70 C35,72 65,68 100,65"
            stroke="rgba(115, 145, 127, 0.15)"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0">
        {iconPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute text-figata-cup/30"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: position.left,
              top: position.top,
            }}
          >
            {i % 3 === 0 ? (
              <FiCoffee className="w-8 h-8 md:w-10 md:h-10" />
            ) : i % 3 === 1 ? (
              <FiHeart className="w-8 h-8 md:w-10 md:h-10" />
            ) : (
              <BiCookie className="w-8 h-8 md:w-10 md:h-10" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
