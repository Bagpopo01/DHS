import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

function ContactSection() {
  const contactInfo = [
    {
      title: "Email",
      text: "Kirim pertanyaan atau penawaran via email",
      link: "mailto:info@diametersouvenir.com",
      icon: <Mail size={24} />,
      color: "bg-blue-600"
    },
    {
      title: "Telepon",
      text: "Hubungi langsung tim kami",
      link: "tel:+628123456789",
      icon: <Phone size={24} />,
      color: "bg-green-600"
    },
    {
      title: "Lokasi",
      text: "Kunjungi workshop & showroom kami",
      link: "https://maps.google.com?q=diameter+souvenir",
      icon: <MapPin size={24} />,
      color: "bg-red-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
            Siap Mewujudkan <br className="hidden md:block" />
            <span className="text-blue-600">Souvenir Impian Anda?</span>
          </h2>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto font-medium">
            Konsultasikan kebutuhan plakat, hampers, atau souvenir perusahaan Anda secara gratis dengan tim ahli kami.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {contactInfo.map((item, i) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 font-medium mb-6">{item.text}</p>
              <div className="mt-auto flex items-center text-blue-600 font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                <span>Hubungi Sekarang</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 bg-blue-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-2xl md:text-3xl font-black mb-6 relative z-10">Punya Proyek Besar atau Custom Khusus?</h3>
          <p className="text-blue-200 mb-10 max-w-xl mx-auto relative z-10 font-medium">
            Kami melayani pesanan partai besar untuk instansi pemerintah, BUMN, dan perusahaan swasta dengan penawaran harga spesial.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6281234567890?text=Halo%20DHS%20Souvenir,%20saya%20ingin%20konsultasi"
            className="inline-flex items-center space-x-3 bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-all relative z-10"
          >
            <MessageCircle size={24} />
            <span>CHAT VIA WHATSAPP</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;