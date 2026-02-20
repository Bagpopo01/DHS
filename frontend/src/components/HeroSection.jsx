import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from '../assets/LOGO.png';

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Teks Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              DIAMETER SOUVENIR
              <span className="text-gradient block">Dari Ide Jadi Realita!</span>
            </h1>
            
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Kamu punya ide, kami punya solusi. Diameter Souvenir, tempat kreativitas jadi nyata
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tombol ke halaman kategori */}
              <Button
                className="btn-primary"
                onClick={() => {
                  window.location.href = 'http://localhost:5173/kategori';
                }}
              >
                Jelajahi Produk
              </Button>

              {/* Tombol ke WhatsApp */}
              <Button
                className="btn-secondary"
                onClick={() => {
                  window.open(
                    'https://wa.me/6281234567890?text=Halo%20Diameter%20Souvenir,%20saya%20ingin%20custom%20souvenir',
                    '_blank'
                  );
                }}
              >
                Custom Souvenir
              </Button>
            </div>
          </motion.div>

          {/* Gambar Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                alt="Koleksi souvenir Indonesia yang beragam"
                src="https://images.unsplash.com/photo-1523012122435-bec7a5bca8bf"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 blue-gradient rounded-full opacity-20 floating-animation"></div>
            <div
              className="absolute -top-6 -right-6 w-16 h-16 bg-blue-300 rounded-full opacity-30 floating-animation"
              style={{ animationDelay: '2s' }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}