import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt =
  "Servicely software, data and automation services for better business workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const capabilities = [
  "Power BI & analytics",
  "Workflow automation",
  "Web & mobile products",
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f8fafc",
          color: "#111827",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -92,
            top: -112,
            width: 440,
            height: 440,
            display: "flex",
            borderRadius: 999,
            background: "#b8c9ff",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 90,
            bottom: -170,
            width: 390,
            height: 390,
            display: "flex",
            borderRadius: 999,
            background: "#99e3cc",
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 130,
            top: 176,
            width: 184,
            height: 184,
            display: "flex",
            borderRadius: 999,
            background: "#e3f94c",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>

          <div
            style={{
              maxWidth: 790,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#365fd9",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Software · Data · Automation
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: "-0.045em",
              }}
            >
              Better systems for real business workflows
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 720,
                color: "#4b5563",
                fontSize: 25,
                lineHeight: 1.4,
              }}
            >
              Practical software and data products designed around how teams
              work.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {capabilities.map((capability) => (
              <div
                key={capability}
                style={{
                  display: "flex",
                  padding: "11px 18px",
                  border: "1px solid #d1d5db",
                  borderRadius: 999,
                  background: "rgba(255, 255, 255, 0.82)",
                  color: "#374151",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
