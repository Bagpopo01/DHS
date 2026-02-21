import { motion } from 'framer-motion';
import { MapPin, ShoppingBag, Users, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/30 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
              <span>Tentang Kami</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Diameter Souvenir & <br /> 
              <span className="text-blue-300">Hobi Store</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Kami adalah produsen dan supplier souvenir terpercaya yang menghadirkan 
              sentuhan kreativitas dan kualitas terbaik. Berlokasi di Boyolali, kami 
              berkomitmen memberikan produk pilihan yang dikerjakan dengan teliti 
              untuk setiap momen spesial Anda.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10"
              >
                <ShoppingBag className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm font-medium">Produk Unggulan</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10"
              >
                <Users className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-200 text-sm font-medium">Pelanggan Puas</div>
              </motion.div>
            </div>

            <button className="flex items-center space-x-2 bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all group">
              <span>Hubungi Kami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Sisi Kanan: Peta dengan Frame Modern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dekorasi Belakang Peta */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white p-3 rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4423.97195211395!2d110.60791751107445!3d-7.541237074413459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a150ca0886ed7%3A0xf3577b7fbb0bdc3f!2sDiameter%20Hobi%20Store!5e1!3m2!1sen!2sid!4v1771553380982!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Lokasi Diameter Souvenir"
              ></iframe>
              
              <div className="mt-4 flex items-center justify-between px-2 pb-2">
                <div className="flex items-center text-gray-800">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold">Teras, Boyolali, Jawa Tengah</span>
                </div>
                <a 
                  href="https://maps.app.goo.gl" // Ganti dengan link share gmaps kamu
                  target="_blank"
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  Buka di Maps
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
