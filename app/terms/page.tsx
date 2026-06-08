import React from "react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Section className="bg-offwhite pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto prose prose-ink prose-headings:font-display prose-headings:text-ink prose-a:text-violet hover:prose-a:text-violet/80">
          <h1 className="text-3xl md:text-4xl mb-8">Terms of Service</h1>

          <p className="text-sm text-ink/50 mb-10">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8 text-ink/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold mb-3">1. The Service</h2>
              <p>
                PlexusBeam is a marketing website for a future AI-powered
                retail trading intelligence platform. Today, the only
                functionality offered is a waitlist signup form. No financial
                services are provided at this time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. No Financial Advice</h2>
              <p>
                Nothing on this website constitutes financial, investment, or
                legal advice. PlexusBeam is not a broker-dealer and does not
                execute trades. When the product launches, all insights and
                signals will be for informational purposes only. You are solely
                responsible for your investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Waitlist</h2>
              <p>
                By joining the waitlist, you agree to receive launch
                communications from PlexusBeam. You can unsubscribe at any
                time. We reserve the right to limit waitlist signups or
                reject any email address at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
              <p>
                All content on this site — including the PlexusBeam name,
                logo, lattice motif, and copy — is the property of PlexusBeam
                and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Limitation of Liability</h2>
              <p>
                This website is provided "as is." We make no warranties about
                the accuracy or completeness of any content. In no event shall
                PlexusBeam be liable for any damages arising from your use of
                this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Changes to Terms</h2>
              <p>
                We may update these terms when the product launches. Continued
                use of the site after changes constitutes acceptance of the new
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Contact</h2>
              <p>
                Questions? Email us at{" "}
                <a href={`mailto:${process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}`}>
                  {process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-ink/10">
            <Link href="/" className="text-sm text-violet hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </Section>
  );
}
