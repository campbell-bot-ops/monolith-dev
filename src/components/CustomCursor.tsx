"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Determine if touch device to hide cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor]");
      
      if (interactiveEl) {
        setIsHovering(true);
        const text = interactiveEl.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-void text-[10px] font-sans uppercase tracking-widest font-bold"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
          backgroundColor: isHovering && cursorText ? "#FFFFFF" : isHovering ? "transparent" : "#FFFFFF",
          border: isHovering ? "1px solid #FFFFFF" : "0px solid transparent",
          mixBlendMode: "difference"
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: cursorText ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, [data-cursor] { cursor: none !important; }
        }
      `}} />
    </>
  );
}
