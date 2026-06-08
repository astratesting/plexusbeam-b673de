"use client";

import React, { useState, useCallback } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to receive launch updates",
  }),
  company: z.string().max(0).optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

type WaitlistFormProps = {
  theme?: "light" | "dark";
};

export default function WaitlistForm({ theme = "light" }: WaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "duplicate" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", consent: false, company: "" },
  });

  const onSubmit: SubmitHandler<FormData> = useCallback(async (data) => {
    if (data.company) {
      // Honeypot filled — silently pretend success
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const utm = parseUtm();
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          consent: true,
          referrer: document.referrer || null,
          ...utm,
        }),
      });

      const json = await res.json();

      if (res.status === 429) {
        setStatus("error");
        setErrorMessage("Too many attempts. Please wait a few minutes and try again.");
        return;
      }

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong");
      }

      if (json.status === "duplicate") {
        setStatus("duplicate");
      } else {
        setStatus("success");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please try again.");
    }
  }, []);

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-ink";
  const mutedText = isDark ? "text-white/60" : "text-ink/60";
  const inputBg = isDark ? "bg-white/10" : "bg-white";
  const inputBorder = isDark ? "border-white/20" : "border-ink/10";
  const placeholderColor = isDark ? "placeholder:text-white/40" : "placeholder:text-ink/40";

  if (status === "success" || status === "duplicate") {
    return (
      <div className={`rounded-2xl ${isDark ? "bg-white/10" : "bg-white ring-1 ring-violet/10"} p-8 text-center`}>
        <div className="mb-4 text-4xl">✓</div>
        <h3 className={`text-xl font-display font-bold ${textColor} mb-2`}>
          {status === "duplicate" ? "You're already on the list!" : "You're on the list."}
        </h3>
        <p className={`${mutedText} text-sm`}>
          {status === "duplicate"
            ? "You're all set — we'll email you when it's your turn."
            : "We'll email you when it's your turn."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto" noValidate>
      {/* Honeypot */}
      <input
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("company")}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            placeholder="you@email.com"
            className={`w-full rounded-full px-5 py-3 text-sm ${inputBg} ${inputBorder} border ${placeholderColor} ${textColor} focus:outline-none focus:ring-2 focus:ring-violet/50 transition`}
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-coral pl-4" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet/90 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] whitespace-nowrap"
        >
          {status === "submitting" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>

      {/* Consent checkbox */}
      <div className="mt-4 flex items-start gap-2.5">
        <input
          id="waitlist-consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-ink/20 text-violet focus:ring-violet/50 cursor-pointer"
          {...register("consent")}
        />
        <label htmlFor="waitlist-consent" className={`text-xs ${mutedText} cursor-pointer leading-relaxed`}>
          I agree to receive launch updates.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-violet">
            Privacy policy
          </a>.
        </label>
      </div>
      {errors.consent && (
        <p className="mt-1 text-xs text-coral pl-1" role="alert">
          {errors.consent.message}
        </p>
      )}

      {/* Error message */}
      {status === "error" && (
        <div className="mt-4 rounded-lg bg-coral/10 p-3 text-center">
          <p className="text-sm text-coral">{errorMessage || "Something went wrong. Please try again."}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs font-medium text-coral underline underline-offset-2 hover:text-coral/80"
          >
            Retry
          </button>
        </div>
      )}
    </form>
  );
}

function parseUtm(): { utm_source?: string; utm_medium?: string; utm_campaign?: string } {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: any = {};
  const src = params.get("utm_source");
  const med = params.get("utm_medium");
  const cmp = params.get("utm_campaign");
  if (src) out.utm_source = src;
  if (med) out.utm_medium = med;
  if (cmp) out.utm_campaign = cmp;
  return out;
}