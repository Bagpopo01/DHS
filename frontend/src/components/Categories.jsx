import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
   <section id="categories" className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-2">
        Pilih Kategori Sesuai Kebutuhan Anda
      </h2>
    </motion.div>

    {/* Scroll horizontal ditengah */}
    <div className="flex justify-center">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 items-center scrollbar-hide mx-auto"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="flex-shrink-0"
          >
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}