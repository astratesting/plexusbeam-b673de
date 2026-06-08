"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Signals", href: "#signals" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const navCls = scrolled
    ? "bg-offwhite/80 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <header
      className={`sticky top-0 z-50 h-16 transition-colors duration-300 ${navCls}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-violet ${
                  activeSection === l.href.slice(1)
                    ? "text-violet font-semibold"
                    : "text-ink/70"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-ink/50 hover:text-ink/80 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-violet px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet/90"
          >
            Join the waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button
              className="md:hidden p-2 text-ink/70 hover:text-ink transition"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
            <Dialog.Content
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-offwhite p-6 shadow-xl flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between mb-8">
                <Logo />
                <Dialog.Close asChild>
                  <button
                    className="p-2 text-ink/70 hover:text-ink transition"
                    aria-label="Close navigation menu"
                  >
                    <X size={24} />
                  </button>
                </Dialog.Close>
              </div>

              <ul className="flex flex-col gap-6 flex-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-violet ${
                        activeSection === l.href.slice(1)
                          ? "text-violet font-semibold"
                          : "text-ink/80"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-ink/10 flex flex-col gap-4">
                <a
                  href="#"
                  className="text-sm text-ink/50 hover:text-ink/80 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-violet px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-violet/90"
                >
                  Join the waitlist
                </a>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
