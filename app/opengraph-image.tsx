import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          backgroundImage: "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              color: "#a5b4fc",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#6366f1",
              }}
            />
            RH DYNAMICS • ENTERPRISE TECH & AI
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              background: "linear-gradient(to right, #ffffff, #cbd5e1)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Architecting Your Digital Future
          </div>
          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: "#94a3b8",
              fontWeight: 400,
            }}
          >
            Web Apps • Hospital Management Systems (HSMS) • Custom ERP • Digital Dominance
          </div>
        </div>

        {/* Footer / Location / Highlights */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", color: "#e2e8f0", fontSize: "19px", fontWeight: 500 }}>
            <span>📍 Guwahati, Assam</span>
            <span>•</span>
            <span>Northeast India</span>
            <span>•</span>
            <span>Global Delivery</span>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#6366f1",
              letterSpacing: "0.5px",
            }}
          >
            rhdynamics.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
