import React from "react";
import { Ear, Brain, UserCheck } from "lucide-react";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const steps = [
  {
    step: 1,
    icon: Ear,
    title: "We listen",
    description:
      "PlexusBeam monitors thousands of sources: earnings transcripts, logistics data, executive interviews.",
  },
  {
    step: 2,
    icon: Brain,
    title: "We reason",
    description:
      "Our model turns raw signals into a plain-English explanation of why a stock may move.",
  },
  {
    step: 3,
    icon: UserCheck,
    title: "You decide",
    description:
      "You see the signal, the reasoning, and the confidence. No tips, no pressure.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" className="bg-mist/50">
      <div className="text-center mb-16">
        <Eyebrow className="mb-3">How it works</Eyebrow>
        <h2 className="text-balance">
          From headline to insight in three steps.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((s) => (
          <div key={s.step} className="relative text-center md:text-left">
            {/* Step number badge */}
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-honey text-sm font-bold text-ink">
              {s.step}
            </div>

            {/* Icon */}
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet ring-1 ring-violet/10">
              <s.icon size={28} strokeWidth={1.5} />
            </div>

            <h3 className="text-lg font-display font-bold text-ink mb-3">
              {s.title}
            </h3>
            <p className="text-ink/70 leading-relaxed">{s.description}</p>

            {/* Connector line (md+) */}
            {s.step < 3 && (
              <div className="hidden md:block absolute top-10 left-[calc(100%-1.5rem)] w-full h-px bg-violet/10" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
