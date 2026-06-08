import React from "react";
import Lattice from "@/components/Lattice";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

export default function WhyWeBuiltThis() {
  return (
    <Section className="bg-mist/50" id="why">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: decorative lattice */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-80 h-80">
            <Lattice opacity={0.5} size={320} />
          </div>
        </div>

        {/* Right: text */}
        <div>
          <Eyebrow className="mb-3">Why we built this</Eyebrow>
          <h2 className="mb-6 text-balance">
            We were tired of black boxes.
          </h2>
          <div className="space-y-5 text-ink/80 leading-relaxed">
            <p>
              If you've ever tried to understand why an AI model gave you a
              stock tip, you know the feeling: it's a black box, and you're
              supposed to trust it anyway. That doesn't work for real money.
            </p>
            <p>
              PlexusBeam is built on a different idea — that AI should{" "}
              <em>explain itself</em>. Every signal comes with a reasoning
              trace. Every prediction tells you what data it's based on. No
              mystical "trust the algorithm" — just transparent, explainable
              insights in plain English.
            </p>
            <p>
              We're building the tool we wish existed: powerful enough to
              surface real edges, transparent enough to trust, and simple enough
              to use on your phone.
            </p>
          </div>
          <p className="mt-8 text-ink/60 italic">
            If that resonates, we'd love to have you on the waitlist.
          </p>
        </div>
      </div>
    </Section>
  );
}
