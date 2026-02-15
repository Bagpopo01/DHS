import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Produk tidak ditemukan</h2>
        <button
          onClick={() => navigate('/kategori')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kembali ke Kategori
        </button>
      </div>
    );
  }

  const galleryImages = [
    product.image ?? 'https://source.unsplash.com/random/300x200?medal',
    'https://source.unsplash.com/random/300x200?trophy',
    'https://source.unsplash.com/random/300x200?event',
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-6 hover:underline">
        ← Kembali ke Beranda
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Gambar Utama */}
        <img
          src={product.image ?? 'https://via.placeholder.com/300'}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        {/* Keterangan Produk */}
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description ?? 'Deskripsi belum tersedia'}</p>

          <p className="text-2xl font-bold text-blue-700 mb-6">
            Rp {parseFloat(product.price).toLocaleString('id-ID')}
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