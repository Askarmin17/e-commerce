import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Bagian Kiri: Logo & Branding */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold tracking-tighter flex items-center">
                ZoeMarket
              <span className="ml-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </span>
            </h2>
          </div>

          {/* Bagian Tengah: Navigasi Menu */}
          <div className="flex flex-col space-y-3">
            <Link href="/" className="hover:text-blue-500 transition-colors w-fit border-b border-transparent hover:border-blue-500">Home</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors w-fit border-b border-transparent hover:border-blue-500">Products</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors w-fit border-b border-transparent hover:border-blue-500">Services</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors w-fit border-b border-transparent hover:border-blue-500">Become Partner</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors w-fit border-b border-transparent hover:border-blue-500">Blog</Link>
            <Link href="#" className="hover:text-blue-500 transition-colors w-fit border-b border-transparent hover:border-blue-500">Contact</Link>
          </div>

          {/* Bagian Kanan: Download App */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Download</h3>
            <div className="flex flex-col space-y-4">
              {/* Tombol App Store Sederhana */}
              <button className="flex items-center justify-center bg-black border border-gray-600 rounded-lg px-4 py-2 w-44 hover:bg-gray-800 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" alt="Apple" className="w-6 h-6 invert mr-2" />
                <div className="text-left">
                  <p className="text-[10px] uppercase">Available on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
              
              {/* Tombol Play Store Sederhana */}
              <button className="flex items-center justify-center bg-black border border-gray-600 rounded-lg px-4 py-2 w-44 hover:bg-gray-800 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-full h-8" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            ©2026 ZoeMarket, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}