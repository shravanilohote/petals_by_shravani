import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { formatPrice, formatCartWhatsAppMessage, buildWhatsAppUrl } from '../../utils/formatters';
import { FlowerImage } from '../common/FlowerImage';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

export const CartDrawer: React.FC = () => {
  const { items, totalCount, subtotal, isCartOpen, closeCart, updateQuantity, removeFromCart } =
    useCart();

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const msg = formatCartWhatsAppMessage(items, subtotal);
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-300">
      {/* Background click to dismiss */}
      <div className="flex-1" onClick={closeCart} />

      {/* Slide-out Drawer */}
      <div className="w-full max-w-md bg-[#FFF8F2] border-l border-[#F3D9DE] shadow-2xl h-full flex flex-col transform transition-transform duration-300 animate-in slide-in-from-right">
        {/* Header */}
        <div className="p-5 border-b border-[#F3D9DE] flex items-center justify-between bg-[#FFF8F2]/90 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
              🌷
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#45353A]">
                Your Flower Bag
              </h2>
              <p className="text-xs text-[#7E6C72]">
                {totalCount} {totalCount === 1 ? 'handmade bloom' : 'handmade blooms'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full text-[#7E6C72] hover:text-[#45353A] hover:bg-[#F3D9DE]/50 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3.5 rounded-2xl bg-[#FFFCF9] border border-[#F5EAE1] shadow-2xs"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#F3D9DE]/50 bg-[#FAF0F3]">
                  <FlowerImage src={item.product.image} alt={item.product.name} />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-[#45353A] leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#7E6C72] hover:text-[#C78391] p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF0F3] text-[#704657] border border-[#F3D9DE]/60">
                        {item.selectedColor}
                      </span>
                      <span className="text-xs font-semibold text-[#704657]">
                        {formatPrice(item.product.price)}
                      </span>
                    </div>

                    {item.customNotes && (
                      <p className="text-[11px] text-[#7E6C72] italic mt-1 line-clamp-1 bg-[#FAF0F3]/50 px-2 py-0.5 rounded-md">
                        Note: {item.customNotes}
                      </p>
                    )}
                  </div>

                  {/* Quantity Stepper & Line Total */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F5EAE1]">
                    <div className="flex items-center border border-[#F3D9DE] rounded-xl bg-[#FAF0F3] overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-[#F3D9DE] text-[#45353A] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold text-[#45353A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-[#F3D9DE] text-[#45353A] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#45353A]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 select-none">
              <div className="w-20 h-20 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-3xl mb-3 shadow-xs">
                🌸
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#45353A]">
                Your bag is waiting for blooms
              </h3>
              <p className="text-xs text-[#7E6C72] max-w-xs mt-1.5 leading-relaxed">
                Explore our handmade pipe-cleaner flowers, keychains, and custom gifts.
              </p>
              <a
                href="#shop"
                onClick={closeCart}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C78391] hover:bg-[#A86473] text-[#FFF8F2] text-xs font-medium shadow-xs transition-colors"
              >
                <span>Explore Flowers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Footer Checkout Section */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F3D9DE] bg-[#FAF0F3]/80 space-y-3.5">
            {/* Prep Note */}
            <div className="flex items-start gap-2 bg-[#FFF8F2] p-2.5 rounded-xl border border-[#F3D9DE] text-[11px] text-[#7E6C72]">
              <Sparkles className="w-3.5 h-3.5 text-[#C78391] shrink-0 mt-0.5" />
              <span>
                {BUSINESS_CONFIG.preparationTimeNote}
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-medium text-[#7E6C72]">Estimated Subtotal</span>
              <span className="font-serif text-xl font-bold text-[#45353A]">
                {formatPrice(subtotal)}
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] font-medium text-sm shadow-md transition-all active:scale-[0.99] group"
            >
              <MessageCircle className="w-4 h-4 text-[#F3D9DE]" />
              <span>Order via WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-center text-[#7E6C72]">
              Personalized confirmation & UPI payment handled directly on WhatsApp ♡
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
