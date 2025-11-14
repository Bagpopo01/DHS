import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Heart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const galleryImages = [
    product.image,
    'https://source.unsplash.com/random/300x200?medal',
    'https://source.unsplash.com/random/300x200?karate',
    'https://source.unsplash.com/random/300x200?event',
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button onClick={() => history.back()} className="text-blue-600 mb-6 hover:underline">
        ← Kembali ke Beranda
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Gambar Utama */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        {/* Keterangan Produk */}
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <p>⭐ {product.rating} ({product.reviews} ulasan)</p>
            <p>Ukuran: diameter 6.5 cm, tebal 1 mm, tali 90 x 3 cm</p>
            <p>Bahan: logam, tali</p>
            <p>Teknik: kuningan etsa pasir krom emas, tali printing bolak balik</p>
            <p>Kategori: {product.category}</p>
            <p>SKU: MED338</p>
          </div>

          <p className="text-2xl font-bold text-blue-700 mb-6">
            Rp {product.price.toLocaleString('id-ID')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Tambah ke Keranjang
            </button>
            <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded hover:bg-pink-200 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Tambah Favorit
            </button>
            <a
              href="https://wa.me/6285158887675"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              PESAN SEKARANG
            </a>
          </div>
        </div>
      </div>

      {/* Galeri Foto Tambahan */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Galeri Produk</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Galeri ${index + 1}`}
              className="w-48 h-32 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
