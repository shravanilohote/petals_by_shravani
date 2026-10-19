import React from 'react';
import { PRODUCTS, CATEGORIES } from '../../config/businessConfig';
import type { Product, ProductCategory } from '../../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Filter } from 'lucide-react';

interface ProductGridProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onOpenDetails: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenDetails,
}) => {
  const filterTabs: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Blooms' },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.title })),
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FFF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C78391] bg-[#FAF0F3] px-3.5 py-1 rounded-full border border-[#F3D9DE]">
              <Sparkles className="w-3 h-3" />
              <span>THE COLLECTION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#45353A] font-semibold mt-3">
              Handmade Blooms & Gifts
            </h2>
            <p className="text-sm text-[#7E6C72] mt-1.5">
              Each flower is carefully twisted by hand with fuzzy chenille stems.
            </p>
          </div>

          <div className="text-xs text-[#7E6C72] font-medium flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#C78391]" />
            <span>Showing {filteredProducts.length} handcrafted {filteredProducts.length === 1 ? 'item' : 'items'}</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`text-xs px-4 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#704657] text-[#FFF8F2] shadow-sm'
                    : 'bg-[#FAF0F3] text-[#45353A] hover:bg-[#F3D9DE] border border-[#F3D9DE]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#FAF0F3]/40 rounded-3xl border border-[#F3D9DE] p-8">
            <div className="text-3xl mb-2">🌸</div>
            <h3 className="font-serif text-lg font-semibold text-[#45353A]">
              No flowers in this category right now
            </h3>
            <p className="text-xs text-[#7E6C72] mt-1 max-w-sm mx-auto">
              Want a custom arrangement created for you? Use our Custom Gift Builder below!
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-4 px-4 py-2 rounded-xl bg-[#704657] text-[#FFF8F2] text-xs font-medium"
            >
              View All Flowers
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
