import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    fetch(`${API_URL}/api/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Error loading clients:", err));
  }, [API_URL]);

  // Duplikasi list agar animasi loop berjalan mulus tanpa celah
  // Kita cek jika data ada, jika tidak, kita berikan array kosong
  const duplicatedClients = clients.length > 0 ? [...clients, ...clients, ...clients] : [];

  return (
    <section id="clients" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">
            Trusted Partnerships
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
            Telah Dipercaya Oleh <br className="hidden md:block" />
            <span className="text-blue-600">Berbagai Instansi & Perusahaan</span>
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden group">
          {/* Gradasi Efek Fade Kiri & Kanan */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Wrapper Animasi */}
          {clients.length > 0 ? (
            <motion.div 
              className="flex gap-16 md:gap-24 items-center py-4"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                duration: 40, // Atur kecepatan di sini (detik)
                ease: "linear",
                repeat: Infinity
              }}
            >
              {duplicatedClients.map((client, index) => {
                // Placeholder dinamis: Transparan dengan teks inisial client
                const placeholderUrl = `https://placehold.co{encodeURIComponent(client.name)}&font=montserrat`;
                
                return (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  >
                    <img
                      src={`${API_URL}/storage/${client.image}`}
                      alt={client.name}
                      className="h-10 md:h-14 w-auto object-contain"
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = placeholderUrl; 
                      }}
                    />
                  </div>
                );
              })}
            </motion.div>
          ) : (
            /* State Loading Sederhana */
            <div className="w-full flex justify-center py-10 text-gray-300 animate-pulse font-medium">
              Memuat daftar mitra...
            </div>
          )}
        </div>

        {/* Footer Counter */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
              Dan <span className="text-blue-600">100+</span> Mitra Lainnya di Seluruh Indonesia
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
