"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Logo from "@/components/Logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[PlexusBeam Error Boundary]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      {/* Minimal nav */}
      <div className="h-16 flex items-center px-4 sm:px-6 lg:px-8">
        <Logo />
      </div>

      {/* Error content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-md">
          {/* Lattice illustration */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 opacity-30">
              <Lattice size={192} />
            </div>
          </div>

          <h1 className="text-4xl font-display font-bold text-ink mb-4">
            Something went wrong
          </h1>
          <p className="text-ink/70 mb-6 leading-relaxed">
            We hit an unexpected error. You can try again, or head back home.
          </p>

          {error?.message && (
            <div className="mb-8 rounded-lg bg-coral/10 p-4 text-left">
              <p className="text-sm text-coral font-mono break-words">
                {error.message}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full bg-violet px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet/25 transition hover:bg-violet/90 active:scale-[0.98]"
            >
              Try again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium text-ink/80 transition hover:text-ink hover:bg-ink/5"
            >
              Back to home
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-ink/10">
            <a
              href={`mailto:${process.env.CONTACT_EMAIL || "hello@plexusbeam.com"}`}
              className="text-sm text-ink/50 hover:text-violet transition-colors"
            >
              Report this issue →
            </a>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-8 text-center text-sm text-ink/40">
        <p>© {new Date().getFullYear()} PlexusBeam. Not financial advice.</p>
      </footer>
    </div>
  );
}
