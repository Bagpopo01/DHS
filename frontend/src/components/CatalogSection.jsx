import { motion } from "framer-motion";
import { Download, Sparkles, FileText } from "lucide-react";
import Logo from "../assets/LOGO.png";

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-blue-900 to-indigo-950 rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden"
        >
          {/* Ornamen Dekoratif Melayang */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Sisi Kiri: Visual Logo & Badge */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
              <motion.img
                whileHover={{ rotate: -2, scale: 1.05 }}
                src={Logo}
                alt="Logo Diameter Souvenir"
                className="relative w-56 md:w-72 lg:w-80 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-blue-950 px-4 py-2 rounded-2xl font-black text-xs shadow-lg flex items-center space-x-1 rotate-12"
              >
                <Sparkles size={14} />
                <span>EDISI 2024</span>
              </motion.div>
            </div>

            {/* Sisi Kanan: Teks & Action */}
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <FileText size={14} />
                <span>E-Catalog PDF</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                DAPATKAN KATALOG <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                  TREN GRATIS!
                </span>
              </h2>
              
              <p className="text-lg text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                Hadirkan souvenir modern, elegan, dan berkesan untuk setiap momen spesial Anda. 
                Dapatkan inspirasi produk terbaru kami langsung di genggaman Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white text-blue-900 font-black px-10 py-4 rounded-2xl shadow-xl hover:bg-blue-50 transition-all"
                >
                  <Download size={20} />
                  <span>Download Sekarang</span>
                </motion.button>
                
                <p className="text-blue-300 text-xs font-medium italic">
                  *Tersedia dalam format PDF (2.4 MB)
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
