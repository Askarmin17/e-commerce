import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer yang baru dibuat
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
  title: "ZoeMarket - E-Commerce",
  description: "Solusi Smart Home dan Pakaian Modern terbaik di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col min-h-screen`}
      >
        {/* Navbar akan muncul di semua halaman di bagian paling atas */}
        <Navbar />
        
        {/* Main akan mengambil sisa ruang (flex-grow) agar footer tetap di bawah jika konten sedikit */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer akan muncul di semua halaman di bagian paling bawah */}
        <Footer />
      </body>
    </html>
  );
}