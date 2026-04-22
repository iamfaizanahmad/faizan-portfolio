import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0a0a0a",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#f5f5f4",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
          }}
        >
          FA
        </span>
      </div>
    ),
    { ...size },
  );
}
