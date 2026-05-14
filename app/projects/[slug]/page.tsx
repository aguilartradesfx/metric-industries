import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GlassCard from "@/components/ui/GlassCard";
import { services, getServiceBySlug } from "@/content/services";
import { siteConfig } from "@/content/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.subtitle,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const idx  = services.findIndex((s) => s.slug === slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ padding: 0, minHeight: "72vh", position: "relative", overflow: "hidden" }}>
        <Image
          src={svc.image.url}
          alt={svc.image.alt}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />

        {/* Overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(90deg, rgba(251,248,242,0.96) 0%, rgba(251,248,242,0.80) 40%, rgba(251,248,242,0.28) 68%, transparent 85%)",
          }}
        />

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: "linear-gradient(to top, var(--cream-50), transparent)",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          className="wrap"
          style={{
            position: "relative",
            zIndex: 3,
            minHeight: "72vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: 580,
              paddingTop: "clamp(120px, 16vh, 180px)",
              paddingBottom: "clamp(80px, 10vh, 120px)",
            }}
          >
            <p className="eyebrow">{svc.number} — Service</p>
            <h1>{svc.title}</h1>
            <p
              className="lead"
              style={{
                maxWidth: 460,
                fontStyle: "italic",
                color: "var(--clay-500)",
                marginBottom: 40,
              }}
            >
              {svc.subtitle}
            </p>
            <Link href="/contact" className="btn btn-primary">
              {svc.cta} →
            </Link>
          </div>
        </div>
      </section>


      {/* ── Body copy ───────────────────────────────────────────── */}
      <section>
        <div className="wrap">
          <div className="g-2 pad-l">
            {/* Main text */}
            <div>
              <p className="eyebrow">About this service</p>
              <h2 style={{ marginBottom: 24 }}>
                What you <em>get.</em>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.7 }}>{svc.intro}</p>

              {svc.closing && (
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-500)", marginTop: 24 }}>
                  {svc.closing}
                </p>
              )}

              <div style={{ marginTop: 40 }}>
                <Link href="/contact" className="btn btn-primary">
                  Create work order →
                </Link>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="btn btn-ghost"
                  style={{ marginLeft: 12 }}
                >
                  Call {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Includes list */}
            <GlassCard heavy className="r-xl" style={{ padding: "clamp(32px,4vw,56px)" }}>
              <p className="eyebrow" style={{ marginBottom: 24 }}>What we cover</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {svc.includes.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "var(--sage-soft)",
                        border: "1px solid var(--sage-300)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="var(--sage-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>


      {/* ── Lifestyle image (if present) ────────────────────────── */}
      {svc.lifestyleImage && (
        <section>
          <div className="wrap">
            <div
              className="img-frame"
              style={{
                aspectRatio: "16/7",
                position: "relative",
              }}
            >
              <Image
                src={svc.lifestyleImage.url}
                alt={svc.lifestyleImage.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 1280px"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "clamp(24px,4vw,56px)",
                  background: "linear-gradient(to top, rgba(46,44,40,0.55) 0%, transparent 100%)",
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(24px,3.5vw,48px)",
                    color: "var(--cream-50)",
                    letterSpacing: "-0.02em",
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  {svc.lifestyleImage.headline}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ── Prev / Next navigation ──────────────────────────────── */}
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Prev */}
            <Link
              href={`/projects/${prev.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GlassCard
                style={{
                  padding: "clamp(20px,3vw,36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  height: "100%",
                  transition: "all .25s ease",
                }}
                className="svc-card"
              >
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--clay-500)" }}>
                  ← Previous
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(18px,2vw,26px)",
                    letterSpacing: "-0.015em",
                    color: "var(--ink-900)",
                  }}
                >
                  {prev.title}
                </span>
                <span style={{ fontSize: 13, color: "var(--ink-500)", marginTop: "auto" }}>
                  {prev.number}
                </span>
              </GlassCard>
            </Link>

            {/* Next */}
            <Link
              href={`/projects/${next.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GlassCard
                style={{
                  padding: "clamp(20px,3vw,36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  height: "100%",
                  textAlign: "right",
                  transition: "all .25s ease",
                }}
                className="svc-card"
              >
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--clay-500)" }}>
                  Next →
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(18px,2vw,26px)",
                    letterSpacing: "-0.015em",
                    color: "var(--ink-900)",
                  }}
                >
                  {next.title}
                </span>
                <span style={{ fontSize: 13, color: "var(--ink-500)", marginTop: "auto" }}>
                  {next.number}
                </span>
              </GlassCard>
            </Link>
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/projects" className="btn btn-ghost">
              ← All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
