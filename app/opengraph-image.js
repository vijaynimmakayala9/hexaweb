import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#F8FBF8",
        color: "#174C3C",
      }}
    >
      <div style={{ fontSize: 28 }}>HEXASOFTSOLUTIONS</div>
      <div style={{ fontSize: 72, fontWeight: 700, marginTop: 30 }}>
        Thoughtful software.
        <br />
        Meaningful progress.
      </div>
      <div style={{ fontSize: 28, marginTop: 30 }}>
        Digital products built around your ambition.
      </div>
    </div>,
    size,
  );
}
