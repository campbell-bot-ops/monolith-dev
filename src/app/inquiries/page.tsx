"use client";

import { motion } from "framer-motion";

export default function Inquiries() {
  return (
    <main className="relative bg-void w-full h-screen overflow-hidden flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="text-center"
      >
        <a 
          href="mailto:inquiries@monolith.com"
          className="text-micro md:text-tiny text-alabaster tracking-widest uppercase hover:text-cured_concrete transition-colors duration-1000"
          data-cursor="expand"
          data-cursor-text="EMAIL"
        >
          inquiries@monolith.com
        </a>
      </motion.div>
    </main>
  );
}
