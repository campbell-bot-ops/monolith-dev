"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0.3; // Low ambient volume
        audioRef.current.play().catch(e => {
          console.error("Audio playback failed. This is usually due to browser autoplay policies or invalid source.", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-4 text-micro uppercase tracking-widest text-alabaster mix-blend-difference pointer-events-auto">
      <audio 
        ref={audioRef} 
        loop
        preload="auto"
        crossOrigin="anonymous"
        // Stable royalty-free ambient drone from Pixabay CDN
        src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73511.mp3?filename=ambient-drone-10-minute-background-noise-8072.mp3" 
      />
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex items-center gap-3 hover:text-cured_concrete transition-colors"
        data-cursor="expand"
        data-cursor-text="TOGGLE"
      >
        <span className="w-8 flex justify-between items-end h-3 overflow-hidden">
          {/* Animated EQ bars */}
          <motion.span 
            animate={{ height: isPlaying ? ["20%", "100%", "40%", "80%", "20%"] : "20%" }} 
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="w-[2px] bg-current inline-block"
          />
          <motion.span 
            animate={{ height: isPlaying ? ["60%", "20%", "100%", "40%", "60%"] : "40%" }} 
            transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
            className="w-[2px] bg-current inline-block"
          />
          <motion.span 
            animate={{ height: isPlaying ? ["100%", "40%", "60%", "20%", "100%"] : "20%" }} 
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            className="w-[2px] bg-current inline-block"
          />
        </span>
        SOUND [{isPlaying ? "ON" : "OFF"}]
      </button>
    </div>
  );
}
