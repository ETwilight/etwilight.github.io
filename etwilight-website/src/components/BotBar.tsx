import { useThemeLang } from "@/hooks/useThemeLang";
import IconLink from "@/components/IconLink";

import githubIcon from "@/assets/icons/brands/github.svg";
import linkedinIcon from "@/assets/icons/brands/linkedin.svg";
import discordIcon from "@/assets/icons/brands/discord.svg";
import emailIcon from "@/assets/icons/brands/email.svg";

export default function BotBar() {
  const { lang } = useThemeLang();

  const copyrightText = {
    en: "All rights reserved.",
    zh: "版权所有",
    de: "Alle Rechte vorbehalten.",
  };

  const links = [
    {
      href: "https://github.com/ETwilight",
      icon: githubIcon,
      alt: "GitHub",
      label: { en: "GitHub", zh: "GitHub", de: "GitHub" },
    },
    {
      href: "https://www.linkedin.com/in/peiyang-guo-8bb84a252/",
      icon: linkedinIcon,
      alt: "LinkedIn",
      label: { en: "LinkedIn", zh: "领英", de: "LinkedIn" },
    },
    {
      href: "mailto:hellobrian18@gmail.com",
      icon: emailIcon,
      alt: "Email",
      label: { en: "Email", zh: "电子邮箱", de: "E-Mail" },
    },
    {
      href: "http://discord.com/users/954016281525383220",
      icon: discordIcon,
      alt: "Discord",
      label: { en: "Discord", zh: "Discord", de: "Discord" },
    },
  ];

  return (
    <footer className="sticky top-[100vh] bg-gray-100 dark:bg-gray-900 text-center py-4 text-sm text-black dark:text-white">
      <p>Copyright © 2025 Peiyang Guo. {copyrightText[lang]}</p>
      <div className="flex justify-center gap-6 mt-2">
        {links.map(({ href, icon, alt, label }) => (
          <IconLink
            key={href}
            href={href}
            icon={icon}
            alt={alt}
            label={label[lang]}
          />
        ))}
      </div>
    </footer>
  );
}
