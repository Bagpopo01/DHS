import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import FeaturedProducts from '../components/FeaturedProducts';
import Clients from '../components/Clients';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredProducts,
  favorites,
  toggleFavorite,
  addToCart,
  formatPrice,
  clients,
}) {
  return (
    <>
      <HeroSection />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <FeaturedProducts
        filteredProducts={filteredProducts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
        formatPrice={formatPrice}
      />

      <Clients clients={clients} />
      <AboutSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </>
  );
}