import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} - Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f4f2ec",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#6b6b67",
            fontFamily: "monospace",
          }}
        >
          Software Engineer <span style={{ color: "#FF5A1F", marginLeft: 10, marginRight: 10 }}>/</span> Jakarta, Indonesia
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            marginTop: 20,
            fontWeight: 600,
            letterSpacing: -3,
            textTransform: "uppercase",
            lineHeight: 0.95,
          }}
        >
          Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 32, color: "#6b6b67", maxWidth: 900 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
