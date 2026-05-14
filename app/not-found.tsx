import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "clamp(40px,6vw,80px)", marginBottom: 16 }}>Page not found.</h1>
        <p style={{ fontSize: 17, color: "var(--ink-700)", marginBottom: 32 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to home →</Link>
      </div>
    </section>
  );
}
