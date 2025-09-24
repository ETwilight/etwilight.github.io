import { useContext } from "react";
import { ThemeLangContext } from "@/context/ThemeLangContext";

export const useThemeLang = () => {
  const ctx = useContext(ThemeLangContext);
  if (!ctx) throw new Error("useThemeLang must be used within ThemeLangProvider");
  return ctx;
};