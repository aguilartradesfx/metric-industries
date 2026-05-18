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
    default: "Metric Industries — Property Turnover Services",
    template: "%s | Metric Industries",
  },
  description:
    "The trusted partner for turning apartment units around — fast, clean, and ready for the next tenant. Painting, resurfacing, make-ready, maid service, carpet cleaning, A/C duct, and water extraction.",
  metadataBase: new URL("https://metric.industries"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Metric Industries",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metric Industries — Property Turnover Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
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
