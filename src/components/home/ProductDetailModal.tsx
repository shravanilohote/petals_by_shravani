import React, { useState, useEffect } from 'react';
import type { Product } from '../../types';
import { FlowerImage } from '../common/FlowerImage';
import { Badge } from '../common/Badge';
import { formatPrice, formatProductWhatsAppMessage, buildWhatsAppUrl } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { X, Heart, ShoppingBag, MessageCircle, Clock, ShieldCheck, Plus, Minus } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [customNotes, setCustomNotes] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0] : 'Standard');
      setQuantity(1);
      setCustomNotes('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && product) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const saved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, customNotes);
    onClose();
  };

  const handleBuyViaWhatsApp = () => {
    const msg = formatProductWhatsAppMessage(product, selectedColor, quantity, customNotes);
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-3xl bg-[#FFF8F2] border border-[#F3D9DE] rounded-3xl shadow-2xl overflow-hidden my-8 transform transition-all animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close & Wishlist Buttons */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => toggleWishlist(product.id)}
            className="w-10 h-10 rounded-full bg-[#FFF8F2]/90 backdrop-blur-xs border border-[#F3D9DE] flex items-center justify-center text-[#45353A] hover:text-[#C78391] hover:bg-[#FAF0F3] transition-colors shadow-xs"
            aria-label="Wishlist toggle"
          >
            <Heart
              className={`w-5 h-5 ${saved ? 'text-[#C78391] fill-[#C78391]' : ''}`}
            />
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#FFF8F2]/90 backdrop-blur-xs border border-[#F3D9DE] flex items-center justify-center text-[#7E6C72] hover:text-[#45353A] hover:bg-[#FAF0F3] transition-colors shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Product Image */}
          <div className="md:col-span-5 space-y-3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF0F3] border border-[#F3D9DE] relative">
              <FlowerImage
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                showFuzzyBadge={true}
              />
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant="berry">{product.badge}</Badge>
                </div>
              )}
            </div>

            {/* Handcrafted note badge */}
            <div className="bg-[#FAF0F3] rounded-2xl p-3 border border-[#F3D9DE] text-xs text-[#7E6C72] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#704657]">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimated Prep: {product.preparationTime}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Made to order with soft chenille stems. Timing confirmed personally on WhatsApp.
              </p>
            </div>
          </div>

          {/* Right Column: Details & Interactive Actions */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Title */}
              <div className="text-xs uppercase tracking-wider text-[#C78391] font-semibold">
                {product.category.replace('-', ' ')}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#45353A] mt-1 leading-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#704657]">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-[#7E6C72]">
                  (Inclusive of handmade crafting)
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#7E6C72] mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Material & Dimensions */}
              <div className="mt-3 pt-3 border-t border-[#F3D9DE]/60 space-y-1 text-xs text-[#7E6C72]">
                <p>
                  <strong className="text-[#45353A]">Material:</strong> {product.material}
                </p>
                {product.dimensions && (
                  <p>
                    <strong className="text-[#45353A]">Size:</strong> {product.dimensions}
                  </p>
                )}
              </div>

              {/* Color Choices */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-[#45353A] mb-2">
                    Select Color Palette: <span className="font-normal text-[#704657]">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          selectedColor === color
                            ? 'bg-[#704657] text-[#FFF8F2] border-[#704657] shadow-xs'
                            : 'bg-[#FAF0F3] text-[#45353A] border-[#F3D9DE] hover:border-[#C78391]'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Customization Notes */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#45353A] mb-1">
                  Customization Notes (Optional):
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. ribbon color, specific shade preferences..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-[#FAF0F3] border border-[#F3D9DE] text-[#45353A] placeholder-[#7E6C72] focus:outline-none focus:ring-1 focus:ring-[#C78391]"
                />
              </div>

              {/* Quantity Stepper */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs font-semibold text-[#45353A]">Quantity:</span>
                <div className="flex items-center border border-[#F3D9DE] rounded-xl bg-[#FAF0F3] overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1.5 hover:bg-[#F3D9DE] text-[#45353A] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-[#45353A]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1.5 hover:bg-[#F3D9DE] text-[#45353A] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-[#7E6C72]">
                  Total: {formatPrice(product.price * quantity)}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#F3D9DE] space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF0F3] hover:bg-[#F3D9DE] text-[#704657] border border-[#C78391]/40 font-medium text-xs transition-colors shadow-2xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Flower Bag</span>
                </button>

                <button
                  onClick={handleBuyViaWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] font-medium text-xs shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#F3D9DE]" />
                  <span>Buy via WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#7E6C72] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#99AA8F]" />
                <span>Made to order in Pune. Availability and courier confirmed directly on chat.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
