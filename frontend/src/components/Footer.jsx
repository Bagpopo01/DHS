export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Deskripsi */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold">S</span>
              </div>
              <span className="text-xl font-bold">SouvenirKu</span>
            </div>
            <p className="text-blue-200">
              Toko souvenir terpercaya dengan koleksi terlengkap dan kualitas terbaik.
            </p>
          </div>

          {/* Produk */}
          <div>
            <span className="font-semibold text-lg mb-4 block">Produk</span>
            <div className="space-y-2">
              <p className="footer-link">Akrilik Custom</p>
              <p className="footer-link">Plakat</p>
              <p className="footer-link">Logam</p>
              <p className="footer-link">Cover</p>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <span className="font-semibold text-lg mb-4 block">Layanan</span>
            <div className="space-y-2">
              <p className="footer-link">Pengiriman Gratis</p>
              <p className="footer-link">Garansi Kualitas</p>
              <p className="footer-link">Customer Service</p>
              <p className="footer-link">Return Policy</p>
            </div>
          </div>

          {/* Sosial Media */}
          <div>
            <span className="font-semibold text-lg mb-4 block">Ikuti Kami</span>
            <div className="space-y-2">
              <p className="footer-link">Instagram</p>
              <p className="footer-link">Facebook</p>
              <p className="footer-link">Twitter</p>
              <p className="footer-link">YouTube</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">© 2024 DHS . Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}