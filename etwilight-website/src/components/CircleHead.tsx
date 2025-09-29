// src/components/CircleHead.tsx
import React from "react";

type CircleHeadProps = {
  /** Display size of the circle. Number means px; string can be '12rem' etc. */
  size?: number | string;
  /** Optional override for the image src. Defaults to '@/assets/photos/head.jpg' */
  src?: string;
  /** Optional: extra rounded border (e.g., '2px solid #fff') */
  border?: string;
  /** Optional: box shadow CSS value */
  shadow?: string;
};

/**
 * CircleHead renders a circular crop of a specific region from a square source image.
 * The crop is locked to the same source coordinates regardless of display size.
 */
const CircleHead: React.FC<CircleHeadProps> = ({
  size = 240, // default display diameter in px
  src = "@/assets/photos/head.jpg",
  border,
  shadow,
}) => {
  // Source image metadata
  const IMG_W = 1681; // px
  const IMG_H = 1681; // px
  const CX = 1050;     // face circle center x in source pixels
  const CY = 1000;     // face circle center y in source pixels
  const R = 950;      // face circle radius in source pixels

  // Normalize size into px number (for layout math), but keep original for CSS
  const sizePx: number = typeof size === "number" ? size : 240;

  // Scale factor mapping source pixels -> displayed pixels
  const scale: number = sizePx / (2 * R);

  // Background-size in displayed pixels
  const bgWidth = IMG_W * scale;
  const bgHeight = IMG_H * scale;

  // Position the background so that (CX, CY) lands at the visual center (size/2, size/2)
  const posX = sizePx / 2 - CX * scale;
  const posY = sizePx / 2 - CY * scale;

  // Inline styles to avoid dependency on any CSS setup
  const style: React.CSSProperties = {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    borderRadius: "50%",
    overflow: "hidden",
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${bgWidth}px ${bgHeight}px`,
    backgroundPosition: `${posX}px ${posY}px`,
    border,
    boxShadow: shadow,
    // Optional: slightly crisper rendering on some browsers
    imageRendering: "auto",
  };

  return <div style={style} />;
};

export default CircleHead;
