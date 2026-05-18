import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "15 years of precision property turnover — one reliable partner for every trade, every unit, every time.",
};

const whyItems = [
  { title: "15 Years Experience", desc: "Over a decade and a half serving multifamily property managers across the US." },
  { title: "Licensed & Insured", desc: "Full coverage so your properties and residents are always protected." },
  { title: "Commitment to Excellence", desc: "Every unit delivered to a standard we're proud to put our name on." },
  { title: "Paperless Transactions", desc: "Digital estimates, invoices, and reports — no paper, no chasing." },
];

const processSteps = [
  { stage: "01", title: "First Contact",   desc: "Call or submit a work order. We confirm the same day and get a walkthrough on the calendar." },
  { stage: "02", title: "Site Assessment", desc: "We inspect the unit, document the scope, and deliver a clear itemized estimate — no vague numbers." },
  { stage: "03", title: "Work Execution",  desc: "Our coordinated crew handles every trade in sequence — daily updates, quality checks, no surprises." },
  { stage: "04", title: "Final Delivery",  desc: "Completion report, before-and-after photos, and a paperless invoice. Unit is move-in ready." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(56px,6vw,96px)" }}>
        <div className="wrap">
          <p className="eyebrow">About Metric Industries</p>
          <h1 style={{ fontSize: "clamp(40px,5.5vw,80px)", maxWidth: 720 }}>
            Precision, speed, and accountability on <em>every</em> turn.
          </h1>
          <p className="lead" style={{ maxWidth: 580, marginBottom: 40 }}>
            The trusted partner for apartment unit turnover — from same-day walkthroughs
            to full make-ready services, all under one roof.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Create work order →</Link>
            <a href={siteConfig.contact.phoneHref} className="btn btn-ghost">Call {siteConfig.contact.phone}</a>
          </div>
        </div>
      </section>

      {/* Cinematic break */}
      <section style={{ padding: 0, position: "relative", minHeight: "52vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Image
          src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643408/18_ggnr6r.jpg"
          alt="Family in a freshly prepared apartment"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(30,26,20,0.72) 0%,rgba(30,26,20,0.35) 60%,transparent 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, padding: "clamp(64px,8vw,112px) var(--gutter)" }}>
          <p className="eyebrow" style={{ color: "rgba(215,200,175,0.8)" }}>Who we are</p>
          <h2 style={{ color: "var(--cream-50)", maxWidth: 480, marginBottom: 0 }}>
            15 years making units <em style={{ color: "var(--sand-300)" }}>move-in ready.</em>
          </h2>
        </div>
      </section>

      {/* Story */}
      <section className="sec-band">
        <div className="wrap">
          <div className="g-2" style={{ gap: "clamp(40px,5vw,80px)", alignItems: "center" }}>
            <div>
              <p className="eyebrow">Our Story</p>
              <h2>Built for the moment a resident moves out.</h2>
              <p>
                At Metric Industries, we understand the pivotal moment when a resident moves out
                and the urgency to swiftly transform a space into an inviting home for the next tenant.
                With precision and expertise, we specialize in seamlessly coordinating schedules to
                assess and revitalize apartment units nationwide.
              </p>
              <p>
                Founded on the belief that property managers deserve a single, reliable partner for
                every trade — painting, flooring, cleaning, restoration — we built Metric to eliminate
                the chaos of coordinating multiple vendors on a tight turn schedule.
              </p>
            </div>
            <div className="img-frame" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643394/3_wol2qa.jpg"
                alt="Metric Industries team at work"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section>
        <div className="wrap">
          <div className="g-2" style={{ gap: "clamp(40px,5vw,80px)", alignItems: "center" }}>
            <div className="img-frame" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643394/4-2_kjbows.jpg"
                alt="Metric Industries technician"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 640px"
              />
            </div>
            <div>
              <p className="eyebrow">Why choose us</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {whyItems.map((item) => (
                  <GlassCard key={item.title} style={{ padding: "20px 24px" }}>
                    <h3 style={{ fontSize: 16, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, margin: 0, color: "var(--ink-700)" }}>{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="our-process">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Our Process</p>
            <h2>Four steps, zero guesswork.</h2>
          </div>
          <div className="proc-grid-4">
            {processSteps.map((s) => (
              <GlassCard key={s.stage} className="proc-card r-xl">
                <span className="proc-bg-num" aria-hidden="true">{s.stage}</span>
                <p className="proc-stage">Step {s.stage}</p>
                <h3 className="proc-title">{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--ink-700)", margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <GlassCard heavy className="r-xl" style={{ padding: "clamp(48px,7vw,88px)", textAlign: "center" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Ready to get started?</p>
            <h2 style={{ marginBottom: 32 }}>One call covers <em>everything.</em></h2>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
                Create work order →
              </Link>
              <Link href="/projects" className="btn btn-ghost" style={{ fontSize: 16, padding: "16px 36px" }}>
                View all services →
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
