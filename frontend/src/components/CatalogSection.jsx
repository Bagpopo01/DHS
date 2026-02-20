import { motion } from "framer-motion";
import Logo from "../assets/LOGO.png";

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Banner promosi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-8"
        >
          {/* Logo sementara */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src={Logo} // gunakan import, bukan path manual
              alt="Logo Souvenir"
              className="w-64 md:w-80 object-contain"
            />
          </div>

          {/* Teks promosi */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              KATALOG TREN GRATIS!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Hadirkan Souvenir Modern dan Berkesan!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Download Sekarang!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}