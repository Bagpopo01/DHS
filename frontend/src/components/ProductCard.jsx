import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  // 1. Logika Pengambilan Gambar (Tetap aman untuk format Array dari Database)
  const imagePath = Array.isArray(product.images) && product.images.length > 0 
    ? product.images[0] 
    : product.image || product.image_url;

  // 2. URL Backend dengan pembersihan path 'public/'
  const imageUrl = imagePath 
    ? `http://localhost:8000/storage/${imagePath.replace(/^public\//, "")}`
    : "https://via.placeholder.com";

  return (
    <Link
      to={`/produk/${product.id}`}
      className="group bg-white border border-gray-100 rounded-md p-3 hover:border-blue-900 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full"
    >
      {/* Container Gambar (Gaya 3:4 Profesional) */}
      <div className="relative aspect-[3/4] bg-[#f8f8f8] mb-3 flex items-center justify-center overflow-hidden rounded">
        
        {/* Label Kode Produk (DHS Style) */}
        <div className="absolute top-2 left-2 bg-white px-1.5 py-0.5 text-[9px] font-extrabold border border-gray-100 shadow-sm z-10 uppercase text-blue-900">
          {product.sku || `PL ${product.id}`}
        </div>

        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = "https://via.placeholder.com"; }}
        />
      </div>

      <div className="flex flex-col gap-1 text-left flex-grow px-1">
        {/* Branding Logo (Aksen Biru DHS) */}
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-3.5 h-3.5 bg-blue-900 rounded-full flex items-center justify-center text-[7px] text-white font-bold italic shadow-sm">
            1
          </div>
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase">
            1SOUVENIR
          </span>
        </div>

        {/* Nama Produk (Limit 2 baris agar Grid rapi) */}
        <h3 className="text-[11px] font-bold text-gray-800 leading-snug line-clamp-2 uppercase min-h-[32px] group-hover:text-blue-800 transition-colors">
          {product.name}
        </h3>

        {/* Harga (Biru Navy Gelap agar terlihat Premium) */}
        <div className="text-blue-900 font-extrabold text-[13px] mt-2">
          {Number(product.price).toLocaleString("id-ID", { 
            style: "currency", 
            currency: "IDR",
            maximumFractionDigits: 0 
          })}
        </div>

        {/* Footer Card (Info Terjual) */}
        <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-50">
          <span className="text-[9px] text-gray-400 uppercase font-bold tracking-tight">
             TERJUAL {product.sold || 0}+
          </span>
          <span className="text-[9px] text-blue-800 font-bold uppercase tracking-wider group-hover:underline">
            Detail
          </span>
        </div>
      </div>
    </Link>
  );
}
