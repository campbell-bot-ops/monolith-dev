"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlueprintContext = createContext<{
  isBlueprint: boolean;
  toggleBlueprint: () => void;
}>({
  isBlueprint: false,
  toggleBlueprint: () => {},
});

export const useBlueprint = () => useContext(BlueprintContext);

export function BlueprintProvider({ children }: { children: React.ReactNode }) {
  const [isBlueprint, setIsBlueprint] = useState(false);

  const toggleBlueprint = () => setIsBlueprint((prev) => !prev);

  useEffect(() => {
    if (isBlueprint) {
      document.body.classList.add("blueprint-active");
    } else {
      document.body.classList.remove("blueprint-active");
    }
  }, [isBlueprint]);

  return (
    <BlueprintContext.Provider value={{ isBlueprint, toggleBlueprint }}>
      {children}
    </BlueprintContext.Provider>
  );
}
