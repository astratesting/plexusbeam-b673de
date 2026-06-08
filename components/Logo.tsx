import React from "react";

type LogoProps = {
  tone?: "violet" | "white";
  className?: string;
};

export default function Logo({ tone = "violet", className = "" }: LogoProps) {
  const color = tone === "violet" ? "#7C3AED" : "#FFFFFF";
  const wordColor = tone === "violet" ? "#1F1B2E" : "#FFFFFF";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Lattice node mark */}
        <circle cx="16" cy="16" r="6" fill={color} opacity="0.2" />
        <circle cx="16" cy="16" r="3" fill={color} />
        {/* Beam lines */}
        <line x1="16" y1="4" x2="16" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="22" x2="16" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="16" x2="10" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="16" x2="28" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        {/* Diagonal accents */}
        <circle cx="8" cy="8" r="1.5" fill={color} opacity="0.4" />
        <circle cx="24" cy="8" r="1.5" fill={color} opacity="0.4" />
        <circle cx="8" cy="24" r="1.5" fill={color} opacity="0.4" />
        <circle cx="24" cy="24" r="1.5" fill={color} opacity="0.4" />
      </svg>
      <span
        className="font-display text-xl font-bold tracking-tight"
        style={{ color: wordColor }}
      >
        PlexusBeam
      </span>
    </div>
  );
}
