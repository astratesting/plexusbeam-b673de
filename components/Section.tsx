import React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-scroll-margin py-20 md:py-28 ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
