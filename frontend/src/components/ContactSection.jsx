import { motion } from 'framer-motion';

function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Ada pertanyaan? Tim kami siap membantu Anda menemukan souvenir yang sempurna
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: '📧', title: 'Email', text: 'info@souvenirku.com', delay: 0.1 },
            { icon: '📱', title: 'Telepon', text: '+62 812-3456-7890', delay: 0.2 },
            { icon: '📍', title: 'Alamat', text: 'Jl. Souvenir No. 123, Jakarta', delay: 0.3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover"
            >
              <div className="w-16 h-16 blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-blue-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;