import { Instagram, Facebook, Twitter, Youtube, Send, MapPin, Phone } from 'lucide-react';
// Import logo dari folder assets
import LogoDHS from '../assets/Logo DHS.png'; 

const BrandLogo = () => (
  <div className="flex items-center space-x-3">
    <img 
      src={LogoDHS} 
      alt="DHS Souvenir Logo" 
      className="w-12 h-12 object-contain" 
    />
    <div className="flex flex-col">
      <span className="text-2xl font-black tracking-tight leading-none">
        DHS<span className="text-blue-500"> Project</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">
        Premium Souvenir
      </span>
    </div>
  </div>
);

// ... (sisa kode FooterLink tetap sama)

export default function Footer() {
  return (
    <footer className="relative bg-[#050b1a] text-white pt-20 pb-10 overflow-hidden">
      {/* Garis aksen di bagian atas footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Kolom Logo yang sudah diupdate */}
          <div className="lg:col-span-4 space-y-8">
            <BrandLogo />
            <p className="text-blue-200/60 leading-relaxed max-w-sm text-sm">
              Menghadirkan kualitas terbaik untuk setiap momen berharga Anda. Spesialis souvenir kustom dengan pengerjaan detail dan tepat waktu.
            </p>
            {/* ... (Sosial Media Icons) */}
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ... (Kolom link lainnya tetap seperti sebelumnya) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400">Produk</h4>
            <div className="space-y-4">
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Plakat Akrilik</p>
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Vandel Kayu</p>
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Medali Custom</p>
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Souvenir Set</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400">Info</h4>
            <div className="space-y-4">
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Tentang Kami</p>
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Cara Order</p>
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Pengiriman</p>
              <p className="footer-link cursor-pointer text-blue-200/70 hover:text-white transition-colors">Kontak</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email anda..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-2 top-2 bottom-2 px-3 bg-blue-600 rounded-lg hover:bg-blue-500">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-blue-200/30 text-[10px] tracking-[0.2em] uppercase font-bold">
            © {new Date().getFullYear()} DHS Project. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
