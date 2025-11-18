import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layanan from "../components/Layananan";

export const metadata = {
  title: "Jasa Pembuatan Website Profesional | Paket Murah & Berkualitas",
  description:
    "Pilih paket pembuatan website mulai dari personal, bisnis, hingga e-commerce. Harga terjangkau, desain custom, SEO friendly, support & garansi.",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin website",
    "website murah",
    "website UMKM",
    "buat toko online",
    "jasa web developer",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Profesional",
    description:
      "Paket website untuk personal, UMKM, dan e-commerce. Desain modern, SEO, dan support penuh.",
    url: "https://wawanhermawan.dev/layanan",
    type: "website",
  },
};

export default function LayanananPage() {
  return (
    <>
      <Navbar />
      <Layanan />
      <Footer />
    </>
  );
}
