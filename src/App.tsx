import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { NotificationProvider } from './context/NotificationContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

import { Navbar } from './components/layout/Navbar';
import { SearchModal } from './components/layout/SearchModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { WishlistDrawer } from './components/wishlist/WishlistDrawer';
import { ProductDetailModal } from './components/home/ProductDetailModal';
import { ToastContainer } from './components/common/ToastContainer';

import { HeroSection } from './components/home/HeroSection';
import { CategorySection } from './components/home/CategorySection';
import { ProductGrid } from './components/home/ProductGrid';
import { CustomGiftBuilder } from './components/home/CustomGiftBuilder';
import { StorySection } from './components/home/StorySection';
import { InstagramSection } from './components/home/InstagramSection';
import { FaqSection } from './components/home/FaqSection';
import { ContactSection } from './components/home/ContactSection';
import { Footer } from './components/layout/Footer';

import type { Product, ProductCategory } from './types';

const MainApp: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  const handleCategorySelect = (categoryId: ProductCategory) => {
    setSelectedCategory(categoryId);
    const shopElement = document.getElementById('shop');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F2] text-[#45353A] selection:bg-[#F3D9DE] selection:text-[#704657]">
      {/* Sticky Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <CategorySection onSelectCategory={handleCategorySelect} />
        <ProductGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenDetails={(product) => setSelectedProduct(product)}
        />
        <CustomGiftBuilder />
        <StorySection />
        <InstagramSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />
      <CartDrawer />
      <WishlistDrawer />
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <ToastProvider>
      <NotificationProvider>
        <WishlistProvider>
          <CartProvider>
            <MainApp />
          </CartProvider>
        </WishlistProvider>
      </NotificationProvider>
    </ToastProvider>
  );
}

export default App;
