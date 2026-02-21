import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import CategoryCard from './CategoryCard';
import { ChevronRight } from 'lucide-react'; // Opsional untuk pemanis

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Gagal fetch kategori:", err));
  }, []);

  // Logika Auto Scroll yang diperhalus
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3500); // Durasi agak diperlambat agar user bisa melihat

    return () => clearInterval(interval);
  }, [categories]);

  return (
    <section id="categories" className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">Koleksi Kami</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Cari Berdasarkan <span className="text-blue-600">Kategori</span>
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center text-blue-600 font-semibold text-sm mt-4 md:mt-0"
          >
            Lihat Semua <ChevronRight size={18} />
          </motion.button>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 py-6 items-center scrollbar-hide no-scrollbar snap-x touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 snap-center"
                >
                  <CategoryCard category={category} />
                </motion.div>
              ))
            ) : (
              // Skeleton loading sederhana jika data belum muncul
              [1,2,3,4,5,6].map((n) => (
                <div key={n} className="w-32 h-40 bg-gray-200 animate-pulse rounded-2xl flex-shrink-0"></div>
              ))
            )}
          </div>
          
          {/* Efek Gradasi di Pinggir agar terlihat 'Fade Out' */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
