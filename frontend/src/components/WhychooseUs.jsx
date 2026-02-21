import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Heart, Sparkles } from 'lucide-react';

const ReasonCard = ({ reason, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
    className="group flex items-start gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300"
  >
    <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl ${reason.color} text-white shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
      {reason.icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
        {reason.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">
        {reason.description}
      </p>
    </div>
  </motion.div>
);

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Legalitas Terjamin",
      description: "Transaksi aman & terpercaya dengan dukungan legalitas perusahaan yang lengkap.",
      icon: <ShieldCheck className="w-7 h-7" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Komitmen Waktu",
      description: "Kami menjamin ketepatan waktu produksi di setiap proyek souvenir Anda.",
      icon: <Clock className="w-7 h-7" />,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700"
    },
    {
      id: 3,
      title: "Pelayanan Premium",
      description: "Konsultasi desain gratis dan pelayanan ramah sepenuh hati untuk Anda.",
      icon: <Heart className="w-7 h-7" />,
      color: "bg-gradient-to-br from-rose-500 to-rose-700"
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Kiri: Headline (Span 5) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" /> Why Choose Us
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                Solusi Souvenir <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Tanpa Rasa Khawatir
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Kami menggabungkan kualitas material premium dengan sistem manajemen produksi yang terstandarisasi.
              </p>
            </motion.div>
          </div>

          {/* Tengah: Animasi (Span 3) - Sembunyi di Mobile jika terlalu ramai */}
          <div className="lg:col-span-3 hidden lg:flex justify-center relative">
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                filter: ["drop-shadow(0px 0px 0px rgba(37,99,235,0))", "drop-shadow(0px 20px 30px rgba(37,99,235,0.3))", "drop-shadow(0px 0px 0px rgba(37,99,235,0))"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-slate-300 select-none"
            >
              ?
            </motion.div>
          </div>

          {/* Kanan: List (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
