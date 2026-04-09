"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { properties } from "@/data/properties";
import TextReveal from "@/components/TextReveal";

export default function PropertiesPage() {
  return (
    <main className="relative bg-void w-full min-h-screen pt-32 pb-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-24 relative z-20">
          <h1 className="text-4xl md:text-7xl font-sans tracking-wide text-alabaster mix-blend-difference">
            <TextReveal text="AVAILABLE & ARCHIVED" delay={0.2} />
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-20">
          {properties.map((property, i) => (
            <Link href={`/properties/${property.slug}`} key={property.id}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="group cursor-pointer block"
                data-cursor="expand"
                data-cursor-text="VIEW"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-6">
                  {/* Image scaling on hover */}
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    <Image
                      src={property.heroImage}
                      alt={property.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </motion.div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-serif tracking-widest text-alabaster">{property.title}</h2>
                    <span className="text-micro uppercase tracking-widest text-cured_concrete">
                      {property.status}
                    </span>
                  </div>
                  <p className="text-sm text-cured_concrete font-sans max-w-sm">
                    {property.location} <br />
                    {property.shortDescription}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
