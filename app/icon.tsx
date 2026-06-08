import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";
export const alt = "PlexusBeam logo";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="6" fill="#7C3AED" opacity="0.2" />
          <circle cx="16" cy="16" r="3" fill="#7C3AED" />
          <line x1="16" y1="4" x2="16" y2="10" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="22" x2="16" y2="28" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4" y1="16" x2="10" y2="16" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="16" x2="28" y2="16" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
