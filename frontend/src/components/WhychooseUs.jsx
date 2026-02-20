import { motion } from 'framer-motion';

export default function WhyChooseUsQuestion() {
  const reasons = [
    {
      id: 1,
      title: "Legalitas Terjamin",
      description: "Transaksi aman dengan legalitas lengkap.",
      icon: "💎",
    },
    {
      id: 2,
      title: "Komitmen Waktu",
      description: "Ketepatan waktu di setiap proyek.",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Pelayanan Sepenuh Hati",
      description: "Kami melayani pelanggan dengan penuh perhatian.",
      icon: "❤️",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 items-center">
        
        {/* Headline kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-900">Why You Should Pick Us?</h2>
          <p className="text-lg text-blue-700 max-w-md">
            Kami menghadirkan souvenir dengan kualitas premium, ketepatan waktu, dan pelayanan sepenuh hati.
          </p>
        </motion.div>

        {/* Tanda tanya besar di tengah */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="flex justify-center items-center"
        >
          <div className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-2xl">
            ?
          </div>
        </motion.div>

        {/* Alasan kanan dengan ikon */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {reasons.map((reason) => (
            <div key={reason.id} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-1">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}