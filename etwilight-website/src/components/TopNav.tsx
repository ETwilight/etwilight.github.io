import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useThemeLang } from "@/hooks/useThemeLang";
import LangDropdown from "@/components/LangDropdown";

// icons in @/assets/icons
import icon_b_bg from "@/assets/icons/logo/b_bg.png";
import icon_b_bg_b_hl from "@/assets/icons/logo/b_bg_b_hl.png";
import icon_b_bg_o_hl from "@/assets/icons/logo/b_bg_o_hl.png";
import icon_w_bg from "@/assets/icons/logo/w_bg.png";
import icon_w_bg_b_hl from "@/assets/icons/logo/w_bg_b_hl.png";
import icon_w_bg_o_hl from "@/assets/icons/logo/w_bg_o_hl.png";

export default function TopNav() {
  const { darkMode, toggleDarkMode, lang } = useThemeLang();
  const location = useLocation();

  const navItems = [
    { path: "/about", label: { en: "ABOUT", zh: "关于", de: "ÜBER" } },
    { path: "/research", label: { en: "RESEARCH", zh: "研究", de: "FORSCHUNG" } },
    { path: "/music", label: { en: "MUSIC", zh: "音乐", de: "MUSIK" } },
    { path: "/blog", label: { en: "BLOG", zh: "博客", de: "BLOG" } },
    { path: "/projects", label: { en: "PROJECTS", zh: "项目", de: "PROJEKTE" } },
    { path: "/misc", label: { en: "MISCELLANEOUS", zh: "杂项", de: "VERSCHIEDENES" } },
  ];

  const getIconSrc = () => {
    const path = location.pathname.toLowerCase();
    if (darkMode) {
      if (path.includes("research")) return icon_b_bg_b_hl;
      if (path.includes("music")) return icon_b_bg_o_hl;
      return icon_b_bg;
    } else {
      if (path.includes("research")) return icon_w_bg_b_hl;
      if (path.includes("music")) return icon_w_bg_o_hl;
      return icon_w_bg;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 text-black dark:text-white">
      <div className="w-4/5 mx-auto flex items-center justify-between py-3">
        {/* 1. Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={getIconSrc()} alt="logo" className="h-20 w-auto cursor-pointer" />
        </Link>

        {/* 2. Nav Items 居中 */}
        <ul className="flex-1 flex justify-center gap-12 text-base font-semibold">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="cursor-pointer hover:underline">
                {label[lang]}
              </Link>
            </li>
          ))}
        </ul>

        {/* 3. Controls */}
        <div className="flex-shrink-0 flex items-center gap-6">
          <LangDropdown />
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md cursor-pointer transition-colors duration-300 text-black dark:text-white`}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );

}
