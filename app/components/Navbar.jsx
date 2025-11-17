"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";
  const isServicesPage = pathname === "/services";
  const isProductPage = pathname === "/products";

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 rounded-b-2xl fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="hover:text-blue-600 transition">
          <div className="text-xl font-bold text-blue-700">Wawan Hermawan</div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a
            href="/about"
            className={`
              transition 
              ${isAboutPage ? "text-blue-600 font-bold" : "hover:text-blue-600"}
            `}
          >
            Tentang Saya
          </a>

          <a
            href="/services"
            className={`
              transition 
              ${
                isServicesPage
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-600"
              }
            `}
          >
            Layanan
          </a>

          <a
            href="/products"
            className={`
              transition 
              ${
                isProductPage
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-600"
              }
            `}
          >
            Produk
          </a>

          <a
            href="https://fortopolio-wawan2402.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            Portofolio
          </a>
        </nav>

        {/* Tombol Proyek Desktop */}
        <a
          href="https://wa.me/6281945085681"
          target="_blank"
          className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Mulai Proyek
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white px-6 py-4 rounded-lg shadow-lg">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a
              href="/about"
              className={`
                transition 
                ${
                  isAboutPage
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                }
              `}
            >
              Tentang Saya
            </a>

            <a href="#services" className="hover:text-blue-600 transition">
              Layanan
            </a>

            <a href="#products" className="hover:text-blue-600 transition">
              Produk
            </a>

            <a
              href="https://fortopolio-wawan2402.vercel.app/"
              className="hover:text-blue-600 transition"
              target="_blank"
            >
              Portofolio
            </a>

            <a
              href="https://wa.me/6281945085681"
              target="_blank"
              className="bg-orange-500 text-center text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Mulai Proyek
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
