import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jasa Pembuatan Website Profesional | Wawan Hermawan",
    template: "%s | Jasa Pembuatan Website",
  },
  description:
    "Layanan pembuatan website profesional untuk UMKM, bisnis, toko online, portofolio, dan perusahaan. Cepat, modern, responsif, dan SEO-friendly. Dikembangkan oleh Wawan Hermawan.",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin website",
    "jasa website murah",
    "buat website profesional",
    "website UMKM",
    "website perusahaan",
    "jasa web developer indonesia",
    "web developer freelance",
    "harga pembuatan website",
  ],
  authors: [{ name: "Wawan Hermawan" }],
  creator: "Wawan Hermawan",
  metadataBase: new URL("https://wawanhermawan.dev"),
  openGraph: {
    title: "Jasa Pembuatan Website Profesional | Wawan Hermawan",
    description:
      "Layanan pembuatan website profesional, cepat, responsif, dan SEO-friendly. Cocok untuk UMKM, perusahaan, portofolio, dan toko online.",
    url: "https://wawanhermawan.dev",
    siteName: "Jasa Pembuatan Website",
    images: [
      {
        url: "https://wawanhermawan.dev/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://wawanhermawan.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
