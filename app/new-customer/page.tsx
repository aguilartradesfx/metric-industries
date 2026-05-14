"use client";
import type { Metadata } from "next";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Paint",
  "Drywall repair",
  "Resurfacing",
  "Maid service",
  "Carpet cleaning",
  "AC Duct",
  "Water extraction",
  "Other",
];

const FIELD_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 10,
  border: "1px solid rgba(180,160,130,0.35)",
  background: "rgba(255,255,255,0.72)",
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
  color: "var(--ink-900)",
  fontFamily: "var(--font-body)",
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  display: "block",
  marginBottom: 6,
  color: "var(--ink-700)",
  letterSpacing: "0.01em",
};

export default function NewCustomerPage() {
  const [done, setDone] = useState(false);
  const [customerType, setCustomerType] = useState<"existing" | "new">("new");
  const [checkedServices, setCheckedServices] = useState<string[]>([]);
  const [fields, setFields] = useState({
    propertyName: "",
    namePosition: "",
    email: "",
    phone: "",
    apartment: "",
    unitSize: "",
  });

  function toggleService(svc: string) {
    setCheckedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  }

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
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
      `Services needed: ${checkedServices.join(", ") || "—"}`,
      `Unit size / sq ft: ${fields.unitSize}`,
    ].join("\n");
    window.location.href = `mailto:service@metric.industries?subject=New Work Order — ${fields.propertyName}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  return (
    <section style={{ paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(80px,10vh,140px)" }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <p className="eyebrow">Work order</p>
        <h1 style={{ fontSize: "clamp(32px,4vw,56px)", marginBottom: 12 }}>New customer</h1>
        <p className="lead" style={{ marginBottom: 48 }}>
          Fill in the form and we&apos;ll get back to you as soon as possible.
        </p>

        {done ? (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--clay-500)" strokeWidth="1.5" style={{ marginBottom: 20 }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 style={{ marginBottom: 12 }}>Request sent!</h2>
            <p style={{ color: "var(--ink-500)" }}>We&apos;ll get back to you within 4 business hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Customer type */}
            <div style={{ display: "flex", gap: 32 }}>
              {(["existing", "new"] as const).map((t) => (
                <label key={t} style={{ display: "flex", gap: 10, alignItems: "center", cursor: "pointer", fontSize: 15, fontWeight: 500, color: "var(--ink-700)" }}>
                  <input
                    type="radio"
                    name="customerType"
                    value={t}
                    checked={customerType === t}
                    onChange={() => setCustomerType(t)}
                    style={{ accentColor: "var(--clay-500)", width: 16, height: 16 }}
                  />
                  {t === "existing" ? "Existing customer" : "New customer"}
                </label>
              ))}
            </div>

            {/* Text fields */}
            {[
              { key: "propertyName",  label: "Property name",         required: true,  type: "text" },
              { key: "namePosition",  label: "Your name and position", required: true,  type: "text" },
              { key: "email",         label: "Email",                  required: true,  type: "email" },
              { key: "phone",         label: "Phone",                  required: true,  type: "tel" },
              { key: "apartment",     label: "Apartment #",            required: false, type: "text" },
            ].map(({ key, label, required, type }) => (
              <div key={key}>
                <label style={LABEL_STYLE}>{label}{required && " *"}</label>
                <input
                  type={type}
                  required={required}
                  value={fields[key as keyof typeof fields]}
                  onChange={set(key as keyof typeof fields)}
                  style={FIELD_STYLE}
                />
              </div>
            ))}

            {/* Services */}
            <div>
              <p style={{ ...LABEL_STYLE, marginBottom: 14 }}>Services needed</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {SERVICE_OPTIONS.map((svc) => (
                  <label key={svc} style={{ display: "flex", gap: 12, alignItems: "center", cursor: "pointer", fontSize: 15, color: "var(--ink-700)" }}>
                    <input
                      type="checkbox"
                      checked={checkedServices.includes(svc)}
                      onChange={() => toggleService(svc)}
                      style={{ accentColor: "var(--clay-500)", width: 16, height: 16 }}
                    />
                    {svc}
                  </label>
                ))}
              </div>
            </div>

            {/* Unit size */}
            <div>
              <label style={LABEL_STYLE}>Unit size / sq ft *</label>
              <input
                type="text"
                required
                placeholder="Example 1x1, 2x2, 3x3 / sq ft"
                value={fields.unitSize}
                onChange={set("unitSize")}
                style={FIELD_STYLE}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: "flex-end", padding: "15px 40px", border: "none", cursor: "pointer", fontSize: 15 }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
