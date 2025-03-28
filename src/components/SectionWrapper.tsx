"use client";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">{children}</div>
    </motion.section>
  );
}
