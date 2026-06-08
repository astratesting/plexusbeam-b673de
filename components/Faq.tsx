"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const faqItems = [
  {
    q: "Is this financial advice?",
    a: "No. PlexusBeam is an information tool; you make the calls. Always do your own research and consult a qualified financial advisor before making investment decisions.",
  },
  {
    q: "Where does the data come from?",
    a: "Public filings, earnings transcripts, anonymized logistics signals, and licensed alternative-data providers. We never use non-public or insider information.",
  },
  {
    q: "Do I need a brokerage account?",
    a: "No. PlexusBeam is an analysis layer, not an execution platform. You can use our insights alongside whatever broker you already work with.",
  },
  {
    q: "What does 'explainable' actually mean?",
    a: "Every prediction is paired with a plain-English reasoning trace and the sources behind it. You'll see the 'why' — not just the 'what'.",
  },
  {
    q: "When will it launch?",
    a: "We're onboarding waitlist members in cohorts. Joining the list gets you early access and a locked-in introductory price.",
  },
  {
    q: "How much will it cost?",
    a: "A free tier and a paid Pro tier at $14/month for waitlist members. No hidden fees, no long-term contracts.",
  },
];

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Section id="faq" className="bg-mist/50">
      <div className="text-center mb-16">
        <Eyebrow className="mb-3">FAQ</Eyebrow>
        <h2 className="text-balance">Questions, answered straight.</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={(v) => setOpenItem(v)}
        >
          {faqItems.map((item, i) => {
            const itemId = `faq-${i}`;
            const isOpen = openItem === itemId;

            return (
              <Accordion.Item
                key={itemId}
                value={itemId}
                className="border-b border-ink/10 last:border-b-0"
              >
                <Accordion.Trigger className="w-full py-5 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:rounded-md">
                  <span className="text-lg font-display font-semibold text-ink pr-4">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-mist text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </Accordion.Trigger>

                <Accordion.Content
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "animate-accordion-open" : "animate-accordion-close"
                  }`}
                >
                  <div className="pb-5 pr-12">
                    <p className="text-ink/70 leading-relaxed">{item.a}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </Section>
  );
}
