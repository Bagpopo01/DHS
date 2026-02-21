import React, { useState, useEffect } from "react";
import { Factory, Box, Maximize2, X, Camera } from "lucide-react";

export default function Galeri() {
  const [galleryData, setGalleryData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // simpan index aktif
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/galleries")
      .then(res => res.json())
      .then(data => setGalleryData(data))
      .catch(err => console.error("Error fetch galleries:", err));
  }, []);

  const filteredImages =
    filter === "all"
      ? galleryData
      : galleryData.filter(item => item.type === filter);

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-gray-800 font-sans pb-20">
      {/* HEADER */}
      <div className="relative py-16 text-center border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-2 text-blue-900">
            DHS <span className="text-blue-600">GALLERY</span>
          </h1>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
            Inovasi Produksi & Hasil Karya Terbaik
          </p>
        </div>
      </div>

      {/* FILTER TAB */}
      <div className="container mx-auto px-4 pt-12">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white border border-gray-200 rounded-xl shadow-sm">
            {[
              { id: "all", label: "Semua", icon: <Camera size={14} /> },
              { id: "produksi", label: "Produksi", icon: <Factory size={14} /> },
              { id: "produk", label: "Produk", icon: <Box size={14} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-blue-900 text-white shadow-md"
                    : "text-gray-400 hover:text-blue-900"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID GALERI */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, i) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-white border border-gray-200 cursor-pointer transition-all duration-500 hover:border-blue-500 hover:shadow-xl"
              onClick={() => setCurrentIndex(i)} // simpan index saat klik
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={`http://127.0.0.1:8000/storage/${item.url}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[9px] font-bold text-blue-200 uppercase tracking-widest mb-1">
                  {item.type}
                </span>
                <div className="flex justify-between items-center text-white">
                  <h3 className="text-xs font-bold uppercase truncate pr-4">
                    {item.title}
                  </h3>
                  <Maximize2 size={14} className="shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX dengan navigasi */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-blue-900/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative max-w-5xl w-full flex items-center justify-center">
            <button
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors"
              onClick={() => setCurrentIndex(null)}
            >
              <X size={32} />
            </button>

            {/* Tombol Prev */}
            <button
              className="absolute left-4 text-white hover:text-blue-300 text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(
                  (currentIndex - 1 + filteredImages.length) % filteredImages.length
                );
              }}
            >
              ‹
            </button>

            {/* Gambar aktif */}
            <img
              src={`http://127.0.0.1:8000/storage/${filteredImages[currentIndex].url}`}
              alt={filteredImages[currentIndex].title}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/20"
            />

            {/* Tombol Next */}
            <button
              className="absolute right-4 text-white hover:text-blue-300 text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((currentIndex + 1) % filteredImages.length);
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}