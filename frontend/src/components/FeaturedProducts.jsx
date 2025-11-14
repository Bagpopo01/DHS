import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function FeaturedProducts({
  filteredProducts,
  favorites,
  toggleFavorite,
  addToCart,
  formatPrice,
}) {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Produk Unggulan</h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Pilihan terbaik souvenir berkualitas tinggi dengan harga terjangkau
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                index={index}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
                formatPrice={formatPrice}
              />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-xl text-gray-600">Tidak ada produk yang ditemukan.</p>
            <p className="text-gray-500 mt-2">Coba ubah kata kunci pencarian atau filter kategori.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}