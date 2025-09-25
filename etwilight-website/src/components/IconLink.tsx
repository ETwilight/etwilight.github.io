import { ComponentType, SVGProps } from "react";

interface IconLinkProps {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  alt: string;
  label?: string;
}

export default function IconLink({ href, icon: Icon, alt, label }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-0.5 hover:underline"
    >
      <Icon
        role="img"
        aria-label={alt}
        className="w-5 h-5 text-black dark:text-white opacity-80 transition group-hover:opacity-100"
      />
      {label && <span>{label}</span>}
    </a>
  );
}
