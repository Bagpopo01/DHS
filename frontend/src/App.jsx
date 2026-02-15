import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';
import Kategori from './pages/Kategori';
import { useCart } from './hooks/useCart';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const { cartItems, addToCart, getTotalItems } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]); // ambil dari backend

  // Fetch data dari backend Laravel
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetch products:", err));
  }, []);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'batik', name: 'Batik' },
    { id: 'aksesoris', name: 'Aksesoris' },
  ];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || p.category === selectedCategory)
  );

  const clients = [
    { id: 1, name: 'BNI', logo: 'https://via.placeholder.com/100x50?text=BNI' },
    { id: 2, name: 'Telkom', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Telkom_Indonesia_Logo.svg' },
    { id: 3, name: 'Pertamina', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Pertamina_Logo.svg' },
    { id: 4, name: 'Gojek', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gojek_logo_2020.svg' },
    { id: 5, name: 'Shopee', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Shopee_logo.svg' },
    { id: 6, name: 'Tokopedia', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Tokopedia_logo_2021.svg' },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Navbar
        isMenuOpen={false}
        setIsMenuOpen={() => {}}
        getTotalItems={getTotalItems}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
              filteredProducts={filteredProducts}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
              formatPrice={formatPrice}
              clients={clients}
            />
          }
        />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="*" element={<div className="text-center py-12">Halaman tidak ditemukan</div>} />
      </Routes>
    </div>
  );
}

export default App;