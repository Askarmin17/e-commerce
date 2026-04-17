import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar"; // Mengambil komponen Navbar
import "./globals.css";

// Pengaturan font agar tampilan teks lebih modern
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata untuk judul web dan deskripsi di pencarian Google
export const metadata: Metadata = {
  title: "TokoKita - E-Commerce",
  description: "Selamat datang di toko online terbaik kami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* Navbar akan muncul di semua halaman */}
        <Navbar />
        
        {/* Children adalah isi dari file page.tsx masing-masing halaman */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}