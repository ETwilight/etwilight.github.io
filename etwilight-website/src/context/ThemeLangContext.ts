import { createContext } from "react";

export type ThemeLangContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  lang: "en" | "zh" | "de";
  setLang: (lang: "en" | "zh" | "de") => void;
};

export const ThemeLangContext = createContext<ThemeLangContextType | undefined>(undefined);