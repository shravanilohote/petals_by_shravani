import React, { useEffect } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../config/businessConfig';
import { formatPrice } from '../../utils/formatters';
import { FlowerImage } from '../common/FlowerImage';

export const WishlistDrawer: React.FC = () => {
  const { wishlistIds, isWishlistOpen, closeWishlist, removeFromWishlist, clearWishlist } =
    useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isWishlistOpen) {
        closeWishlist();
      }
    };
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isWishlistOpen, closeWishlist]);

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-300">
      <div className="flex-1" onClick={closeWishlist} />

      <div className="w-full max-w-md bg-[#FFF8F2] border-l border-[#F3D9DE] shadow-2xl h-full flex flex-col transform transition-transform duration-300 animate-in slide-in-from-right">
        {/* Header */}
        <div className="p-5 border-b border-[#F3D9DE] flex items-center justify-between bg-[#FFF8F2]/90 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#C78391]">
              <Heart className="w-4 h-4 fill-[#C78391]" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#45353A]">
                Saved Blooms
              </h2>
              <p className="text-xs text-[#7E6C72]">
                {savedProducts.length} {savedProducts.length === 1 ? 'item saved' : 'items saved'}
              </p>
            </div>
          </div>
          <button
            onClick={closeWishlist}
            className="p-2 rounded-full text-[#7E6C72] hover:text-[#45353A] hover:bg-[#F3D9DE]/50 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedProducts.length > 0 ? (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3.5 p-3.5 rounded-2xl bg-[#FFFCF9] border border-[#F5EAE1] shadow-2xs items-center"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#F3D9DE]/50 bg-[#FAF0F3]">
                  <FlowerImage src={product.image} alt={product.name} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#45353A] truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#704657] mt-0.5">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-[11px] text-[#7E6C72] mt-0.5">
                    {product.preparationTime} prep
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        removeFromWishlist(product.id);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] text-xs font-medium transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-1.5 text-[#7E6C72] hover:text-[#C78391] rounded-lg hover:bg-[#F3D9DE]/40 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 select-none">
              <div className="w-20 h-20 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-3xl mb-3 shadow-xs">
                🌸
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#45353A]">
                Your wishlist is blooming empty
              </h3>
              <p className="text-xs text-[#7E6C72] max-w-xs mt-1.5 leading-relaxed">
                Click the heart icon on any flower you love to keep it here for later.
              </p>
              <a
                href="#shop"
                onClick={closeWishlist}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C78391] hover:bg-[#A86473] text-[#FFF8F2] text-xs font-medium shadow-xs transition-colors"
              >
                <span>Find Flowers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {savedProducts.length > 0 && (
          <div className="p-4 border-t border-[#F3D9DE] bg-[#FAF0F3]/60 flex justify-between items-center">
            <button
              onClick={clearWishlist}
              className="text-xs text-[#7E6C72] hover:text-[#704657] underline transition-colors"
            >
              Clear all saved blooms
            </button>
            <span className="text-xs text-[#7E6C72]">
              Handmade with love ♡
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
