import React from "react";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-block text-[0.8125rem] font-display font-semibold uppercase tracking-[0.2em] text-violet ${className}`}
    >
      {children}
    </span>
  );
}
