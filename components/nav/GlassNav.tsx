"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about-us" },
  { label: "Our Services", href: "/projects" },
];

export default function GlassNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "14px var(--gutter)",
        pointerEvents: "none",
      }}
    >
      <nav
        className="glass glass-heavy"
        style={{
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "var(--r-pill)",
          maxWidth: 1280,
          margin: "0 auto",
          pointerEvents: "all",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/metric-logo.svg" alt="Metric Industries" style={{ height: 30, width: "auto", display: "block" }} />
        </Link>

        {/* Desktop nav links */}
        <div
          style={{ display: "flex", gap: "4px", fontSize: "14px", fontWeight: 500 }}
          className="hidden-mobile"
          aria-label="Site links"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              style={{
                color: pathname === link.href ? "var(--ink-900)" : "var(--ink-700)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "var(--r-pill)",
                transition: "all .25s ease",
                background: pathname === link.href ? "rgba(255,255,255,0.50)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <a
            href={siteConfig.zoho}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost hidden-mobile"
            aria-label="Existing customer portal"
            style={{ padding: "8px 14px" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </a>
          <Link href="/contact" className="btn btn-primary">
            New customer
          </Link>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--ink-900)",
            }}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="glass glass-heavy"
          style={{
            marginTop: "8px",
            borderRadius: "var(--r-lg)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            maxWidth: 1280,
            margin: "8px auto 0",
            pointerEvents: "all",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--ink-700)",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: "var(--r-md)",
                fontSize: "15px",
                fontWeight: 500,
                transition: "all .2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ borderTop: "1px solid var(--sand-300)", margin: "8px 0" }} />
          <a
            href={siteConfig.zoho}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              color: "var(--ink-700)",
              textDecoration: "none",
              padding: "12px 16px",
              borderRadius: "var(--r-md)",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            Existing customer ↗
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 700px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 699px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
