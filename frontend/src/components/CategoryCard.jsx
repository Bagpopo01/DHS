import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    // Navigasi ke halaman katalog sambil membawa parameter kategori
    navigate(`/kategori?filter=${category.slug || category.name.toLowerCase()}`);
  };

  return (
    <motion.div
      onClick={handleCategoryClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 w-32"
    >
      <div className="w-20 h-20 bg-blue-50 rounded-2xl overflow-hidden mb-3">
        <img
  src={`http://127.0.0.1:8000/storage/${category.image.replace(/^public\//, "")}`}
  alt={category.name}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  onError={(e) => (e.target.src = "https://via.placeholder.com")}
 />
      </div>
      <span className="font-bold text-xs text-gray-700 group-hover:text-blue-600 uppercase tracking-tight text-center">
        {category.name}
      </span>
    </motion.div>
  );
}
