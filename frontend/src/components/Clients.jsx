import { motion } from 'framer-motion';

export default function Clients({ clients }) {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md h-24"
            >
              <img
                src={client.logo}
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