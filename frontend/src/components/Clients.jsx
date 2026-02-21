import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/clients')
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error("Error loading clients:", err));
  }, []);

  // Kita duplikasi list client agar animasi loopnya tidak terputus (seamless)
  const duplicatedClients = [...clients, ...clients, ...clients];

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
          <h3 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Trusted Partnerships</h3>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
            Telah Dipercaya Oleh <br className="hidden md:block" />
            <span className="text-blue-600">Berbagai Instansi & Perusahaan</span>
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden group">
          {/* Efek Fade di sisi kiri dan kanan agar transisi halus */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Animasi Running Logo */}
          <motion.div 
            className="flex gap-12 items-center py-4"
            animate={{
              x: ["0%", "-50%"] // Bergeser setengah dari total panjang
            }}
            transition={{
              duration: 30, // Kecepatan (semakin besar semakin pelan)
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={`http://localhost:8000/storage/${client.image}`}
                  alt={client.name}
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => { e.target.src = "https://via.placeholder.com"; }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Counter Sederhana di Bawah (Opsional) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Dan <span className="text-blue-600">100+</span> Mitra Lainnya Seluruh Indonesia
          </p>
        </motion.div>

      </div>
    </section>
  );
}
