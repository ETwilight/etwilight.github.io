import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useThemeLang } from "@/hooks/useThemeLang";
import LangDropdown from "@/components/LangDropdown";

import navItems from "@/assets/navItems.json";

// logos
import icon_t_bg from "@/assets/icons/logo/t_bg.png";
import icon_t_bg_l_b_hl from "@/assets/icons/logo/t_bg_l_b_hl.png";
import icon_t_bg_l_o_hl from "@/assets/icons/logo/t_bg_l_o_hl.png";
import icon_t_bg_d_b_hl from "@/assets/icons/logo/t_bg_d_b_hl.png";
import icon_t_bg_d_o_hl from "@/assets/icons/logo/t_bg_d_o_hl.png";

// background image for music page
import musicPhoto from "@/assets/photos/music2.jpg";

export default function TopNav() {
  const { darkMode, toggleDarkMode, lang } = useThemeLang();
  const location = useLocation();
  const isMusicPage = location.pathname === "/music";

  const getIconSrc = () => {
    const path = location.pathname.toLowerCase();
    if (darkMode) {
      if (path.includes("research")) return icon_t_bg_d_b_hl;
      if (path.includes("music")) return icon_t_bg_d_o_hl;
      return icon_t_bg;
    } else {
      if (path.includes("research")) return icon_t_bg_l_b_hl;
      if (path.includes("music")) return icon_t_bg_l_o_hl;
      return icon_t_bg;
    }
  };

  if (isMusicPage) {
    // Music Hero Style
    return (
      <section
        className="relative w-full h-screen flex flex-col justify-between text-white"
        style={{
          backgroundPosition: "center 37%",
          backgroundImage: `url(${musicPhoto})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0 dark:bg-black/60" />

        {/* nav row */}
        <div className="w-4/5 mx-auto flex items-center justify-between py-6 z-30">
          <Link to="/" className="flex-shrink-0">
            <img src={getIconSrc()} alt="logo" className="h-20 w-auto cursor-pointer" />
          </Link>

          <ul className="flex-1 flex justify-center gap-12 text-base font-semibold">
            {navItems.map(({ path, label, display }) => (
              <li key={path}>
                {display ? (
                  <Link to={path} className="cursor-pointer hover:underline">
                    {label[lang]}
                  </Link>
                ) : (
                  <span className="cursor-default text-gray-500">{label[lang]}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex-shrink-0 flex items-center gap-6 z-40">
            {/* TODO: Buggy, cannot hover to below nav row */}
            <LangDropdown />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md cursor-pointer transition-colors duration-300"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>

        {/* hero text */}
        <div className="flex-1 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-6xl tracking-[0.2em]">MUSIC</h1>
          <p className="text-lg max-w-[60ch] mt-6">
            “Music is freedom, structure, and emotion — a journey shared between
            performers and listeners.”
          </p>
        </div>
      </section>
    );
  }

  // Default TopNav
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors bg-inherit shadow-md text-black dark:text-white">
      <div className="w-4/5 mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex-shrink-0">
          <img src={getIconSrc()} alt="logo" className="h-20 w-auto cursor-pointer" />
        </Link>

        <ul className="flex-1 flex justify-center gap-12 text-base font-semibold">
          {/* If display is false, do not link but still reserve the space */}
          {navItems.map(({ path, label, display }) => (
            <li key={path}>
              {display ? (
                <Link to={path} className="cursor-pointer hover:underline">
                  {label[lang]}
                </Link>
              ) : (
                <span className="cursor-default text-gray-500">{label[lang]}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex-shrink-0 flex items-center gap-6">
          <LangDropdown />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md cursor-pointer transition-colors duration-300"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
