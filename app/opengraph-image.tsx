import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import Lattice from "@/components/Lattice";

export const runtime = "edge";
export const alt = "PlexusBeam — AI-powered retail trading intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF8F0",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {/* Background lattice */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            opacity: 0.12,
          }}
        >
          {/* Simplified lattice representation */}
          <svg width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="12" fill="#7C3AED" />
            <circle cx="80" cy="80" r="8" fill="#7C3AED" opacity="0.6" />
            <circle cx="320" cy="80" r="8" fill="#7C3AED" opacity="0.6" />
            <circle cx="80" cy="320" r="8" fill="#7C3AED" opacity="0.6" />
            <circle cx="320" cy="320" r="8" fill="#7C3AED" opacity="0.6" />
            <line x1="80" y1="80" x2="200" y2="200" stroke="#7C3AED" strokeWidth="1" opacity="0.4" />
            <line x1="320" y1="80" x2="200" y2="200" stroke="#7C3AED" strokeWidth="1" opacity="0.4" />
            <line x1="80" y1="320" x2="200" y2="200" stroke="#7C3AED" strokeWidth="1" opacity="0.4" />
            <line x1="320" y1="320" x2="200" y2="200" stroke="#7C3AED" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#1F1B2E",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Stock insights you can
            <br />
            <span style={{ color: "#7C3AED" }}>actually understand.</span>
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#1F1B2E",
              opacity: 0.7,
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            AI-powered retail intelligence. Explainable, plain-English stock
            predictions.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
