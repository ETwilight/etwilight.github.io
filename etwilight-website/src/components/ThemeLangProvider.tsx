import { useState, ReactNode, useEffect } from "react";
import { ThemeLangContext } from "@/context/ThemeLangContext";

export const ThemeLangProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"en" | "zh" | "de">("en");

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeLangContext.Provider value={{ darkMode, toggleDarkMode, lang, setLang }}>
      {children}
    </ThemeLangContext.Provider>
  );
};
