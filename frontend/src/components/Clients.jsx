import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Ambil data dari backend Laravel API
    fetch('http://localhost:8000/api/clients')
      .then(res => res.json())
      .then(data => setClients(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 200, // geser ke kiri 200px
          behavior: 'smooth',
        });

        // kalau sudah sampai ujung kanan, balik ke awal
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 2000); // setiap 3 detik geser otomatis

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Client</h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Jangkauan dan kolaborasi kami yang luas mencerminkan komitmen terhadap kualitas dan kepuasan.
          </p>
        </motion.div>

        {/* Container scroll horizontal */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 items-center scrollbar-hide"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md h-24 min-w-[150px]"
            >
              <img
                src={`http://localhost:8000/storage/${client.image}`}
                alt={`Logo Mitra ${client.name}`}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}