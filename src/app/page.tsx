"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import TextReveal from "@/components/TextReveal";
import { Suspense } from "react";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slow parallax effects
  const ethosY = useTransform(scrollYProgress, [0, 0.4], [100, -50]);
  const ethosOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <main className="relative bg-void w-full overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
           <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="object-cover w-full h-full opacity-80"
          >
            <source src="/hero-monolith.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10" />
        </div>

        {/* Wordmark */}
        <div className="relative z-20 pointer-events-none">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-super-wide text-alabaster">
            <TextReveal text="MONOLITH" delay={0.5} />
          </h1>
        </div>
      </section>

      {/* The Ethos Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-void z-20">
        <motion.div 
          style={{ y: ethosY, opacity: ethosOpacity }}
          className="max-w-3xl px-6 text-center"
        >
          <p className="text-sm md:text-lg lg:text-xl font-sans tracking-widest text-cured_concrete uppercase mix-blend-difference mb-8">
            We do not build houses. <br />
            <span className="text-alabaster font-sans sm:text-2xl lg:text-4xl block mt-4">We engineer permanence.</span>
          </p>
          <p className="text-base text-cured_concrete font-serif leading-relaxed mix-blend-difference">
            MONOLITH rejects the disposable nature of modern construction. 
            Our properties are uncompromising structures of cured concrete, 
            steel, and elemental materials designed to withstand time. 
            Every residence is a bespoke intervention—a fortress against 
            the ephemeral.
          </p>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section className="relative min-h-screen w-full bg-void pt-24 pb-48 px-6 z-20">
        <h2 className="text-micro uppercase text-cured_concrete tracking-widest mb-24 max-w-7xl mx-auto w-full">Selected Works</h2>
        
        <div className="flex flex-col items-start gap-12 md:gap-24 max-w-7xl mx-auto w-full relative z-30">
          {properties.slice(0, 3).map((property) => (
            <Link 
              href={`/properties/${property.slug}`} 
              key={property.id} 
              className="group relative cursor-pointer block"
              data-cursor="expand"
              data-cursor-text="EXPLORE"
            >
              <div 
                onMouseEnter={() => setHoveredProject(property.heroImage)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h3 className="text-2xl md:text-5xl font-sans tracking-wide text-alabaster z-10 relative mix-blend-difference">
                  {property.title} // {property.location}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Massive Hover Image Background */}
        <div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center transition-opacity duration-1000 ease-out">
          {properties.map((property) => (
            <motion.div
              key={`bg-${property.id}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: hoveredProject === property.heroImage ? 0.4 : 0,
                scale: hoveredProject === property.heroImage ? 1 : 1.05
              }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="absolute inset-0"
            >
              <img 
                src={property.heroImage}
                alt={property.title}
                className="object-cover w-full h-full grayscale"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
