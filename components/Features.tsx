import React from "react";
import { MessageSquareText, Radio, Sparkles, BellRing } from "lucide-react";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const features = [
  {
    icon: MessageSquareText,
    title: "Explainable predictions",
    description:
      "Every signal comes with a plain-English reasoning trace.",
  },
  {
    icon: Radio,
    title: "Alternative data, demystified",
    description:
      "Earnings-call tone, supply-chain chatter, insider patterns.",
  },
  {
    icon: Sparkles,
    title: "Plain-English summaries",
    description:
      "No finance jargon. The model explains itself like a friend.",
  },
  {
    icon: BellRing,
    title: "Watchlists that think for you",
    description: "Add tickers, get daily briefings.",
  },
];

export default function Features() {
  return (
    <Section id="features" className="bg-offwhite">
      <div className="text-center mb-16">
        <Eyebrow className="mb-3">Features</Eyebrow>
        <h2 className="text-balance">
          Built for curious investors, not quants.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl bg-white ring-1 ring-violet/10 p-8 transition hover:shadow-md hover:ring-violet/20"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-violet">
              <f.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-bold text-ink mb-3">
              {f.title}
            </h3>
            <p className="text-ink/70 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
