import React from "react";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Eyebrow from "@/components/Eyebrow";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-scroll-margin relative min-h-[88vh] flex items-center overflow-hidden bg-offwhite"
    >
      {/* Background lattice */}
      <div className="absolute inset-0 flex items-center justify-center -z-0 select-none hidden sm:flex">
        <Lattice opacity={0.18} animate />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow chip */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-mist px-4 py-1.5 text-sm font-medium text-violet ring-1 ring-violet/10">
              <Eyebrow className="!normal-case !tracking-wide !text-sm !font-medium">
                AI-powered retail intelligence
              </Eyebrow>
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-balance mb-6 text-ink">
            Stock insights you can actually{" "}
            <span className="text-violet">understand.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-10 leading-relaxed">
            PlexusBeam reads between the lines — earnings calls, supply-chain
            signals, executive speech patterns — and tells you{" "}
            <em>why</em> a stock is moving, in plain English.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-violet px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet/25 transition hover:bg-violet/90 hover:shadow-xl hover:shadow-violet/30 active:scale-[0.98]"
            >
              Join the waitlist →
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium text-ink/80 transition hover:text-ink hover:bg-ink/5"
            >
              See how it works
            </a>
          </div>

          {/* Trust note */}
          <p className="text-sm text-ink/50">
            Built for retail investors. No black-box tips. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
