export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">TokoKita</h1>
      <div className="space-x-4 text-gray-700">
        <a href="#" className="hover:text-blue-500">Produk</a>
        <a href="#" className="hover:text-blue-500">Keranjang</a>
        <a href="#" className="hover:text-blue-500">Kontak</a>
      </div>
    </nav>
  );
}