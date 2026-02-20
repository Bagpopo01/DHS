import { motion } from 'framer-motion';

export default function WorkflowSteps() {
  const steps = [
    {
      id: 1,
      title: "Kirim Permintaan",
      description: "Sampaikan kebutuhan, referensi, atau konsep plakat sesuai acara Anda.",
      icon: "📩",
    },
    {
      id: 2,
      title: "Terima Desain & Penawaran",
      description: "Kami siapkan desain awal dan penawaran sesuai spesifikasi dan kebutuhan Anda.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Setujui & Produksi Dimulai",
      description: "Setelah disetujui, proses produksi dimulai sesuai jadwal yang disepakati.",
      icon: "⚙️",
    },
    {
      id: 4,
      title: "Pengiriman & Serah Terima",
      description: "Produk dikemas rapi dan dikirim hingga serah terima di lokasi Anda.",
      icon: "🚚",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Dari Ide ke Produk, Dalam 4 Langkah</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Proses sederhana dan transparan untuk mewujudkan souvenir impian Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white text-blue-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}