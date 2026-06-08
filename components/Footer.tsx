import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-offwhite/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Logo + tagline */}
          <div>
            <Logo tone="white" className="mb-4" />
            <p className="text-sm text-offwhite/60 max-w-xs">
              Explainable AI for retail investors. Finally.
            </p>
          </div>

          {/* Column 2: Product links */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "How it works", href: "#how" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company links */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/#why" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                {
                  label: "Contact",
                  href: `mailto:${process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}`,
                },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-offwhite/50">
            © {year} PlexusBeam. Not financial advice.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-offwhite/50 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-offwhite/50 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
