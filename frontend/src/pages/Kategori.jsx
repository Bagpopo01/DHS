import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const PortfolioProduk = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  // Tambahkan state ini agar view selector berfungsi
  const [productsPerPage, setProductsPerPage] = useState(16); 

 useEffect(() => {
  fetch("http://localhost:8000/api/categories")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    })
    .then(setCategories)
    .catch(err => console.error("Error fetch categories:", err));

  fetch("http://localhost:8000/api/products")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    })
    .then(setProducts)
    .catch(err => console.error("Error fetch products:", err));
}, []);

const filteredProducts =
  category === "all"
    ? products
    : products.filter((p) => {
        const categoryName =
          typeof p.category === "object" && p.category?.name
            ? p.category.name
            : p.category;
        return categoryName === category;
      });

  // Logika Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Helper untuk ganti kategori & reset page ke 1
  const handleCategoryChange = (catName) => {
    setCategory(catName);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <div className="mb-8 text-center">
        <nav className="text-sm text-gray-400 mb-2">
          Beranda <span className="mx-2">&gt;</span> 
          <span className="text-blue-600">Portofolio Produk</span>
        </nav>
        <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight">
          PORTOFOLIO PRODUK
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Kategori - Sticky agar nyaman saat scroll */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-4 h-fit">
          <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
            <h2 className="font-bold mb-5 text-gray-800 text-lg border-b pb-2">
              Kategori Produk
            </h2>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                    category === "all"
                      ? "bg-blue-600 text-white shadow-md font-medium"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  Semua Produk
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl transition-all flex justify-between items-center ${
                      category === cat.name
                        ? "bg-blue-600 text-white shadow-md font-medium"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs ${category === cat.name ? "text-blue-100" : "text-gray-400"}`}>
                      {cat.count || 0}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Konten Utama */}
        <main className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-wrap justify-between items-center mb-6 gap-4 bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Urutkan:</span>
              <select className="border-none bg-transparent font-medium focus:ring-0 text-gray-700 cursor-pointer">
                <option>Terbaru</option>
                <option>Harga Terendah</option>
                <option>Harga Tertinggi</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Tampilkan:</span>
              <select
                className="border-none bg-transparent font-medium focus:ring-0 text-gray-700 cursor-pointer"
                onChange={(e) => {
                  setProductsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={16}>16 per hal</option>
                <option value={32}>32 per hal</option>
                <option value={filteredProducts.length}>Semua</option>
              </select>
            </div>
          </div>

          {/* Grid Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl">
                <p className="text-gray-400 italic">Tidak ada produk di kategori "{category}"</p>
              </div>
            )}
          </div>

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                Prev
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-blue-50 border"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PortfolioProduk;
