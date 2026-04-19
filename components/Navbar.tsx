"use client"; // Wajib ditambahkan karena kita menggunakan interaksi (tombol klik)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State untuk mengontrol buka/tutup menu mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-900 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">ClothesByAtuu</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Produk</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Tentang</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Kontak</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Mulai Belanja
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Muncul jika isOpen = true) */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in duration-300">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Produk</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Tentang</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Kontak</Link>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Mulai Belanja
              </button>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}