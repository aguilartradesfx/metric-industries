import Link from "next/link";
import { siteConfig } from "@/content/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "New customer", href: "/contact" },
  { label: "Existing customer", href: siteConfig.zoho, external: true },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/projects" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--cream-100)",
        borderTop: "1px solid var(--sand-300)",
        position: "relative",
        zIndex: 5,
      }}
    >
      {/* Ready? display headline */}
      <div
        style={{
          padding: "80px 0 64px",
          textAlign: "center",
          borderBottom: "1px solid var(--sand-300)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(40px, 7vw, 96px)",
            letterSpacing: "-0.03em",
            color: "var(--ink-900)",
            lineHeight: 1.05,
            margin: "0 0 32px",
          }}
        >
          Ready? <em style={{ color: "var(--clay-500)" }}>Reach out today.</em>
        </p>
        <Link href="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
          Create work order →
        </Link>
      </div>

      {/* Google Maps embed */}
      <div style={{ width: "100%", height: 340, overflow: "hidden", borderBottom: "1px solid var(--sand-300)" }}>
        <iframe
          src="https://maps.google.com/maps?q=2211+Rayford+Rd+Ste+111,+Spring,+TX+77386&output=embed&z=15"
          width="100%"
          height="340"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Metric Industries location"
        />
      </div>

      {/* Main footer grid */}
      <div className="wrap" style={{ padding: "64px var(--gutter) 40px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px" }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/metric-logo.png" alt="Metric Industries" style={{ height: 44, width: "auto", display: "block", marginBottom: "16px" }} />
            <p
              style={{
                fontSize: "14px",
                maxWidth: "280px",
                color: "var(--ink-700)",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              Multiple solutions, one call. Houston&apos;s trusted partner for property turnover.
            </p>
            <address
              style={{
                fontStyle: "normal",
                fontSize: "14px",
                color: "var(--ink-700)",
                lineHeight: 1.8,
              }}
            >
              <a
                href={siteConfig.contact.emailHref}
                style={{ color: "var(--ink-700)", textDecoration: "none", display: "block" }}
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                style={{ color: "var(--ink-700)", textDecoration: "none", display: "block" }}
              >
                Tel: {siteConfig.contact.phone}
              </a>
              <span>{siteConfig.contact.address}</span>
            </address>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--clay-500)",
                margin: "0 0 16px",
              }}
            >
              Quick Links
            </h4>
            {quickLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--ink-700)", textDecoration: "none", display: "block", padding: "4px 0", fontSize: "14px" }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: "var(--ink-700)", textDecoration: "none", display: "block", padding: "4px 0", fontSize: "14px" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--clay-500)",
                margin: "0 0 16px",
              }}
            >
              Legal
            </h4>
            <Link
              href="/privacy-policy"
              style={{ color: "var(--ink-700)", textDecoration: "none", display: "block", padding: "4px 0", fontSize: "14px" }}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--clay-500)",
                margin: "0 0 16px",
              }}
            >
              Follow
            </h4>
            {[
              { label: "Instagram", href: siteConfig.social.instagram },
              { label: "Facebook",  href: siteConfig.social.facebook },
              { label: "LinkedIn",  href: siteConfig.social.linkedin },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--ink-700)", textDecoration: "none", display: "block", padding: "4px 0", fontSize: "14px" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "24px",
            borderTop: "1px solid var(--sand-300)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "var(--ink-500)",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span>
            ©2026 Metric Industries. Made by{" "}
            <a
              href={siteConfig.bralto}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--clay-500)", textDecoration: "none" }}
            >
              Bralto Agency™
            </a>
          </span>
          <span>Spring, TX — Houston Metro</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
