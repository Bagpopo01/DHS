import { motion } from 'framer-motion';
import { Send, Palette, Settings, Truck, ArrowRight } from 'lucide-react';

export default function WorkflowSteps() {
  const steps = [
    {
      id: 1,
      icon: <Send className="w-8 h-8" />,
      title: "Kirim Permintaan",
      description: "Sampaikan kebutuhan, referensi, atau konsep plakat sesuai acara Anda.",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "Terima Desain",
      description: "Kami siapkan desain awal dan penawaran sesuai spesifikasi Anda.",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      id: 3,
      icon: <Settings className="w-8 h-8" />,
      title: "Produksi Dimulai",
      description: "Setelah disetujui, proses produksi dimulai sesuai jadwal disepakati.",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8" />,
      title: "Serah Terima",
      description: "Produk dikemas rapi dan dikirim aman hingga ke lokasi Anda.",
      color: "from-blue-500 to-indigo-700",
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Simple Process</h3>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
            Dari Ide ke Produk, <br className="hidden md:block" />
            <span className="text-blue-600 italic">Dalam 4 Langkah Mudah</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Proses sederhana dan transparan untuk mewujudkan souvenir impian Anda tanpa ribet.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Garis Penghubung Desktop (Hanya muncul di Layar Besar) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center font-black text-blue-600 shadow-sm z-20">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className={`w-24 h-24 mb-8 rounded-[2.5rem] bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl shadow-blue-200 group-hover:rotate-12 transition-transform duration-500`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium px-4">
                  {step.description}
                </p>

                {/* Arrow Icon (Mobile/Tablet spacing) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-gray-200">
                    <ArrowRight className="rotate-90 md:rotate-0 w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Kecil di bawah */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button className="bg-blue-50 text-blue-700 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-100 transition-all border border-blue-100">
            Mulai Konsultasi Sekarang
          </button>
        </motion.div>

      </div>
    </section>
  );
}
