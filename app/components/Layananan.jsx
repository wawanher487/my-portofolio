"use client";

import {
  Laptop,
  Briefcase,
  ShoppingCart,
  CheckCircle,
  Code,
  GraduationCap,
  Shield,
} from "lucide-react";

const packagesData = [
  {
    name: "Paket Starter / Personal",
    subtitle: "Cocok untuk Portofolio & Website Personal",
    features: ["Desain Custom", "Mobile Responsive", "Halaman Dasar"],
    price: "Rp 399 Ribu",
    ctaText: "Pilih Paket Ini",
    isRecommended: false,
    icon: <Laptop size={40} className="text-blue-500" />,
  },
  {
    name: "Paket Profesional / Bisnis",
    subtitle: "Ideal untuk UMKM & Bisnis Layanan",
    features: [
      "Semua fitur Starter",
      "5 Halaman & Integrasi CRM",
      "Optimasi SEO Dasar",
    ],
    price: "Rp 899 Ribu",
    ctaText: "Pesan Sekarang!",
    isRecommended: true,
    icon: <Briefcase size={40} className="text-blue-600" />,
  },
  {
    name: "Paket Custom / E-Commerce",
    subtitle: "Untuk Toko Online & Sistem Khusus",
    features: ["Full Kustomisasi", "Integrasi Pembayaran", "SEO Lanjutan"],
    price: "Hubungi Saya",
    ctaText: "Konsultasi Gratis",
    isRecommended: false,
    icon: <ShoppingCart size={40} className="text-blue-500" />,
  },
];

const bonusData = [
  {
    text: "Source Code Lengkap",
    icon: <Code size={28} className="text-blue-700" />,
  },
  {
    text: "Training Penggunaan",
    icon: <GraduationCap size={28} className="text-blue-700" />,
  },
  {
    text: "Garansi & Support",
    icon: <Shield size={28} className="text-blue-700" />,
  },
];

export default function Layanan() {
  return (
    <>
      <section className="pt-32 pb-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-12">
            Pilih Paket Website Sesuai Kebutuhan Anda
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Saya menyediakan layanan pembuatan website profesional untuk
            personal, bisnis, hingga toko online. Semua paket termasuk desain
            modern, mobile responsive, dan siap tampil di Google.
          </p>

          {/* PACKAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {packagesData.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border
                ${
                  pkg.isRecommended
                    ? "border-blue-500 shadow-blue-100"
                    : "border-gray-200"
                }
              `}
              >
                {pkg.isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs tracking-wide px-4 py-1 rounded-full shadow-md">
                    REKOMENDASI
                  </div>
                )}

                <div className="text-center mb-7">
                  <div className="mx-auto mb-4 flex justify-center">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{pkg.subtitle}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle size={18} className="text-blue-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-900 mb-6">
                    {pkg.price}
                  </div>

                  <a
                    href="https://wa.me/6281945085681"
                    target="_blank"
                    className={`block w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300
                    ${
                      pkg.isRecommended
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                    }
                  `}
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* BONUS SECTION */}
          <div className="border-t pt-14">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">
              Apa saja yang akan Anda dapatkan?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
              {bonusData.map((bonus, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    {bonus.icon}
                  </div>
                  <p className="text-gray-800 text-lg font-medium">
                    {bonus.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
