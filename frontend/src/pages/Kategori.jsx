import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { LayoutGrid, List, ChevronLeft, ChevronRight, Search } from "lucide-react";

const Kategori = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("Terbaru");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data kategori & produk
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [resCat, resProd] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/categories"),
          fetch("http://127.0.0.1:8000/api/products"),
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

  // Sinkronisasi filter dari URL
  useEffect(() => {
    const filterFromUrl = searchParams.get("filter");
    if (filterFromUrl && categories.length > 0) {
      const matchedCategory = categories.find(
        (c) => c.name.toLowerCase() === filterFromUrl.toLowerCase()
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory.id);
        setCurrentPage(1);
      }
    } else if (!filterFromUrl) {
      setSelectedCategory("all");
    }
  }, [searchParams, categories]);

  // Proses produk (filter, search, sort)
  const processedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category_id === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "Harga Termurah") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Harga Termahal") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    return result;
  }, [selectedCategory, products, sortOption, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(processedProducts.length / productsPerPage);
  const currentProducts = processedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (loading)
    return (
      <div className="text-center py-20 text-blue-900 font-black italic animate-pulse tracking-widest uppercase">
        Scanning Catalog...
      </div>
    );

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-800 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* TOOLBAR */}
        {/* ...toolbar code seperti yang sudah kamu buat... */}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h2 className="font-black text-[12px] mb-6 uppercase tracking-[0.3em] text-blue-900 border-l-4 border-blue-900 pl-4">
              Katalog
            </h2>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <ul className="text-[12px] divide-y divide-gray-50">
                <li
                  className={`p-4 cursor-pointer transition-all ${
                    selectedCategory === "all" ? "bg-blue-50/30" : "hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    setSelectedCategory("all");
                    setCurrentPage(1);
                  }}
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategory === "all"}
                      readOnly
                      className="w-4 h-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                    />
                    <span
                      className={
                        selectedCategory === "all"
                          ? "font-bold text-blue-900"
                          : "text-gray-500 font-medium"
                      }
                    >
                      Semua Produk
                    </span>
                  </label>
                </li>
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className={`p-4 cursor-pointer transition-all ${
                      selectedCategory === cat.id ? "bg-blue-50/30" : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentPage(1);
                    }}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.id}
                        readOnly
                        className="w-4 h-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                      />
                      <span
                        className={
                          selectedCategory === cat.id
                            ? "font-bold text-blue-900"
                            : "text-gray-500 font-medium"
                        }
                      >
                        {cat.name}{" "}
                        <span className="text-[10px] text-gray-300 font-normal ml-1">
                          ({cat.products_count || 0})
                        </span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            {processedProducts.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {/* ...list view code seperti yang sudah kamu buat... */}
                </div>
              )
            ) : (
              <div className="text-center py-32 bg-white border-2 border-dashed border-gray-100 rounded-3xl">
                <p className="text-gray-300 font-black uppercase tracking-[0.5em] text-xs italic">
                  Produk Tidak Ditemukan
                </p>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-20 gap-3">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((p) => p - 1);
                    window.scrollTo(0, 0);
                  }}
                  className="p-2.5 border rounded-lg hover:bg-blue-50 disabled:opacity-20 text-blue-900 transition-all shadow-sm bg-white"
                >
                  <ChevronLeft size={20} />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo(0, 0);
                    }}
                    className={`w-11 h-11 border text-[11px] font-black rounded-lg transition-all shadow-sm ${
                      currentPage === i + 1
                        ? "bg-blue-900 border-blue-900 text-white shadow-blue-900/20"
                        : "bg-white text-gray-400 hover:border-blue-900 hover:text-blue-900"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((p) => p + 1);
                    window.scrollTo(0, 0);
                  }}
                  className="p-2.5 border rounded-lg hover:bg-blue-50 disabled:opacity-20 text-blue-900 transition-all shadow-sm bg-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Kategori;