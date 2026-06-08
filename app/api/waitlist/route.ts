import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { checkRateLimit } from "@/lib/rateLimit";
import { parseUtm } from "@/lib/utm";

const CORS_HEADERS = {
  "Content-Type": "application/json",
};

function sha256(plain: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest("SHA-256", data).then((buf) => {
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  });
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const rl = checkRateLimit(ip);
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait and try again." },
        { status: 429, headers: CORS_HEADERS }
      );
    }

    // Parse & validate body
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const email = body?.email;
    const consent = body?.consent;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // Honeypot check
    if (body.company && body.company !== "") {
      // Silent success — bot filled the hidden field
      return NextResponse.json(
        { ok: true, status: "new" },
        { status: 200, headers: CORS_HEADERS }
      );
    }

    // Hash IP
    const salt = process.env.IP_HASH_SALT || "default-salt-change-me";
    const ip_hash = await sha256(ip + salt);

    // Parse UTM
    const utm = typeof body.utm_source !== "undefined" ? body : { search: "" };
    const utmParams =
      typeof body.search === "string"
        ? parseUtm(body.search)
        : {
            utm_source: body.utm_source || null,
            utm_medium: body.utm_medium || null,
            utm_campaign: body.utm_campaign || null,
          };

    // Upsert into Supabase
    const { data, error } = await supabaseAdmin
      .from("waitlist_signups")
      .upsert(
        {
          email: email.toLowerCase().trim(),
          consent: true,
          referrer: body.referrer || null,
          ip_hash,
          user_agent: req.headers.get("user-agent") || null,
          ...utmParams,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select("id, created_at, updated_at");

    if (error) {
      console.error("[waitlist] Supabase error:", error);
      return NextResponse.json(
        { error: "Unable to join waitlist. Please try again." },
        { status: 500, headers: CORS_HEADERS }
      );
    }

    // Determine if new or duplicate
    // If the upsert returned data and created_at equals updated_at (within 5 seconds), it's likely new
    const now = Date.now();
    const createdAt = data?.[0]?.created_at ? new Date(data[0].created_at).getTime() : 0;
    const updatedAt = data?.[0]?.updated_at ? new Date(data[0].updated_at).getTime() : 0;

    // If created_at and updated_at are the same (within 5 seconds), it's a new insert
    const status = Math.abs(createdAt - updatedAt) < 5000 ? "new" : "duplicate";

    // Optionally send confirmation email via Resend
    if (status === "new" && process.env.RESEND_API_KEY) {
      // Fire and forget
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "PlexusBeam <hello@plexusbeam.com>",
          to: email,
          subject: "You're on the PlexusBeam waitlist!",
          text: "Thanks for joining the PlexusBeam waitlist. We'll email you when it's your turn.",
        }),
      }).catch((err) => console.error("[waitlist] Resend error:", err));
    }

    return NextResponse.json(
      { ok: true, status },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err: any) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
