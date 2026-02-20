import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const images = Array.isArray(product.images) ? product.images : [product.images];

  return (
    <Link
      to={`/produk/${product.id}`}
      className="flex flex-col items-center justify-center p-1 border rounded-md hover:shadow-sm transition cursor-pointer text-center w-24 md:w-28 lg:w-32"
    >
      {/* Gambar produk */}
      <div className="w-20 aspect-square rounded-md overflow-hidden mb-1 border">
        <img
          src={`http://127.0.0.1:8000/storage/${images[0]}`}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/assets/no-image.png";
          }}
        />
      </div>

      {/* Nama produk */}
      <span className="font-medium text-xs truncate">{product.name}</span>

      {/* Harga */}
      <div className="text-red-600 font-bold text-xs mt-1">
        {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </div>

      {/* Info terjual */}
      <div className="text-[10px] text-gray-500">{product.sold}+ terjual</div>
    </Link>
  );
}