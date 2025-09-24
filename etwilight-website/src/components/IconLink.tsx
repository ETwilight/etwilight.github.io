interface IconLinkProps {
  href: string;
  icon: string; // path to imported SVG
  alt: string;
  label?: string; // optional text label
}

export default function IconLink({ href, icon, alt, label }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 hover:underline"
    >
      <img
        src={icon}
        alt={alt}
        className="w-5 h-5 opacity-80 hover:opacity-100 transition"
      />
      {label && <span>{label}</span>}
    </a>
  );
}
