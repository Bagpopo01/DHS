import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Tentang Diameter Souvenir</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Kami adalah toko Produsen dan Suplier souvenir terpercaya yang menghadirkan
              keindahan budaya Indonesia melalui produk-produk berkualitas tinggi. Setiap
              item dipilih dengan teliti untuk memastikan keaslian dan kualitas terbaik.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Produk Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-blue-200">Pelanggan Puas</div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4423.97195211395!2d110.60791751107445!3d-7.541237074413459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a150ca0886ed7%3A0xf3577b7fbb0bdc3f!2sDiameter%20Hobi%20Store!5e1!3m2!1sen!2sid!4v1771553380982!5m2!1sen!2sid"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-2xl"
              title="Lokasi Diameter Souvenir"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}