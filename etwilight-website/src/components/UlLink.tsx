import { ReactNode } from "react";

interface UlLinkProps {
  href: string;
  children: ReactNode;
  always?: boolean;
}

export default function UlLink({ href, children, always = false }: UlLinkProps) {
  return (
    <a
      href={href}
      style={{
        textDecoration: always ? "underline" : "none",
      }}
      onMouseEnter={(e) => {
        if (!always) {
          e.currentTarget.style.textDecoration = "underline";
        }
      }}
      onMouseLeave={(e) => {
        if (!always) {
          e.currentTarget.style.textDecoration = "none";
        }
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
