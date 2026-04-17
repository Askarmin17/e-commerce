// Kita buat data produk baju dalam bentuk Array agar mudah dikelola
const products = [
  {
    id: 1,
    name: "Kaos Polos Oversize - Hitam",
    price: "Rp 125.000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
    category: "Atasan"
  },
  {
    id: 2,
    name: "Kemeja Flanel Kotak-kotak",
    price: "Rp 210.000",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=500&auto=format&fit=crop",
    category: "Kemeja"
  },
  {
    id: 3,
    name: "Jaket Denim Klasik",
    price: "Rp 450.000",
    image: "https://images.unsplash.com/photo-1576995883899-f8239903c619?q=80&w=500&auto=format&fit=crop",
    category: "Outerwear"
  },
  {
    id: 4,
    name: "Hoodie Minimalist Grey",
    price: "Rp 320.000",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop",
    category: "Hoodie"
  }
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      {/* Hero Section Singkat */}
      <section className="bg-blue-600 rounded-2xl p-10 text-white mb-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Koleksi Baju Terbaru 2024</h2>
        <p className="text-lg opacity-90">Tampil stylish dengan koleksi pilihan terbaik kami.</p>
      </section>

      {/* Judul Bagian Produk */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Produk Unggulan</h3>
        <button className="text-blue-600 font-medium hover:underline">Lihat Semua</button>
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Foto Produk */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold rounded shadow">
                {product.category}
              </span>
            </div>

            {/* Detail Produk */}
            <div className="p-5">
              <h4 className="text-gray-800 font-semibold text-lg mb-1 truncate">
                {product.name}
              </h4>
              <p className="text-blue-600 font-bold text-xl mb-4">
                {product.price}
              </p>
              <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}