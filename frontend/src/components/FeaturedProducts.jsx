import ProductCard from './ProductCard';

export default function FeaturedProducts({
  filteredProducts,
  favorites,
  toggleFavorite,
  formatPrice,
}) {
  return (
    <section id="products" className="py-20 bg-white">
      {/* max-w-7xl menjaga konten tidak meluber ke pinggir monitor lebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Opsional tapi bagus untuk estetika) */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Pilihan Terbaik</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Produk Unggulan</h2>
          <div className="w-20 h-1.5 bg-blue-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* PERBAIKAN UTAMA: Grid Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 justify-items-center">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              formatPrice={formatPrice}
            />
          ))}
        </div>

        {/* Pesan jika produk kosong */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">
            Belum ada produk untuk kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
