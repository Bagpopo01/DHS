
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Tentang Diameter Sovenir</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Kami adalah toko Produsen dan Suplier souvenir terpercaya yang menghadirkan keindahan budaya Indonesia
              melalui produk-produk berkualitas tinggi. Setiap item dipilih dengan teliti untuk memastikan keaslian dan
              kualitas terbaik.
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

          {/* Gambar Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              alt="Tim SouvenirKu yang profesional"
              src="https://images.unsplash.com/photo-1666578296079-52024f45d962"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}