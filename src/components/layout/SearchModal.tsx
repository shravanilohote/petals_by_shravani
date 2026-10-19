import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../config/businessConfig';
import type { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { FlowerImage } from '../common/FlowerImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const filteredProducts = trimmed
    ? PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.colors.some((c) => c.toLowerCase().includes(trimmed))
        );
      })
    : PRODUCTS.slice(0, 4); // Show top 4 when no query

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/30 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-[#FFF8F2] border border-[#F3D9DE] shadow-2xl rounded-3xl p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-[#C78391]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by flower, color, or bouquet..."
            className="w-full pl-12 pr-10 py-3.5 bg-[#FAF0F3] border border-[#F3D9DE] rounded-2xl text-sm text-[#45353A] placeholder-[#7E6C72] focus:outline-none focus:ring-2 focus:ring-[#C78391]/40"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 text-[#7E6C72] hover:text-[#45353A] p-1 rounded-full hover:bg-[#F3D9DE]/60"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="absolute right-3.5 text-[#7E6C72] hover:text-[#45353A] p-1 rounded-full hover:bg-[#F3D9DE]/60"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-1">
          <span className="text-xs text-[#7E6C72] mr-1">Try:</span>
          {['Daisy', 'Sunflower', 'Tulip', 'Bouquet', 'Keychain', 'Pot'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs px-2.5 py-1 rounded-full bg-[#FAF0F3] hover:bg-[#F3D9DE] text-[#704657] border border-[#F3D9DE]/80 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-5 max-h-80 overflow-y-auto space-y-2.5 pr-1">
          <div className="text-xs font-semibold text-[#7E6C72] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C78391]" />
            {trimmed ? `Found ${filteredProducts.length} blooms` : 'Featured blooms'}
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-[#FFFCF9] hover:bg-[#FAF0F3] border border-[#F5EAE1] hover:border-[#F3D9DE] transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#F3D9DE]/60">
                  <FlowerImage src={product.image} alt={product.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#45353A] group-hover:text-[#704657] transition-colors truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#7E6C72] truncate">
                    {product.shortDescription || product.material}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-[#704657]">
                      {formatPrice(product.price)}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C78391]/15 text-[#704657]">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
                <button className="text-xs text-[#704657] font-medium px-3 py-1.5 rounded-xl bg-[#FAF0F3] group-hover:bg-[#C78391] group-hover:text-[#FFF8F2] transition-colors">
                  View
                </button>
              </div>
            ))
          ) : (
            <div className="py-8 text-center">
              <span className="text-2xl">🌱</span>
              <p className="text-sm text-[#45353A] font-serif mt-2">
                No matching blooms found
              </p>
              <p className="text-xs text-[#7E6C72] mt-1">
                Looking for a custom flower? You can request any design in our Custom Gift Builder!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
