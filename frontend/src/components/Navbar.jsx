import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom'; // ✅ Tambahkan ini
import logo from '../assets/LOGO.png';

export default function Navbar({ isMenuOpen, setIsMenuOpen, getTotalItems }) {
  const { toast } = useToast();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-effect shadow-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="w-20 h-10 rounded-full flex items-center justify-center">
              <img src={logo} alt="Logo Diameter Souvenir" className="w-100 h-40 object-contain" />
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Beranda</Link>
            <Link to="/kategori" className="nav-link">Kategori</Link>
            <Link to="/tentang" className="nav-link">Tentang</Link>
            <Link to="/kontak" className="nav-link">Kontak</Link>
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-blue-700 hover:text-blue-900 transition-colors"
              onClick={() =>
                toast({
                  title: '🚧 Fitur belum tersedia',
                  description:
                    'Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀',
                  duration: 3000,
                })
              }
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center pulse-blue">
                  {getTotalItems()}
                </span>
              )}
            </motion.button>

            <button
              className="md:hidden p-2 text-blue-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4 border-t border-blue-200"
          >
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/" className="nav-link-mobile">Beranda</Link>
              <Link to="/kategori" className="nav-link-mobile">Kategori</Link>
              <Link to="/galeri" className="nav-link-mobile">Tentang</Link>
              <Link to="/kontak" className="nav-link-mobile">Kontak</Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}