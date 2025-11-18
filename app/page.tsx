import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export const metadata = {
  title: "Jasa Pembuatan Website Profesional | Wawan Hermawan",
  description:
    "Layanan pembuatan website untuk UMKM, bisnis, perusahaan, portofolio, dan toko online. Modern, cepat, aman, dan SEO-friendly.",
  openGraph: {
    title: "Jasa Pembuatan Website Profesional",
    description:
      "Solusi website modern untuk bisnis, UMKM, dan personal. Desain modern, responsif, dan SEO siap ranking.",
    url: "https://wawanhermawan.dev",
    type: "website",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://wawanhermawan.dev",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jasa Pembuatan Website — Wawan Hermawan",
    description:
      "Layanan pembuatan website profesional untuk UMKM, bisnis, portofolio, dan perusahaan. Cepat, modern, dan SEO-friendly.",
    url: "https://wawanhermawan.dev",
    logo: "https://wawanhermawan.dev/logo.png",
    image: "https://wawanhermawan.dev/og-image.jpg",
    areaServed: "Indonesia",
    priceRange: "Rp400.000 - Rp5.000.000",
    sameAs: [
      "https://github.com/wawanher487",
      "https://instagram.com/wawanher18",
      "https://wa.me/6281945085681",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281945085681",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
