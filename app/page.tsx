import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/content/services";

/* ─── Service icons — explicit 28×28 to prevent viewport expansion ── */
const SZ = { width: 28, height: 28, stroke: "var(--clay-500)", fill: "none", style: { flexShrink: 0 } } as const;
const icons: Record<string, React.ReactNode> = {
  "full-painting":           <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><path d="M2 20h20M5 20V8l7-6 7 6v12"/></svg>,
  resurfacing:               <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8M8 16h5"/></svg>,
  "make-ready":              <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>,
  "maid-service":            <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6M12 10a4 4 0 100-8 4 4 0 000 8z"/></svg>,
  "carpet-services":         <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><path d="M4 20h16M6 16h12M8 12h8M10 8h4"/></svg>,
  "ac-duct":                 <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M7 12h10"/></svg>,
  "water-extraction":        <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><path d="M12 2C6 10 4 14 4 17a8 8 0 0016 0c0-3-2-7-8-15z"/></svg>,
  "mold-remediation":        <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  "fire-damage-restoration": <svg {...SZ} viewBox="0 0 24 24" strokeWidth="1.6"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
};

const railItems = [
  { label: "Painting",     slug: "full-painting",           num: "01" },
  { label: "Resurfacing",  slug: "resurfacing",             num: "02" },
  { label: "Make Ready",   slug: "make-ready",              num: "03" },
  { label: "Maid Service", slug: "maid-service",            num: "04" },
  { label: "Carpet",       slug: "carpet-services",         num: "05" },
  { label: "Air Duct",     slug: "ac-duct",                 num: "06" },
  { label: "Water",        slug: "water-extraction",        num: "07" },
  { label: "Mold",         slug: "mold-remediation",        num: "08" },
  { label: "Fire",         slug: "fire-damage-restoration", num: "09" },
];

/* Logo sets — duplicated for seamless marquee loop */
const trustedLogos     = ["/logos/trusted/asset-1.svg", "/logos/trusted/asset-1-2.svg", "/logos/trusted/asset-2.svg", "/logos/trusted/asset-2-2.svg", "/logos/trusted/asset-5.svg", "/logos/trusted/asset-7.svg", "/logos/trusted/ke2epm.svg"];
const registeredLogos  = ["/logos/registered/asset-1.svg", "/logos/registered/asset-11.svg", "/logos/registered/asset-2.svg", "/logos/registered/asset-33.svg", "/logos/registered/asset-4.svg", "/logos/registered/fsfsf.svg"];
const integratedLogos  = ["/logos/integrated/asset-3.svg", "/logos/integrated/asset-4.svg", "/logos/integrated/thyj3y.tif.svg"];

const whyTags = ["15 Years Experience", "Licensed & Insured", "Commitment to Excellence", "Paperless Transactions"];

const processSteps = [
  { stage: "01", title: "First Contact",   desc: "Call or submit a work order. We confirm the same day and get a walkthrough on the calendar." },
  { stage: "02", title: "Site Assessment", desc: "We inspect the unit, document the scope, and deliver a clear itemized estimate — no vague numbers." },
  { stage: "03", title: "Work Execution",  desc: "Our coordinated crew handles every trade in sequence — daily updates, quality checks, no surprises." },
  { stage: "04", title: "Final Delivery",  desc: "Completion report, before-and-after photos, and a paperless invoice. Unit is move-in ready." },
];

const v = (n: string) => `var(${n})`;

/* ─── Infinite logo marquee ──────────────────────────────────────── */
function Marquee({
  srcs,
  rtl = false,
  duration = "32s",
  copies = 2,
}: {
  srcs: string[];
  rtl?: boolean;
  duration?: string;
  copies?: number;
}) {
  const repeated = Array.from({ length: copies }, () => srcs).flat();
  const outerStyle: React.CSSProperties = {
    overflow: "hidden",
    width: "100%",
    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
    maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
  };
  const trackStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "clamp(32px, 4vw, 72px)",
    alignItems: "center",
    width: "max-content",
    animation: `${rtl ? "marquee-rtl" : "marquee-ltr"} ${duration} linear infinite`,
  };
  const imgStyle: React.CSSProperties = {
    height: "clamp(18px, 2.2vw, 28px)",
    width: "auto",
    maxWidth: 130,
    objectFit: "contain",
    opacity: 0.62,
    display: "inline-block",
    flexShrink: 0,
    verticalAlign: "middle",
  };
  return (
    <div style={outerStyle} className="marquee-hover-wrap">
      <div style={trackStyle} className="marquee-track-inner">
        {repeated.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" style={imgStyle} aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function HomePage() {
  const gridThree = services.slice(0, 3);

  return (
    <>

      {/* ════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════ */}
      {/* ════════════════════════════════════════════════════════════
          HERO + TRUSTED BY — single section, seamless background
          ════════════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{ padding: 0, position: "relative" }}>
        {/* Desktop image */}
        <div className="hero-img-desktop" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <Image
            src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778734916/Layer_11_rptpon.jpg"
            alt="Metric Industries team preparing an apartment unit"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
          />
        </div>
        {/* Mobile image */}
        <div className="hero-img-mobile" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <Image
            src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778733025/Layer_4-4_nzztoi.jpg"
            alt="Metric Industries team preparing an apartment unit"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="100vw"
          />
        </div>


        {/* Hero content */}
        <div className="wrap hero-wrap" style={{ position: "relative", zIndex: 3, minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div className="hero-inner" style={{ maxWidth: 520, paddingTop: "clamp(110px,15vh,160px)", paddingBottom: "clamp(40px,6vh,64px)" }}>
            <p className="eyebrow">Multiple solutions · one call</p>
            <h1 style={{ fontSize: "clamp(26px,3vw,46px)", lineHeight: 1.08 }}>
              Built for the <em>moment</em> a resident moves out.
            </h1>
            <p className="hero-desc" style={{ fontSize: "clamp(15px,1.3vw,18px)", color: v("--ink-700"), lineHeight: 1.65, maxWidth: 420, marginBottom: 0 }}>
              Houston&apos;s go-to partner for turning apartment units around — fast,
              clean, and ready for the next tenant.
            </p>
            <div className="hero-cta" style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Create work order →</Link>
            </div>
            <div className="hero-stats" style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
              {[{ n: "15", s: "y", l: "In business" }, { n: "9", s: "", l: "Service lines" }, { n: "24/", s: "7", l: "Emergency" }].map((c) => (
                <GlassCard key={c.l} heavy style={{ padding: "12px 18px", minWidth: 88 }}>
                  <span style={{ fontFamily: v("--font-display"), fontWeight: 500, fontSize: 24, color: v("--ink-900"), letterSpacing: "-0.02em", lineHeight: 1, display: "block" }}>
                    {c.n}<em style={{ color: v("--clay-500"), fontStyle: "italic", fontWeight: 400 }}>{c.s}</em>
                  </span>
                  <span style={{ display: "block", marginTop: 3, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: v("--ink-500"), fontWeight: 500 }}>{c.l}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By — inside hero section, zero boundary between them */}
        <div className="trusted-by-inner" style={{ position: "relative", zIndex: 3 }}>
          <div className="wrap">
            <GlassCard className="r-xl" style={{ padding: "clamp(28px,3.5vw,44px)", overflow: "hidden" }}>
              <p className="eyebrow" style={{ textAlign: "center", marginBottom: 28 }}>Trusted by</p>
              <Marquee srcs={trustedLogos} copies={6} duration="70s" />
            </GlassCard>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          SERVICE ICON GRID — 5×2 responsive, no overflow
          ════════════════════════════════════════════════════════════ */}
      <section className="sec-band">
        <div className="wrap">
          <div className="svc-icon-grid">
            {railItems.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="svc-icon-item">
                <div className="svc-icon-wrap">{icons[item.slug]}</div>
                <span className="svc-icon-num">{item.num}</span>
                <span className="svc-icon-label">{item.label}</span>
              </Link>
            ))}
            <Link href="/projects" className="btn btn-primary svc-icon-cta">
              All services →
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          ABOUT
          ════════════════════════════════════════════════════════════ */}
      <section className="sec-band">
        <div className="wrap">
          <div className="g-2" style={{ gap: "clamp(40px,5vw,80px)" }}>
            <div>
              <p className="eyebrow">About Metric</p>
              <h2>Precision, speed, and accountability on every turn.</h2>
              <p style={{ marginBottom: 16 }}>
                At Metric Industries, we understand the pivotal moment when a resident
                moves out and the urgency to swiftly transform a space into an inviting
                home for the next tenant. With precision and expertise, we specialize in
                seamlessly coordinating schedules to assess and revitalize apartment units
                in Houston.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {whyTags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <Link href="/about-us" className="btn btn-ghost">View more →</Link>
            </div>
            <div className="img-frame" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643393/2-2_jugrd6.jpg"
                alt="A finished, move-in-ready apartment prepared by Metric Industries"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          SERVICES PREVIEW — first 3 + mask fade
          ════════════════════════════════════════════════════════════ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we do</p>
            <h2>Nine services, <em>one</em> standard.</h2>
            <p className="lead">Same-day estimates, single point of contact, clear paperless billing — on every job.</p>
          </div>

          <div className="svc-fade-wrap">
            <div className="g-3">
              {gridThree.map((svc) => (
                <Link key={svc.slug} href={`/projects/${svc.slug}`} className="glass svc-card">
                  <div className="svc-thumb">
                    <Image src={svc.image.url} alt={svc.image.alt} fill style={{ objectFit: "cover" }} sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                    <span className="svc-title">{svc.title}</span>
                    <span className="svc-num">{svc.number}</span>
                  </div>
                  <p style={{ fontSize: 14, color: v("--ink-700"), margin: 0, flexGrow: 1 }}>{svc.description}</p>
                  <span className="svc-read">Get a quote</span>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/projects" className="btn btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
              View all services →
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          EMOTIONAL BREAK — full-bleed cinematic
          ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 0, position: "relative", minHeight: "62vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643408/18_ggnr6r.jpg"
          alt="Family in freshly prepared apartment"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(46,44,40,0.80) 0%, rgba(46,44,40,0.52) 50%, rgba(46,44,40,0.15) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) var(--gutter)" }}>
          <p className="eyebrow" style={{ color: "rgba(215,200,175,0.85)" }}>The result</p>
          <h2 style={{ color: "var(--cream-50)", maxWidth: 520, marginBottom: 20 }}>
            For the residents<br />who&apos;ll call it <em style={{ color: "var(--sand-300)" }}>home.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(251,248,242,0.75)", maxWidth: 400, margin: 0 }}>
            Every unit we prepare becomes someone&apos;s fresh start. We work behind
            the scenes so the next chapter feels effortless.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          OUR PROCESS — clean 2×2 numbered grid
          ════════════════════════════════════════════════════════════ */}
      <section className="sec-band">
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
                <p style={{ fontSize: 15, color: v("--ink-700"), margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link href="/about-us#our-process" className="btn btn-ghost">See the full process →</Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          REGISTERED WITH — full-width marquee card, below process
          ════════════════════════════════════════════════════════════ */}
      <section>
        <div className="wrap">
          <GlassCard className="r-xl" style={{ padding: "clamp(32px,4vw,52px) clamp(28px,3.5vw,44px)", overflow: "hidden" }}>
            <p className="eyebrow" style={{ textAlign: "center", marginBottom: 32 }}>Registered with</p>
            <Marquee srcs={registeredLogos} copies={6} duration="60s" />
          </GlassCard>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          MAKE READY FEATURE
          ════════════════════════════════════════════════════════════ */}
      <section>
        <div className="wrap">
          <div className="g-2">
            <div>
              <p className="eyebrow">We specialize in</p>
              <h2>Full Turn &amp; Make Ready</h2>
              <p style={{ marginBottom: 16 }}>
                From the moment a resident departs, we&apos;re ready to step in, evaluate
                the needs, and provide comprehensive estimates promptly. With a dedication
                to efficiency and quality, we take pride in exceeding expectations — ensuring
                each property is primed for its next chapter.
              </p>
              <Link href="/projects/make-ready" className="btn btn-ghost">Learn more →</Link>
            </div>
            <div className="img-frame" style={{ aspectRatio: "1/1" }}>
              <Image src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643394/3_wol2qa.jpg" alt="Full turn make-ready process" fill style={{ objectFit: "cover" }} sizes="(max-width:900px) 100vw, 640px" />
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          INTEGRATED WITH — static logos, no card
          ════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 32 }}>Integrated with</p>
          <div style={{ display: "flex", gap: "clamp(40px,6vw,96px)", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            {integratedLogos.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" aria-hidden="true"
                style={{ height: "clamp(28px,3.5vw,48px)", width: "auto", maxWidth: 180, objectFit: "contain", opacity: 0.65, display: "block" }}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          WHY CHOOSE US — dark contrast anchor
          ════════════════════════════════════════════════════════════ */}
      <section className="sec-dark">
        <div className="wrap">
          <div className="g-2">
            <div>
              <p className="eyebrow" style={{ color: v("--clay-500") }}>Why choose us?</p>
              <h2 style={{ color: v("--cream-50") }}>
                Less friction.<br />Fewer invoices.<br />Better turns.
              </h2>
              <p style={{ marginBottom: 24, color: "rgba(251,248,242,0.68)" }}>
                If you&apos;ve been experiencing invoicing challenges, poor quality, or
                simply looking to optimize your turnover process, now is the perfect time
                to consider partnering with Metric Industries.
              </p>
              <Link href="/about-us" className="btn btn-outline-light">Read more →</Link>
            </div>
            <div className="img-frame" style={{ aspectRatio: "1/1" }}>
              <Image
                src="https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778643394/4-2_kjbows.jpg"
                alt="Metric Industries technician"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
          ════════════════════════════════════════════════════════════ */}
      <section>
        <div className="wrap">
          <GlassCard heavy className="r-xl" style={{ padding: "clamp(48px,7vw,88px)", textAlign: "center" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Trusted by Houston</p>
            <h2 style={{ marginBottom: 36 }}>Not convinced yet? Take a closer look.</h2>
            <div style={{ display: "flex", gap: "clamp(24px,4vw,56px)", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginBottom: 44 }}>
              {["/logos/trusted/asset-1.svg", "/logos/trusted/asset-2.svg", "/logos/trusted/asset-5.svg", "/logos/trusted/ke2epm.svg"].map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" className="logo-img" aria-hidden="true" />
              ))}
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Create work order →
            </Link>
          </GlassCard>
        </div>
      </section>

    </>
  );
}
