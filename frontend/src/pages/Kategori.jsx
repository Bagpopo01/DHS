import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products'; // ribuan produk

const Kategori = () => {
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24; // tampilkan 24 produk per halaman ✅

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredProducts = category === "all"
    ? products
    : products.filter(p => p.category === category);

  // Hitung produk untuk halaman saat ini
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        PORTOFOLIO PRODUK
      </h1>

      {/* Filter & Sorting */}
      <div className="flex justify-between mb-6">
        <select className="border p-2 rounded">
          <option>Urutkan terbaru</option>
          <option>Harga termurah</option>
          <option>Rating tertinggi</option>
        </select>
        <select className="border p-2 rounded">
          <option>View: 24</option>
          <option>View: 48</option>
          <option>View: All</option>
        </select>
      </div>

      <div className="flex items-start gap-6">
        {/* Sidebar Kategori */}
        <aside className="w-1/4 p-6 border rounded-lg bg-white shadow">
          <h2 className="font-bold mb-4 text-blue-900">Kategori Produk</h2>
          <ul className="space-y-2">
            <li><button onClick={() => setCategory("all")} className="hover:text-blue-600">Semua</button></li>
            <li><button onClick={() => setCategory("plakat")} className="hover:text-blue-600">Plakat</button></li>
            <li><button onClick={() => setCategory("trophy")} className="hover:text-blue-600">Piala & Trophy</button></li>
            <li><button onClick={() => setCategory("medali")} className="hover:text-blue-600">Medali & Emblem</button></li>
          </ul>
        </aside>

        {/* Konten Produk */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Kategori;