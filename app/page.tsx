import React from 'react';

export default function Home() {
  const products = [
    { id: 1, name: "Tech-Fiber Oversize Tee", price: "Rp 189.000", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop" },
    { id: 2, name: "Urban Explorer Jacket", price: "Rp 549.000", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop" },
    { id: 3, name: "Minimalist Chino Pants", price: "Rp 329.000", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500&auto=format&fit=crop" },
    { id: 4, name: "Classic Oxford Shirt", price: "Rp 299.000", img: "https://images.unsplash.com/photo-1596755094514-f87034a264c6?q=80&w=500&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Hero Section */}
      <header className="relative bg-gray-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Definisikan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Gayamu</span> dengan Presisi.
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-lg">
              Koleksi eksklusif pakaian pria yang menggabungkan kenyamanan material premium dengan desain futuristik.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
                Belanja Sekarang
              </button>
              <button className="px-8 py-4 border border-gray-700 text-white rounded-xl font-bold hover:bg-gray-800 transition">
                Lihat Katalog
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
             <div className="w-full h-[450px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Style" 
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
          </div>
        </div>
      </header>

      {/* 2. Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Produk Terjual</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Rating Pelanggan</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">24h</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Pengiriman Kilat</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Original Brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Koleksi Terlaris</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0">Produk yang paling banyak dicari minggu ini.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm border border-gray-100">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md py-3 rounded-xl font-bold text-gray-900 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  + Add to Cart
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="text-blue-600 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}