"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_MESSAGES = [
  "INITIALIZING CORE",
  "FETCHING GEOMETRY",
  "ESTABLISHING PERMANENCE",
  "CURING CONCRETE",
  "MONOLITH READY"
];

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    // Increment counter
    const counterTimer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counterTimer);
          setTimeout(() => setComplete(true), 500);
          return 100;
        }
        // Varied speeds for a more "technical" feel
        const diff = Math.random() > 0.8 ? 5 : 2;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    // Swap status messages
    const statusTimer = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 400);

    return () => {
      clearInterval(counterTimer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center p-6 text-alabaster"
        >
          <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-end gap-12">
            
            {/* Left: Branding & Status */}
            <div className="flex flex-col gap-4">
              <span className="text-micro uppercase tracking-widest text-cured_concrete">Monolith // System Initializing</span>
              <div className="h-6 overflow-hidden">
                <motion.span 
                  key={statusIdx}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  className="block text-sm font-sans tracking-[0.3em] text-alabaster"
                >
                  {STATUS_MESSAGES[statusIdx]}
                </motion.span>
              </div>
            </div>

            {/* Right: Percentage */}
            <div className="relative">
              <span className="text-9xl md:text-[14rem] font-serif leading-none tracking-tighter opacity-10">
                {count.toString().padStart(3, "0")}
              </span>
              <span className="absolute bottom-4 right-0 text-7xl md:text-9xl font-serif">
                {count.toString().padStart(3, "0")}
              </span>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cured_concrete/10">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              className="w-full h-full bg-alabaster origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
