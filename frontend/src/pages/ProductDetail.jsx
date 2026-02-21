import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ChevronLeft, 
  Star,
  Clock
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // 1. Ganti localhost ke 127.0.0.1 jika localhost tidak jalan
    fetch(`http://127.0.0.1:8000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data) => {
        console.log("Data dari API:", data); // LIHAT DI CONSOLE F12
        
        // 2. LOGIKA KRUSIAL: Menangani jika API mengirim Array [..] atau Objek {..}
        const finalData = Array.isArray(data) ? data[0] : data;
        
        if (finalData && (finalData.id || finalData.name)) {
          setProduct(finalData);
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-[#fcfcfc]">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
    </div>
  );

  // Jika produk tidak ditemukan setelah loading selesai
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-black text-red-600 mb-6 tracking-widest uppercase italic">PRODUK TIDAK DITEMUKAN</h2>
        <p className="text-gray-400 text-xs mb-8">ID Produk ({id}) tidak ada di database atau API bermasalah.</p>
        <button 
          onClick={() => navigate("/kategori")} 
          className="bg-blue-900 text-white px-10 py-3 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-blue-800 transition-all shadow-xl"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  // Handle Gambar (Data kamu images: ["path/foto.jpg"])
  const images = Array.isArray(product.images) ? product.images : [];
  const mainImage = images.length > 0
  ? `http://127.0.0.1:8000/storage/${images[selectedImage].replace(/^public\//, "")}`
  : "https://via.placeholder.com";

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans antialiased text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* TOP NAVIGATION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-100 pb-5 gap-4">
          <nav className="text-[10px] uppercase tracking-[0.3em] text-gray-400 flex flex-wrap gap-2 items-center font-bold">
            <Link to="/" className="hover:text-blue-900">Beranda</Link>
            <span>/</span>
            <Link to="/kategori" className="hover:text-blue-900">Katalog</Link>
            <span>/</span>
            <span className="text-blue-900 font-black">{product.name}</span>
          </nav>

          <button 
            onClick={() => navigate("/kategori")} 
            className="flex items-center gap-1 text-[10px] font-black text-blue-900 hover:text-blue-700 uppercase tracking-widest transition-all group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Category
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
         {/* KOLOM 1: VISUALS */}
<div className="lg:col-span-5 space-y-6">
  <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center shadow-sm p-8 group relative border-t-4 border-t-blue-900">
    <img
      src={mainImage}
      alt={product.name}
      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
    />
  </div>

  {images.length > 1 && (
    <div className="grid grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <button
          key={idx}
          onClick={() => setSelectedImage(idx)}
          className={`aspect-square rounded-2xl border-2 overflow-hidden bg-white transition-all ${
            selectedImage === idx
              ? "border-blue-900 shadow-md scale-95"
              : "border-transparent opacity-40 hover:opacity-100 shadow-sm"
          }`}
        >
         <img
  src={`http://127.0.0.1:8000/storage/${img.replace(/^public\//, "")}`}
  className="w-full h-full object-cover"
  alt="thumb"
/>
        </button>
      ))}
    </div>
  )}
</div>

          {/* KOLOM 2: INFORMASI */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-2 block">DHS Premium</span>
              <h1 className="text-3xl font-black text-gray-900 uppercase leading-tight tracking-tighter mb-4">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400 gap-0.5"><Star size={12} fill="currentColor" /></div>
                <span className="text-xs font-black text-blue-900 uppercase tracking-tighter">Produk Berkualitas</span>
              </div>
            </div>

            {/* TABEL SPESIFIKASI */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50 pb-3">Spesifikasi Detail</h3>
              <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center"><span className="font-bold text-gray-400 uppercase tracking-tighter">Ukuran</span> <span className="text-gray-900 font-black">{product.size || '-'}</span></div>
                <div className="flex justify-between items-center"><span className="font-bold text-gray-400 uppercase tracking-tighter">Bahan Utama</span> <span className="text-gray-900 font-black">{product.material || '-'}</span></div>
                <div className="flex justify-between items-center"><span className="font-bold text-gray-400 uppercase tracking-tighter">Teknik</span> <span className="text-gray-900 font-black">{product.technique || '-'}</span></div>
                <div className="flex justify-between items-center"><span className="font-bold text-gray-400 uppercase tracking-tighter">Box</span> <span className="text-gray-900 font-black">{product.box || '-'}</span></div>
              </div>
            </div>

            <div className="text-[11px] font-black space-y-3 pt-2">
               <div className="flex justify-between"><span className="text-gray-400 uppercase tracking-widest">Model SKU</span> <span className="text-blue-900">{product.sku || 'DHS-PROD'}</span></div>
               <div className="flex justify-between"><span className="text-gray-400 uppercase tracking-widest">Kategori</span> <span className="text-blue-900 uppercase tracking-tighter">{product.category_name || 'Plakat'}</span></div>
            </div>
          </div>

          {/* KOLOM 3: CTA */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm border-b-4 border-b-blue-900">
               <ul className="text-[10px] space-y-4 mb-8 font-black uppercase tracking-widest italic text-gray-500">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-500" /> Custom Desain</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fast Response</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pengiriman Aman</li>
               </ul>

               <a 
                 href={`https://wa.me DHS Souvenir, saya ingin memesan: ${product.name}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-[#25D366] hover:bg-green-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl uppercase text-[11px] tracking-widest"
               >
                 <MessageCircle size={18} /> PESAN VIA WA
               </a>
            </div>

            {/* STANDAR LAYANAN */}
            <div className="space-y-6 px-2">
               <h3 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] border-b border-gray-100 pb-3 font-serif italic text-center">Standar DHS</h3>
               <div className="flex gap-4">
                  <FileText className="w-6 h-6 text-blue-900 shrink-0 opacity-80" />
                  <div><p className="text-[10px] font-black text-gray-800 uppercase tracking-tighter">Administrasi</p><p className="text-[9px] text-gray-400 leading-tight font-medium">Mendukung faktur pajak instansi.</p></div>
               </div>
               <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-blue-900 shrink-0 opacity-80" />
                  <div><p className="text-[10px] font-black text-gray-800 uppercase tracking-tighter">Garansi</p><p className="text-[9px] text-gray-400 leading-tight font-medium">Ganti baru jika tidak presisi.</p></div>
               </div>
            </div>
          </div>
        </div>

        {/* DESKRIPSI (BOTTOM) */}
        <div className="mt-24 pt-12 border-t border-gray-100">
           <h2 className="text-sm font-black text-blue-900 mb-8 uppercase tracking-[0.5em] italic">Full Description</h2>
           <div className="text-[14px] text-gray-500 leading-relaxed space-y-6 italic font-medium whitespace-pre-line text-justify">
              {product.description || 'Detail deskripsi produk belum ditambahkan.'}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
