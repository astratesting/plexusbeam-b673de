import React from "react";

type LatticeProps = {
  opacity?: number;
  animate?: boolean;
  className?: string;
  size?: number;
};

export default function Lattice({
  opacity = 0.18,
  animate = false,
  className = "",
  size = 400,
}: LatticeProps) {
  return (
    <div
      className={`pointer-events-none ${className} ${animate ? "animate-lattice-drift" : ""}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="latticeGrad" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <line x1="80" y1="80" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="80" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="320" y1="80" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="200" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="320" y1="200" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="320" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="320" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />
        <line x1="320" y1="320" x2="200" y2="200" stroke="url(#latticeGrad)" strokeWidth="1" opacity="0.5" />

        {/* Extra diagonal connections */}
        <line x1="80" y1="80" x2="320" y2="80" stroke="url(#latticeGrad)" strokeWidth="0.5" opacity="0.3" />
        <line x1="80" y1="80" x2="80" y2="320" stroke="url(#latticeGrad)" strokeWidth="0.5" opacity="0.3" />
        <line x1="320" y1="80" x2="320" y2="320" stroke="url(#latticeGrad)" strokeWidth="0.5" opacity="0.3" />
        <line x1="80" y1="320" x2="320" y2="320" stroke="url(#latticeGrad)" strokeWidth="0.5" opacity="0.3" />

        {/* Nodes */}
        <circle cx="80" cy="80" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="200" cy="80" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="320" cy="80" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="80" cy="200" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="200" cy="200" r="12" fill="url(#latticeGrad)" opacity="0.8" />
        <circle cx="320" cy="200" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="80" cy="320" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="200" cy="320" r="8" fill="url(#latticeGrad)" opacity="0.6" />
        <circle cx="320" cy="320" r="8" fill="url(#latticeGrad)" opacity="0.6" />

        {/* Outer ring accents */}
        <circle cx="80" cy="80" r="14" stroke="url(#latticeGrad)" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="320" cy="80" r="14" stroke="url(#latticeGrad)" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="80" cy="320" r="14" stroke="url(#latticeGrad)" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="320" cy="320" r="14" stroke="url(#latticeGrad)" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>
    </div>
  );
}
