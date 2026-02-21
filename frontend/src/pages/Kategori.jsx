import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "../components/ProductCard";

const Kategori = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [viewMode, setViewMode] = useState("grid"); // Grid / List
  const [sortOption, setSortOption] = useState("Terbaru"); // Sorting

  // Ambil data kategori & produk dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resCat, resProd] = await Promise.all([
          fetch("http://localhost:8000/api/categories"),
          fetch("http://localhost:8000/api/products")
        ]);
        const dataCat = await resCat.json();
        const dataProd = await resProd.json();
        setCategories(dataCat);
        setProducts(dataProd);
      } catch (err) {
        console.error("Gagal load data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter produk berdasarkan category_id
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter(p => p.category_id === selectedCategory);
  }, [selectedCategory, products]);

  // Sorting produk
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sortOption === "Terbaru") {
      sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortOption === "Harga Termurah") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Harga Termahal") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [filteredProducts, sortOption]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading) return <div className="text-center py-20 text-blue-900 italic">Memuat Katalog...</div>;

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Toolbar */}
        <div className="flex flex-wrap justify-between items-center bg-white border border-gray-100 p-3 px-6 rounded shadow-sm mb-8">
          <div className="flex items-center gap-6">
            {/* Switch Grid/List */}
            <div className="flex items-center gap-3 border-r pr-6 border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Tampilan:
              <button
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "text-blue-800 border-b-2 border-blue-800 pb-0.5" : "text-gray-300 hover:text-blue-400"}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "text-blue-800 border-b-2 border-blue-800 pb-0.5" : "text-gray-300 hover:text-blue-400"}
              >
                List
              </button>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Urutkan:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="text-[11px] bg-transparent border-none focus:ring-0 font-bold text-blue-900 cursor-pointer uppercase"
              >
                <option>Terbaru</option>
                <option>Harga Termurah</option>
                <option>Harga Termahal</option>
              </select>
            </div>
          </div>

          {/* View per page */}
          <div className="text-[10px] font-extrabold text-gray-400 tracking-widest">
            VIEW:
            {[16, 32, 'ALL'].map(v => (
              <button
                key={v}
                onClick={() => { setProductsPerPage(v === 'ALL' ? products.length : v); setCurrentPage(1); }}
                className={`ml-3 transition-all ${productsPerPage === v || (v === 'ALL' && productsPerPage === products.length) ? 'text-blue-800 scale-110' : 'hover:text-blue-500'}`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Kategori */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h2 className="font-bold text-[13px] mb-5 uppercase tracking-[0.2em] text-blue-900 border-b pb-2">Kategori Produk</h2>
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <ul className="text-[12px] divide-y divide-gray-50">
                <li
                  className="p-3.5 hover:bg-blue-50/30 cursor-pointer transition-colors"
                  onClick={() => { setSelectedCategory("all"); setCurrentPage(1); }}
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategory === "all"}
                      readOnly
                      className="w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800 cursor-pointer"
                    />
                    <span className={selectedCategory === "all" ? "font-bold text-blue-900" : "text-gray-500"}>
                      Semua Produk
                    </span>
                  </label>
                </li>
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="p-3.5 hover:bg-blue-50/30 cursor-pointer transition-colors"
                    onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); }}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.id}
                        readOnly
                        className="w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800 cursor-pointer"
                      />
                      <span className={selectedCategory === cat.id ? "font-bold text-blue-800" : "text-gray-500"}>
                        {cat.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Konten Produk */}
          <main className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {currentProducts.map(product => (
                  <div key={product.id} className="bg-white border rounded p-4 shadow-sm flex gap-4">
                   <img
  src={product.images && product.images.length > 0 
    ? `http://localhost:8000/storage/${product.images[0]}` 
    : "/fallback.jpg"}
  alt={product.name}
  className="w-24 h-24 object-cover rounded"
/>
                    <div>
                      <h3 className="font-bold text-blue-900">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                      <p className="text-gray-800 font-semibold mt-1">Rp {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
{/* Pagination */}
{totalPages > 1 && (
  <div className="flex justify-center mt-16 gap-3">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => { setCurrentPage(i + 1); window.scrollTo(0, 0); }}
        className={`w-10 h-10 border text-[11px] font-bold transition-all rounded shadow-sm ${
          currentPage === i + 1
            ? "bg-blue-900 border-blue-900 text-white"
            : "bg-white border-gray-200 text-gray-400 hover:border-blue-800 hover:text-blue-800"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
)}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Kategori;