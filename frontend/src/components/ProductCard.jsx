import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index, favorites, toggleFavorite }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          alt={product.name}
          src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd"
        />
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} ulasan)
          </span>
        </div>

        <div className="flex justify-end">
          <Link to={`/produk/${product.id}`}>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}