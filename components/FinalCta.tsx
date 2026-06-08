import React from "react";
import WaitlistForm from "@/components/WaitlistForm";

export default function FinalCta() {
  return (
    <section
      id="waitlist"
      className="section-scroll-margin relative overflow-hidden bg-gradient-to-br from-violet via-violet to-coral"
    >
      {/* Decorative blur circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Be on the list when we open the doors.
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Join the waitlist for early access and a locked-in introductory price.
          </p>

          <WaitlistForm theme="dark" />

          <p className="mt-6 text-sm text-white/60">
            We'll only email you about the launch. Unsubscribe in one click.
          </p>
        </div>
      </div>
    </section>
  );
}
