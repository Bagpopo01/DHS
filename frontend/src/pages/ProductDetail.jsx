import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heart, MessageCircle, CheckCircle2, ShieldCheck, FileText, ChevronLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Produk tidak ditemukan");
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20 text-blue-900 animate-pulse font-bold">Memuat Detail Produk...</div>;

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Produk tidak ditemukan</h2>
        <button 
          onClick={() => navigate('/kategori')} 
          className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all font-bold text-xs uppercase tracking-widest"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  const images = Array.isArray(product.images) ? product.images : [];
  const mainImage = images.length > 0 
    ? `http://localhost:8000/storage/${images[selectedImage]}` 
    : 'https://via.placeholder.com';

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* NAVIGASI & TOMBOL KEMBALI */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <nav className="text-[10px] uppercase tracking-widest text-gray-400 flex gap-2 items-center">
            <Link to="/" className="hover:text-blue-900 transition-colors">Beranda</Link>
            <span>&gt;</span>
            <Link to="/kategori" className="hover:text-blue-900 transition-colors">Katalog</Link>
            <span>&gt;</span>
            <span className="text-blue-900 font-bold">{product.name}</span>
          </nav>

          <button 
            onClick={() => navigate('/kategori')} 
            className="flex items-center gap-1 text-[10px] font-bold text-gray-400 hover:text-blue-900 uppercase tracking-widest transition-all group"
          >
            <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
            Kembali ke Kategori
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* KOLOM 1: GALERI (5/12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden aspect-[4/5] flex items-center justify-center shadow-sm p-4">
              <img src={mainImage} alt={product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105" />
            </div>
            
            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded border-2 overflow-hidden bg-white transition-all ${selectedImage === idx ? 'border-blue-900 shadow-md' : 'border-gray-100 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={`http://localhost:8000/storage/${img}`} className="w-full h-full object-cover" alt={`thumb-${idx}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* KOLOM 2: INFO PRODUK (4/12) */}
          <div className="lg:col-span-4 space-y-6">
            <h1 className="text-2xl font-extrabold text-gray-900 uppercase leading-tight tracking-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-xs font-bold text-blue-900">4.8</span>
              <button className="text-[10px] text-gray-400 font-bold hover:text-blue-900 uppercase underline ml-2">Lihat Ulasan Google</button>
            </div>

            {/* TABEL SPESIFIKASI */}
            <div className="border-y border-gray-100 py-6 space-y-4 text-xs">
              <div className="grid grid-cols-3"><span className="font-bold text-gray-400 uppercase tracking-widest">Ukuran</span> <span className="col-span-2 text-gray-700">{product.size || '-'}</span></div>
              <div className="grid grid-cols-3"><span className="font-bold text-gray-400 uppercase tracking-widest">Bahan</span> <span className="col-span-2 text-gray-700">{product.material || '-'}</span></div>
              <div className="grid grid-cols-3"><span className="font-bold text-gray-400 uppercase tracking-widest">Teknik</span> <span className="col-span-2 text-gray-700">{product.technique || '-'}</span></div>
              <div className="grid grid-cols-3"><span className="font-bold text-gray-400 uppercase tracking-widest">Box</span> <span className="col-span-2 text-gray-700">{product.box || '-'}</span></div>
            </div>

            <div className="text-[11px] font-bold space-y-2">
               <div className="flex"><span className="w-24 text-gray-400 uppercase tracking-widest">SKU</span> <span className="text-blue-900">{product.sku || 'N/A'}</span></div>
               <div className="flex"><span className="w-24 text-gray-400 uppercase tracking-widest">KATEGORI</span> <span className="text-blue-900 uppercase">{product.category_name || 'Plakat'}</span></div>
            </div>
          </div>

          {/* KOLOM 3: CTA & LAYANAN (3/12) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
               <ul className="text-[11px] space-y-3 mb-6">
                  <li className="flex items-center gap-2 font-medium text-gray-600 italic"><CheckCircle2 className="w-4 h-4 text-green-500" /> Desain bisa disesuaikan 100%</li>
                  <li className="flex items-center gap-2 font-medium text-gray-600 italic"><CheckCircle2 className="w-4 h-4 text-green-500" /> Konsultasi gratis & respon cepat</li>
                  <li className="flex items-center gap-2 font-medium text-gray-600 italic"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pengiriman aman seluruh Indonesia</li>
               </ul>

               <a 
                 href={`https://wa.me, saya ingin bertanya tentang ${product.name}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg uppercase text-[11px] tracking-widest"
               >
                 <MessageCircle className="w-5 h-5" /> Pesan via WhatsApp
               </a>
               <p className="text-[9px] text-center text-gray-400 mt-3 italic uppercase tracking-tighter font-bold">Kami bantu dari desain sampai jadi</p>
            </div>

            {/* STANDAR LAYANAN */}
            <div className="space-y-4 px-2">
               <h3 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest border-b pb-2">Standar Layanan</h3>
               <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-blue-900 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-700 leading-tight">Administrasi Lengkap</p>
                    <p className="text-[9px] text-gray-400 leading-snug">Mendukung kebutuhan faktur pajak instansi.</p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-700 leading-tight">Garansi Kualitas Produk</p>
                    <p className="text-[9px] text-gray-400 leading-snug">Revisi & penggantian jika tidak sesuai standar.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* DESKRIPSI PRODUK (BOTTOM) */}
        <div className="mt-20 pt-10 border-t border-gray-100 max-w-4xl">
           <h2 className="text-sm font-extrabold text-blue-900 mb-6 uppercase tracking-[0.3em]">Deskripsi Produk</h2>
           <div className="text-[13px] text-gray-500 leading-relaxed space-y-4 whitespace-pre-line italic font-medium">
              {product.description || 'Deskripsi belum tersedia.'}
           </div>
        </div>

      </div>
    </div>
  );
}
