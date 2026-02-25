import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  // 1. Definisikan placeholder yang lebih menarik (bisa custom warna/teks)
  const placeholderUrl = `https://placehold.co{category.name.replace(/\s+/g, '+')}`;

  const handleCategoryClick = () => {
    navigate(`/kategori?filter=${category.slug || category.name.toLowerCase()}`);
  };

  return (
    <motion.div
      onClick={handleCategoryClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 w-32"
    >
      <div className="w-20 h-20 bg-blue-50 rounded-2xl overflow-hidden mb-3 flex items-center justify-center">
        <img
          // Pastikan VITE_API_URL terdefinisi, jika tidak gunakan fallback string kosong
          src={`${import.meta.env.VITE_API_URL || ""}/storage/${category.image?.replace(/^public\//, "")}`}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null; // Mencegah loop jika placeholderUrl juga error
            e.target.src = placeholderUrl;
          }}
        />
      </div>
      <span className="font-bold text-[10px] text-gray-700 group-hover:text-blue-600 uppercase tracking-tight text-center line-clamp-2 px-1">
        {category.name}
      </span>
    </motion.div>
  );
}
