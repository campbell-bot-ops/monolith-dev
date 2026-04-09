"use client";

import { useBlueprint } from "@/context/BlueprintContext";
import { motion } from "framer-motion";

export default function BlueprintToggle() {
  const { isBlueprint, toggleBlueprint } = useBlueprint();

  return (
    <div className="flex items-center gap-4 text-[10px] font-sans tracking-widest uppercase text-alabaster mix-blend-difference pointer-events-auto">
      <span className={isBlueprint ? "text-cured_concrete" : "text-alabaster"}>Standard</span>
      <button 
        onClick={toggleBlueprint}
        className="relative w-12 h-6 bg-cured_concrete/20 rounded-full flex items-center p-1 cursor-pointer"
        data-cursor="expand"
        data-cursor-text={isBlueprint ? "DISABLE" : "ENABLE"}
      >
        <motion.div 
          animate={{ x: isBlueprint ? "24px" : "0px", backgroundColor: isBlueprint ? "#0066FF" : "#FFFFFF" }}
          className="w-4 h-4 rounded-full"
        />
      </button>
      <span className={isBlueprint ? "text-[#0066FF]" : "text-cured_concrete"}>Blueprint</span>
    </div>
  );
}
