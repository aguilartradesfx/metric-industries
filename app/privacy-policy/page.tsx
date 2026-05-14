import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Metric Industries.",
};

export default function PrivacyPage() {
  return (
    <section style={{ paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(80px,10vh,140px)" }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Legal</p>
        <h1 style={{ fontSize: "clamp(36px,4.5vw,64px)", marginBottom: 40 }}>Privacy Policy</h1>

        <p style={{ color: "var(--ink-500)", fontSize: 13, marginBottom: 40 }}>Last updated: January 2026</p>

        {[
          {
            title: "Information We Collect",
            body: "We collect information you provide directly to us when submitting work orders, contacting us by phone or email, or using our customer portal. This may include your name, email address, phone number, and property details.",
          },
          {
            title: "How We Use Your Information",
            body: "We use the information we collect to provide, maintain, and improve our services, communicate with you about your work orders, and send administrative information such as invoices and service confirmations.",
          },
          {
            title: "Information Sharing",
            body: "We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our services, as long as those parties agree to keep this information confidential.",
          },
          {
            title: "Data Security",
            body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
          },
          {
            title: "Contact Us",
            body: `If you have questions about this Privacy Policy, contact us at ${siteConfig.contact.email} or ${siteConfig.contact.phone}.`,
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(20px,2.2vw,28px)", marginBottom: 12 }}>{section.title}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75 }}>{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
