import React from "react";

// A lightweight, dependency-free SVG "thumbnail" for each plant.
// Colors are driven per-plant so every product still looks distinct,
// without relying on external image URLs that could break offline.
const PlantIcon = ({ pot = "#c96f4a", leaf = "#3f7d4c", leaf2 = "#5aa06a" }) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-label="plant thumbnail">
    <rect x="0" y="0" width="100" height="100" fill="#eef5ee" rx="10" />
    {/* leaves */}
    <path d="M50 55 C 30 55, 20 35, 30 15 C 45 25, 50 40, 50 55 Z" fill={leaf} />
    <path d="M50 55 C 70 55, 80 35, 70 15 C 55 25, 50 40, 50 55 Z" fill={leaf2} />
    <path d="M50 55 C 40 55, 32 45, 35 30 C 45 35, 50 45, 50 55 Z" fill={leaf2} opacity="0.85" />
    <path d="M50 55 C 60 55, 68 45, 65 30 C 55 35, 50 45, 50 55 Z" fill={leaf} opacity="0.85" />
    {/* pot */}
    <path d="M32 58 L68 58 L63 85 L37 85 Z" fill={pot} />
    <rect x="30" y="52" width="40" height="8" rx="2" fill={pot} />
  </svg>
);

export default PlantIcon;
