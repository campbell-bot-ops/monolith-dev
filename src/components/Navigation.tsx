"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Magnetic from "@/components/Magnetic";
import BlueprintToggle from "@/components/BlueprintToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Discipline", href: "/discipline" },
    { name: "Inquiries", href: "/inquiries" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed inset-0 pointer-events-none z-50 p-6 mix-blend-difference hidden md:block text-micro uppercase tracking-widest">
        <nav className="absolute inset-x-6 top-6 flex justify-between items-start pointer-events-auto">
          <Magnetic>
            <Link href="/" className="hover:text-cured_concrete transition-colors duration-500" data-cursor="expand">
              Monolith
            </Link>
          </Magnetic>
          <div className="flex items-center gap-12">
            <BlueprintToggle />
            <div className="flex gap-12">
              <Magnetic>
                <Link href="/properties" className="hover:text-cured_concrete transition-colors duration-500" data-cursor="expand">
                  Properties
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/discipline" className="hover:text-cured_concrete transition-colors duration-500" data-cursor="expand">
                  Discipline
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/inquiries" className="hover:text-cured_concrete transition-colors duration-500" data-cursor="expand">
                  Inquiries
                </Link>
              </Magnetic>
            </div>
          </div>
        </nav>

        <nav className="absolute inset-x-6 bottom-6 flex justify-between items-end pointer-events-auto">
          <span className="text-cured_concrete hidden lg:inline-block">
            Engineered Permanence
          </span>
        </nav>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-[60] p-6 flex justify-between items-center pointer-events-auto mix-blend-difference top-bar-mobile">
        <Link 
          href="/" 
          className="text-micro uppercase tracking-widest text-alabaster z-10"
          onClick={() => setIsOpen(false)}
          data-cursor="expand"
        >
          Monolith
        </Link>
        
        <button 
          onClick={toggleMenu}
          className="text-micro uppercase tracking-widest text-alabaster z-10 p-2 -mr-2"
          data-cursor="expand"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="md:hidden fixed inset-0 z-50 bg-void text-alabaster flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl sm:text-5xl font-serif uppercase tracking-widest ${pathname === link.href ? "text-cured_concrete" : "text-alabaster"}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-12 inset-x-6 flex justify-between text-micro uppercase tracking-widest text-cured_concrete"
            >
              <span>Engineered</span>
              <span>Permanence</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
