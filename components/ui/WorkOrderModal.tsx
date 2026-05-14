"use client";
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
  padding: "11px 14px",
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

export default function WorkOrderModal() {
  const [open, setOpen] = useState(false);
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

  function close() {
    setOpen(false);
    setTimeout(() => setDone(false), 400);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn btn-primary" style={{ border: "none", cursor: "pointer" }}>
        New customer
      </button>

      {open && (
        <div
          onClick={(e) => e.target === e.currentTarget && close()}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(30,26,20,0.52)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              background: "rgba(251,248,242,0.97)",
              borderRadius: 20,
              padding: "clamp(24px,4vw,44px)",
              maxWidth: 560,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h2 style={{ margin: 0, fontSize: "clamp(18px,2.2vw,24px)" }}>Create work order</h2>
              <button
                onClick={close}
                aria-label="Close"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "var(--ink-500)", lineHeight: 0 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {done ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--clay-500)" strokeWidth="1.5" style={{ marginBottom: 16 }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Request sent!</p>
                <p style={{ fontSize: 14, color: "var(--ink-500)" }}>We&apos;ll get back to you within 4 business hours.</p>
                <button onClick={close} className="btn btn-primary" style={{ marginTop: 24, cursor: "pointer", border: "none" }}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {/* Customer type */}
                <div style={{ display: "flex", gap: 28 }}>
                  {(["existing", "new"] as const).map((t) => (
                    <label key={t} style={{ display: "flex", gap: 8, alignItems: "center", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--ink-700)" }}>
                      <input
                        type="radio"
                        name="customerType"
                        value={t}
                        checked={customerType === t}
                        onChange={() => setCustomerType(t)}
                        style={{ accentColor: "var(--clay-500)" }}
                      />
                      {t === "existing" ? "Existing customer" : "New customer"}
                    </label>
                  ))}
                </div>

                {/* Text fields */}
                {[
                  { key: "propertyName",  label: "Property name",          required: true,  type: "text" },
                  { key: "namePosition",  label: "Your name and position",  required: true,  type: "text" },
                  { key: "email",         label: "Email",                   required: true,  type: "email" },
                  { key: "phone",         label: "Phone",                   required: true,  type: "tel" },
                  { key: "apartment",     label: "Apartment #",             required: false, type: "text" },
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
                  <p style={{ ...LABEL_STYLE, marginBottom: 12 }}>Services needed</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {SERVICE_OPTIONS.map((svc) => (
                      <label key={svc} style={{ display: "flex", gap: 10, alignItems: "center", cursor: "pointer", fontSize: 14, color: "var(--ink-700)" }}>
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
                  style={{ width: "100%", justifyContent: "center", marginTop: 4, padding: "15px", border: "none", cursor: "pointer", fontSize: 15 }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
