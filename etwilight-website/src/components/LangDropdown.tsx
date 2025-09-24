import { useState } from "react";
import { Languages } from "lucide-react";
import { useThemeLang } from "@/hooks/useThemeLang";

export default function LangDropdown() {
  const { setLang } = useThemeLang();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Languages className="cursor-pointer" />

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-0 pt-1 z-50 min-w-[7rem] whitespace-nowrap bg-white text-black dark:bg-black dark:text-white rounded shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul>
            <li
              className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                setLang("en");
                setIsOpen(false);
              }}
            >
              English
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                setLang("zh");
                setIsOpen(false);
              }}
            >
              简体中文
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                setLang("de");
                setIsOpen(false);
              }}
            >
              Deutsch
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
