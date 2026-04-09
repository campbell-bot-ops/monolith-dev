"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { properties } from "@/data/properties";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRef, Suspense } from "react";
import TextReveal from "@/components/TextReveal";

export default function PropertyDetail({ params }: { params: { slug: string } }) {
  const property = properties.find(p => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative bg-void w-full min-h-screen text-alabaster" ref={containerRef}>
      
      {/* Parallax Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
          data-cursor="expand"
          data-cursor-text="SCROLL"
        >
          <Image
            src={property.heroImage}
            alt={property.title}
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-90" />
        </motion.div>
        
        <div className="absolute bottom-12 left-6 right-6 md:left-24 md:right-24 z-20 flex flex-col md:flex-row justify-between items-start md:items-end mix-blend-difference">
          <div>
            <h1 className="text-5xl md:text-8xl font-sans tracking-wide mb-2">
              <TextReveal text={property.title} delay={0.2} />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="text-lg md:text-xl font-serif tracking-widest text-cured_concrete"
            >
              {property.location} // {property.year}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-6 md:mt-0 text-right"
          >
             <span className="block text-micro uppercase tracking-widest text-cured_concrete mb-1">
              {property.status}
            </span>
             <span className="block text-sm font-sans tracking-widest">
              {property.price}
            </span>
             <span className="block text-sm font-sans tracking-widest mt-1 text-cured_concrete">
              {property.size}
            </span>
          </motion.div>
        </div>
      </section>

      {/* The Difference / Content */}
      <section className="relative w-full py-32 px-6 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 z-20 bg-void">
        
        {/* Left Column: Synopsis */}
        <div className="md:col-span-5 md:col-start-2">
          <h2 className="text-micro uppercase tracking-widest text-cured_concrete mb-8">The Intervention</h2>
          <p className="text-xl md:text-3xl font-serif leading-relaxed text-alabaster">
            {property.fullDescription}
          </p>
          
          <div className="mt-16">
            <h2 className="text-micro uppercase tracking-widest text-cured_concrete mb-4">Core Materials</h2>
            <ul className="flex flex-col gap-2">
              {property.materials.map((mat, i) => (
                <li key={i} className="text-sm font-sans tracking-widest text-alabaster border-b border-cured_concrete/30 pb-2">
                  {mat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Features - BENTO GRID */}
        <div className="md:col-span-12 mt-16 md:mt-32">
          <h2 className="text-micro uppercase tracking-widest text-cured_concrete mb-12">Structural Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {property.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 border border-cured_concrete/20 bg-cured_concrete/5 flex flex-col justify-between group cursor-default
                  ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
                  ${i === 3 ? "md:col-span-2" : ""}
                `}
                data-cursor="expand"
              >
                <div>
                  <span className="text-[10px] font-mono text-cured_concrete mb-4 block">0{i + 1} // SYS.PROC</span>
                  <h3 className="text-xl font-sans text-alabaster group-hover:text-cured_concrete transition-colors">{feature.title}</h3>
                </div>
                <p className="text-sm font-sans text-cured_concrete leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Lifecycle: Horizontal Scroll */}
      <section className="relative w-full py-48 bg-void overflow-hidden border-t border-cured_concrete/10">
        <div className="px-6 md:px-24 mb-12">
          <h2 className="text-micro uppercase tracking-widest text-cured_concrete">System Lifecycle</h2>
        </div>
        
        <div className="flex gap-12 px-6 md:px-24 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar">
          {[
            { phase: "CONCEPT", desc: "The mathematical abstraction of space. We define the constraints before the forms.", stats: "COORD: 0.0.0 // RADIAL" },
            { phase: "ENGINEERING", desc: "Translating abstraction into structural reality. Every Newton of force accounted for.", stats: "PSI: 5000 // LOAD: TRANS" },
            { phase: "PERMANENCE", desc: "The final intervention. A structure designed to outlast its inhabitants.", stats: "HALFWAY: 100Y // STATUS: FIXED" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="min-w-[300px] md:min-w-[450px] aspect-[3/4] p-12 bg-cured_concrete/5 border border-cured_concrete/10 flex flex-col justify-between snap-center"
            >
              <div>
                <span className="text-4xl md:text-6xl font-serif text-alabaster/10 mb-8 block">0{i + 1}</span>
                <h3 className="text-2xl md:text-3xl font-sans text-alabaster mb-4 tracking-widest">{item.phase}</h3>
                <p className="text-base text-cured_concrete font-serif leading-relaxed line-clamp-4">
                  {item.desc}
                </p>
              </div>
              <div className="border-t border-cured_concrete/30 pt-6">
                <span className="text-[10px] font-mono text-cured_concrete tracking-widest">
                  {item.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="relative w-full py-32 px-6 md:px-24 bg-void">
        <h2 className="text-micro uppercase tracking-widest text-cured_concrete mb-12">Visual Documentation</h2>
        <div className="flex flex-col gap-24">
          {property.gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="relative aspect-video w-full"
              data-cursor="expand"
              data-cursor-text="VIEW"
            >
              <Image
                src={img}
                alt={`${property.title} documentation ${i + 1}`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
