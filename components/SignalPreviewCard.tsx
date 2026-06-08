import React from "react";
import { TrendingUp, Clock, Info } from "lucide-react";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

export default function SignalPreviewCard() {
  const ticker = "NVDA";
  const headline = "Unusual logistics activity at Asian suppliers.";
  const reasoning = [
    "Because supplier shipping volumes rose 14% week-over-week",
    "Because similar patterns preceded two prior earnings beats",
  ];
  const confidence = 72;
  const source = "aggregated logistics signals";
  const updatedAt = "4 min ago";

  return (
    <Section id="signals" className="bg-offwhite">
      <div className="text-center mb-12">
        <Eyebrow className="mb-3">Signals</Eyebrow>
        <h2 className="text-balance">
          A peek at the kind of insight you'll get.
        </h2>
      </div>

      {/* Preview label */}
      <div className="max-w-3xl mx-auto mb-6 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-xs font-medium text-violet ring-1 ring-violet/10">
          <Info size={12} />
          Preview · illustrative
        </span>
      </div>

      {/* Signal card */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-white ring-1 ring-violet/10 p-6 md:p-8">
        {/* Ticker chip */}
        <div className="mb-4 inline-flex items-center rounded-full bg-violet px-3.5 py-1 text-sm font-bold text-white">
          ${ticker}
        </div>

        {/* Headline */}
        <h3 className="text-xl md:text-2xl font-display font-bold text-ink mb-6">
          {headline}
        </h3>

        {/* Reasoning trace */}
        <div className="mb-6 space-y-3">
          <p className="text-sm font-semibold text-ink/60 uppercase tracking-wide">
            Reasoning
          </p>
          <ul className="space-y-2.5">
            {reasoning.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet" />
                <span className="text-ink/80 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Confidence meter */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-ink/60 uppercase tracking-wide">
              Confidence
            </span>
            <span className="text-sm font-bold text-honey">{confidence}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-mist overflow-hidden">
            <div
              className="h-full rounded-full bg-honey transition-all duration-500"
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 text-xs text-ink/50 pt-4 border-t border-ink/5">
          <Clock size={12} />
          <span>
            Source: {source} · Updated {updatedAt}
          </span>
        </div>
      </div>
    </Section>
  );
}
