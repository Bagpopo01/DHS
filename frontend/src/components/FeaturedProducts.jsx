import ProductCard from './ProductCard';

export default function FeaturedProducts({
  filteredProducts,
  favorites,
  toggleFavorite,
  formatPrice,
}) {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}