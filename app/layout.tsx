import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GlassNav from "@/components/nav/GlassNav";
import Footer from "@/components/footer/Footer";
import FloatingSupport from "@/components/ui/FloatingSupport";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Metric Industries — Property Turnover Services | Houston, TX",
    template: "%s | Metric Industries",
  },
  description:
    "Houston's go-to partner for turning apartment units around — fast, clean, and ready for the next tenant. Painting, resurfacing, make-ready, maid service, carpet cleaning, A/C duct, and water extraction.",
  metadataBase: new URL("https://metric.industries"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Metric Industries",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakarta.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <GlassNav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <FloatingSupport />
      </body>
    </html>
  );
}
