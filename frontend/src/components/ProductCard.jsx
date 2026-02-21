import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const imagePath = Array.isArray(product.images) && product.images.length > 0 
    ? product.images[0] 
    : product.image || product.image_url;

  const imageUrl = imagePath 
    ? `http://localhost:8000/storage/${imagePath.replace(/^public\//, "")}`
    : "https://via.placeholder.com";

  return (
    <Link
      to={`/produk/${product.id}`}
      /* KUNCI: Menambahkan max-w-[220px] dan mx-auto agar kartu tidak melebar raksasa */
      className="group bg-white border border-gray-100 rounded-lg p-2 hover:border-blue-900 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full max-w-[210px] mx-auto w-full"
    >
      {/* Container Gambar: Dibuat Square 1:1 agar lebih padat */}
      <div className="relative aspect-square bg-[#f8f8f8] mb-2 flex items-center justify-center overflow-hidden rounded-sm">
        
        {/* Label Kode Produk */}
        <div className="absolute top-1.5 left-1.5 bg-white px-1 py-0.5 text-[7px] font-black border border-gray-50 shadow-sm z-10 uppercase text-blue-900">
          {product.sku || `PL ${product.id}`}
        </div>

        <img
          src={imageUrl}
          alt={product.name}
          /* p-3 agar gambar produk tidak 'menabrak' pinggiran kotak, jadi terlihat mewah */
          className="w-full h-full object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = "https://via.placeholder.com"; }}
        />
      </div>

      <div className="flex flex-col gap-0.5 text-left flex-grow px-0.5">
        {/* Branding */}
        <span className="text-[7px] font-bold text-gray-400 tracking-[0.1em] uppercase">
          DIAMETER SOUVENIR
        </span>

        {/* Nama Produk: Ukuran font disesuaikan agar proporsional */}
        <h3 className="text-[10px] font-bold text-gray-800 leading-tight line-clamp-2 uppercase min-h-[28px] group-hover:text-blue-800 transition-colors">
          {product.name}
        </h3>

        {/* Harga */}
        <div className="text-blue-900 font-black text-[11px] mt-1">
          {Number(product.price).toLocaleString("id-ID", { 
            style: "currency", 
            currency: "IDR",
            maximumFractionDigits: 0 
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2 pt-1 border-t border-gray-50">
          <span className="text-[7px] text-gray-300 font-medium">Tersedia</span>
          <span className="text-[8px] text-blue-800 font-black uppercase tracking-tighter group-hover:underline">
            DETAIL
          </span>
        </div>
      </div>
    </Link>
  );
}
