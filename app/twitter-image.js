import { ImageResponse } from "next/og";

export const alt = "Hexasoftsolutions: custom software solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#174C3C",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 40,
          fontWeight: 700,
          color: "#A8D5BA",
        }}
      >
        Hexasoftsolutions
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 700,
          lineHeight: 1.05,
          maxWidth: 940,
        }}
      >
        Building digital solutions that move your business forward.
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#DDF5E5" }}>
        Custom software · Web & mobile apps · Cloud · AI
      </div>
    </div>,
    { ...size },
  );
}
