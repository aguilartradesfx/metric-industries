"use client";
import Image from "next/image";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Paint", "Drywall repair", "Resurfacing", "Maid service",
  "Carpet cleaning", "AC Duct", "Water extraction", "Other",
];

const TRUST = [
  { n: "15y",  l: "In business" },
  { n: "9",    l: "Service lines" },
  { n: "24/7", l: "Emergency" },
  { n: "4h",   l: "Response time" },
];

const INPUT: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(180,160,130,0.30)",
  background: "rgba(255,255,255,0.60)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
  color: "var(--ink-900)",
  fontFamily: "var(--font-body)",
  transition: "border-color .2s, box-shadow .2s",
};

const LABEL: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  display: "block",
  marginBottom: 6,
  color: "var(--ink-500)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

export default function NewCustomerPage() {
  const [done, setDone] = useState(false);
  const [customerType, setCustomerType] = useState<"existing" | "new">("new");
  const [checkedServices, setCheckedServices] = useState<string[]>([]);
  const [fields, setFields] = useState({
    propertyName: "", namePosition: "", email: "", phone: "", apartment: "", unitSize: "",
  });

  function toggleService(svc: string) {
    setCheckedServices((p) => p.includes(svc) ? p.filter((s) => s !== svc) : [...p, svc]);
  }
  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement>) => setFields((f) => ({ ...f, [key]: e.target.value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Customer type: ${customerType}`,
      `Property name: ${fields.propertyName}`,
      `Name / Position: ${fields.namePosition}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Apartment #: ${fields.apartment || "—"}`,
      `Services: ${checkedServices.join(", ") || "—"}`,
      `Unit size: ${fields.unitSize}`,
    ].join("\n");
    window.location.href = `mailto:service@metric.industries?subject=New Work Order — ${fields.propertyName}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  return (
    <>
      <style>{`
        .nc-page { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
        .nc-left  { position: sticky; top: 0; height: 100vh; overflow: hidden; }
        .nc-right { padding: clamp(120px,16vh,180px) clamp(24px,5vw,72px) clamp(80px,10vh,120px); }
        .nc-form-card {
          background: rgba(251,248,242,0.72);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.70);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.03),
            0 8px 28px rgba(0,0,0,0.07),
            0 32px 80px rgba(0,0,0,0.10),
            inset 0 1px 0 rgba(255,255,255,0.90),
            inset 0 -1px 0 rgba(140,120,90,0.12);
          padding: clamp(28px,4vw,52px);
          transform: perspective(1400px) rotateY(-1.5deg);
          transform-origin: left center;
        }
        .nc-input:focus {
          border-color: rgba(180,140,90,0.55) !important;
          box-shadow: 0 0 0 3px rgba(180,140,90,0.12) !important;
          background: rgba(255,255,255,0.82) !important;
        }
        .nc-check-row { display:flex; gap:12px; align-items:center; cursor:pointer; padding:10px 14px; border-radius:10px; transition:background .15s; }
        .nc-check-row:hover { background: rgba(255,255,255,0.55); }
        @media (max-width: 860px) {
          .nc-page { grid-template-columns: 1fr; }
          .nc-left  { position: relative; height: 52vw; min-height: 260px; }
          .nc-right { padding: 40px clamp(20px,5vw,48px) 80px; }
          .nc-form-card { transform: none; }
        }
      `}</style>

      <div className="nc-page">

        {/* ── Left panel — sticky image + trust ── */}
        <div className="nc-left">
          <Image
            src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778734916/Layer_11_rptpon.jpg"
            alt="Metric Industries 3D apartment illustration"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="50vw"
          />
          {/* Dark gradient so text pops */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(20,18,14,0.68) 0%, rgba(20,18,14,0.30) 60%, rgba(20,18,14,0.55) 100%)" }} />

          {/* Content over image */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(32px,5vw,64px)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(215,200,175,0.75)", marginBottom: 12 }}>
              Metric Industries
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 500, color: "var(--cream-50)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
              Your first work order<br />starts <em style={{ color: "var(--sand-300)" }}>here.</em>
            </h1>

            {/* Trust chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {TRUST.map((t) => (
                <div key={t.l} style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "10px 18px", borderRadius: 14,
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(16px,2vw,22px)", color: "var(--cream-50)", letterSpacing: "-0.02em", lineHeight: 1 }}>{t.n}</span>
                  <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.09em", color: "rgba(215,200,175,0.70)", marginTop: 3, fontWeight: 600 }}>{t.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right panel — form ── */}
        <div className="nc-right">
          {done ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", textAlign: "center" }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.80)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--clay-500)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 style={{ marginBottom: 10 }}>Request sent!</h2>
              <p style={{ color: "var(--ink-500)", maxWidth: 320 }}>We&apos;ll get back to you within 4 business hours.</p>
            </div>
          ) : (
            <div className="nc-form-card">
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--clay-500)", marginBottom: 8 }}>Work order request</p>
              <h2 style={{ fontSize: "clamp(20px,2.5vw,28px)", marginBottom: 28 }}>Tell us about your unit</h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Customer type toggle */}
                <div style={{ display: "flex", gap: 10, padding: 4, background: "rgba(180,160,130,0.12)", borderRadius: 14, width: "fit-content" }}>
                  {(["existing", "new"] as const).map((t) => (
                    <label key={t} style={{
                      padding: "8px 18px", borderRadius: 11, cursor: "pointer", fontSize: 13, fontWeight: 600,
                      background: customerType === t ? "rgba(255,255,255,0.85)" : "transparent",
                      boxShadow: customerType === t ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                      color: customerType === t ? "var(--ink-900)" : "var(--ink-500)",
                      transition: "all .2s",
                      display: "flex", alignItems: "center", gap: 8,
                    }}>
                      <input type="radio" name="customerType" value={t} checked={customerType === t} onChange={() => setCustomerType(t)} style={{ display: "none" }} />
                      {t === "existing" ? "Existing customer" : "New customer"}
                    </label>
                  ))}
                </div>

                {/* Text fields — 2-col grid for name + phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { key: "propertyName",  label: "Property name",         required: true,  type: "text",  colSpan: 2 },
                    { key: "namePosition",  label: "Your name and position", required: true,  type: "text",  colSpan: 2 },
                    { key: "email",         label: "Email",                  required: true,  type: "email", colSpan: 1 },
                    { key: "phone",         label: "Phone",                  required: true,  type: "tel",   colSpan: 1 },
                    { key: "apartment",     label: "Apartment #",            required: false, type: "text",  colSpan: 1 },
                    { key: "unitSize",      label: "Unit size / sq ft",      required: true,  type: "text",  colSpan: 1, placeholder: "1x1, 2x2, 3x3…" },
                  ].map(({ key, label, required, type, colSpan, placeholder }) => (
                    <div key={key} style={{ gridColumn: `span ${colSpan}` }}>
                      <label style={LABEL}>{label}{required && " *"}</label>
                      <input
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        value={fields[key as keyof typeof fields]}
                        onChange={set(key as keyof typeof fields)}
                        className="nc-input"
                        style={INPUT}
                      />
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <p style={{ ...LABEL, marginBottom: 10 }}>Services needed</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                    {SERVICE_OPTIONS.map((svc) => {
                      const active = checkedServices.includes(svc);
                      return (
                        <label key={svc} className="nc-check-row" style={{
                          background: active ? "rgba(180,140,90,0.10)" : undefined,
                          border: active ? "1px solid rgba(180,140,90,0.25)" : "1px solid transparent",
                        }}>
                          <div style={{
                            width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                            border: `1.5px solid ${active ? "var(--clay-500)" : "rgba(180,160,130,0.45)"}`,
                            background: active ? "var(--clay-500)" : "rgba(255,255,255,0.7)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all .15s",
                          }}>
                            {active && <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          </div>
                          <input type="checkbox" checked={active} onChange={() => toggleService(svc)} style={{ display: "none" }} />
                          <span style={{ fontSize: 14, color: "var(--ink-700)", fontWeight: active ? 600 : 400 }}>{svc}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "16px", border: "none", cursor: "pointer", fontSize: 15, marginTop: 4, borderRadius: 14 }}
                >
                  Submit work order →
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
