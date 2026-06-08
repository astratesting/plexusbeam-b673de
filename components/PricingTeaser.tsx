import React from "react";
import { Check } from "lucide-react";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const freeFeatures = [
  "5 watchlist tickers",
  "Daily briefings",
  "Plain-English reasoning",
];

const proFeatures = [
  "Unlimited tickers",
  "Real-time alerts",
  "Full reasoning traces",
  "Custom signal sources",
];

export default function PricingTeaser() {
  return (
    <Section id="pricing" className="bg-offwhite">
      <div className="text-center mb-16">
        <Eyebrow className="mb-3">Pricing</Eyebrow>
        <h2 className="text-balance">Simple, fair, and coming soon.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free tier */}
        <div className="rounded-3xl bg-white ring-1 ring-violet/10 p-8 flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl font-display font-bold text-ink mb-2">
              Free
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-display font-bold text-ink">$0</span>
              <span className="text-ink/50">/mo</span>
            </div>
          </div>

          <ul className="flex-1 space-y-3 mb-8">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Check size={18} className="text-violet flex-shrink-0" strokeWidth={2} />
                <span className="text-ink/80">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#waitlist"
            className="block w-full rounded-full border-2 border-violet px-6 py-3 text-center text-sm font-semibold text-violet transition hover:bg-violet hover:text-white"
          >
            Join the waitlist
          </a>
        </div>

        {/* Pro tier */}
        <div className="rounded-3xl bg-gradient-to-br from-violet to-coral p-[2px]">
          <div className="rounded-3xl bg-gradient-to-br from-violet to-coral p-8 flex flex-col h-full">
            {/* Badge */}
            <div className="mb-4 inline-flex self-start rounded-full bg-honey/20 px-3 py-1 text-xs font-bold text-white">
              Waitlist price — locks in at signup
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-2">
              PlexusBeam Pro
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-display font-bold text-white">
                $14
              </span>
              <span className="text-white/70">/mo</span>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check size={18} className="text-white flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="block w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-violet transition hover:bg-offwhite/90"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
