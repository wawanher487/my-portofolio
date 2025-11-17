"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 rounded-b-2xl fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Nama */}
        <div className="text-xl font-bold text-blue-700">Wawan Hermawan</div>

        {/* Navigation menu (desktop) */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            Tentang Saya
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            Layanan
          </a>
          <a href="#products" className="hover:text-blue-600 transition">
            Produk
          </a>
          <a href="#portfolio" className="hover:text-blue-600 transition">
            Portofolio
          </a>
        </nav>

        {/* Tombol proyek (desktop) */}
        <a
          href="https://wa.me/6281945085681"
          target="_blank"
          className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Mulai Proyek
        </a>

        {/* Hamburger (mobile) */}
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
            <a href="#about" className="hover:text-blue-600 transition">
              Tentang Saya
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              Layanan
            </a>
            <a href="#products" className="hover:text-blue-600 transition">
              Produk
            </a>
            <a href="#portfolio" className="hover:text-blue-600 transition">
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
