import React from "react";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      {/* Minimal nav */}
      <div className="h-16 flex items-center px-4 sm:px-6 lg:px-8">
        <Logo />
      </div>

      {/* 404 content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-md">
          {/* Lattice illustration */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 opacity-30">
              <Lattice size={192} />
            </div>
          </div>

          <h1 className="text-6xl font-display font-bold text-violet mb-4">
            404
          </h1>
          <h2 className="text-2xl font-display font-bold text-ink mb-4">
            This page doesn't exist
          </h2>
          <p className="text-ink/70 mb-10 leading-relaxed">
            — but our waitlist does. Head back home to join it.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-violet px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet/25 transition hover:bg-violet/90 hover:shadow-xl hover:shadow-violet/30 active:scale-[0.98]"
          >
            ← Back to home
          </Link>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-8 text-center text-sm text-ink/40">
        <p>© {new Date().getFullYear()} PlexusBeam. Not financial advice.</p>
      </footer>
    </div>
  );
}
