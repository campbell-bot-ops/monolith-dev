"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";

export default function Discipline() {
  return (
    <main className="relative bg-void w-full min-h-screen px-6 py-32 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Editorial Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-cured_concrete w-full p-6 md:p-12 lg:p-24 flex items-center justify-center"
        >
          <div 
            className="relative w-full aspect-[3/4] overflow-hidden bg-void"
            data-cursor="expand"
            data-cursor-text="VIEW"
          >
             <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop"
              alt="Monolith Structure"
              className="object-cover w-full h-full grayscale opacity-80"
            />
          </div>
        </motion.div>

        {/* Story Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="flex flex-col gap-12"
        >
          <h1 className="text-micro text-cured_concrete uppercase tracking-widest">The Discipline</h1>
          
          <div className="flex flex-col gap-8 text-alabaster font-sans text-lg md:text-2xl leading-relaxed">
            <p>
              We do not yield to trends. We design for the epochs. MONOLITH was founded on the principle that architecture should impose itself upon time, remaining silent yet deafening in its presence.
            </p>
            <p>
              By embracing extreme negative space, raw concrete, and unyielding brutalist geometry, our structures do not merely occupy a site—they anchor it. We build for those who require their legacies set in stone.
            </p>
          </div>
          
          <span className="text-micro text-cured_concrete uppercase tracking-widest mt-12">
            Establishment 2026
          </span>
        </motion.div>

      </div>
    </main>
  );
}
