import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Submit a work order or call Metric Industries — Houston's trusted property turnover partner.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(56px,6vw,96px)" }}>
        <div className="wrap">
          <p className="eyebrow">Get in touch</p>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,80px)", maxWidth: 640 }}>
            Let&apos;s get your unit <em>move-in ready.</em>
          </h1>
          <p className="lead" style={{ maxWidth: 520, marginBottom: 0 }}>
            Same-day response. Call us, email us, or submit your work order through our portal.
          </p>
        </div>
      </section>

      <section className="sec-band">
        <div className="wrap">
          <div className="g-2" style={{ gap: "clamp(40px,5vw,80px)", alignItems: "start" }}>
            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  label: "Phone",
                  value: siteConfig.contact.phone,
                  href: siteConfig.contact.phoneHref,
                  desc: "Mon–Fri 8am–6pm · 24/7 emergencies",
                },
                {
                  label: "Email",
                  value: siteConfig.contact.email,
                  href: siteConfig.contact.emailHref,
                  desc: "We reply within 4 business hours",
                },
                {
                  label: "Address",
                  value: siteConfig.contact.address,
                  href: undefined,
                  desc: "Spring, TX — Houston Metro",
                },
              ].map((item) => (
                <GlassCard key={item.label} style={{ padding: "24px 28px" }}>
                  <p className="eyebrow" style={{ marginBottom: 8 }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(18px,2vw,26px)",
                        fontWeight: 500,
                        color: "var(--ink-900)",
                        textDecoration: "none",
                        letterSpacing: "-0.01em",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(18px,2vw,26px)",
                        fontWeight: 500,
                        color: "var(--ink-900)",
                        letterSpacing: "-0.01em",
                        margin: "0 0 6px",
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                  <p style={{ fontSize: 13, color: "var(--ink-500)", margin: 0 }}>{item.desc}</p>
                </GlassCard>
              ))}

              <a
                href={siteConfig.zoho}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: 15, padding: "16px 28px", textAlign: "center", justifyContent: "center" }}
              >
                Submit work order via portal →
              </a>
            </div>

            {/* Map */}
            <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--shadow-soft)", height: 480, position: "relative" }}>
              <iframe
                src="https://maps.google.com/maps?q=2211+Rayford+Rd+Ste+111,+Spring,+TX+77386&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Metric Industries location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
