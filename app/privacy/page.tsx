import React from "react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-offwhite pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto prose prose-ink prose-headings:font-display prose-headings:text-ink prose-a:text-violet hover:prose-a:text-violet/80">
        <h1 className="text-3xl md:text-4xl mb-8">Privacy Policy</h1>

        <p className="text-sm text-ink/50 mb-10">
          Last updated: January 1, 2025
        </p>

        <div className="space-y-8 text-ink/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. What We Collect</h2>
            <p>
              When you join our waitlist, we collect your email address and your
              consent to contact you about the PlexusBeam launch. We also
              collect technical information sent automatically by your browser
              (IP address, user-agent, referrer) for security and rate-limiting
              purposes. This data is stored only as a one-way hash — we cannot
              reverse it to identify you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. How We Use It</h2>
            <p>
              We use your email address solely to notify you when PlexusBeam
              launches and to share an optional launch discount code. We do not
              sell your data. We do not share your email with third parties for
              marketing purposes. The technical data we collect is used only to
              prevent abuse of our waitlist form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Email Communications</h2>
            <p>
              After joining the waitlist, you may receive a single confirmation
              email (if we have email delivery set up). When PlexusBeam launches,
              we'll email you with early access. Every email includes a
              one-click unsubscribe link. You can also email us at{" "}
              <a href={`mailto:${process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}`}>
                {process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}
              </a>{" "}
              to request deletion of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Data Storage</h2>
            <p>
              Waitlist emails are stored in a Supabase (PostgreSQL) database,
              protected by Row Level Security. Access is restricted to our server
              backend using a service-role key that is never exposed to browsers.
              IP address hashes are stored using a salted SHA-256 hash; we
              cannot reverse them to identify individual visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Cookies & Tracking</h2>
            <p>
              This marketing site does not use cookies, pixels, or third-party
              analytics. We do not track you across other websites. The only
              storage used is a minimal amount for the waitlist form state
              (in your browser's memory only, not persisted).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. To exercise these rights, email us at{" "}
              <a href={`mailto:${process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}`}>
                {process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}
              </a>. We will
              respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Changes</h2>
            <p>
              We may update this policy when the product launches. If we make
              material changes, we'll notify waitlist members by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Contact</h2>
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
