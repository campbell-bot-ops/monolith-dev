"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden bg-void text-alabaster py-4 z-40 border-y border-cured_concrete/20">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-xl md:text-3xl font-sans uppercase tracking-super-wide pr-12 font-bold opacity-90">
               {text} <span className="text-cured_concrete px-4">//</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
