import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Painting, resurfacing, make-ready, maid service, carpet cleaning, air duct, water extraction, mold remediation, and fire damage restoration — all under one roof.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "clamp(120px,16vh,180px)" }}>
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h1 style={{ marginBottom: 16 }}>
            Nine services, <em>one</em> team.
          </h1>
          <p className="lead" style={{ maxWidth: 560, marginBottom: 0 }}>
            Same-day walkthroughs, transparent estimates, and paperless invoicing —
            on every job, every service.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section>
        <div className="wrap">
          <div className="g-3">
            {services.map((svc) => (
              <Link key={svc.slug} href={`/projects/${svc.slug}`} style={{ display: "contents" }}>
                <GlassCard className="svc-card">
                  <div className="svc-thumb">
                    <Image
                      src={svc.image.url}
                      alt={svc.image.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw"
                    />
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                    <span className="svc-title">{svc.title}</span>
                    <span className="svc-num">{svc.number}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--ink-700)", margin: 0, flexGrow: 1 }}>
                    {svc.description}
                  </p>
                  <span className="svc-read">Get a quote</span>
                </GlassCard>
              </Link>
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
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Create work order →
            </Link>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
