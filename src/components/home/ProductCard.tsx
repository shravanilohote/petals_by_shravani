import React from 'react';
import type { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { FlowerImage } from '../common/FlowerImage';
import { Badge } from '../common/Badge';
import { Heart, ShoppingBag, Eye, Clock } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const saved = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group bg-[#FFF8F2] rounded-3xl p-3 sm:p-4 border border-[#F3D9DE] hover:border-[#C78391] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
    >
      <div>
        {/* Image Container with Badges & Wishlist Action */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF0F3] mb-3.5 border border-[#F3D9DE]/60">
          <FlowerImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            showFuzzyBadge={false}
          />

          {/* Badge at top-left */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <Badge variant={product.badge === 'Bestseller' ? 'berry' : 'blush'}>
                {product.badge}
              </Badge>
            </div>
          )}

          {/* Wishlist Button at top-right */}
          <button
            onClick={handleWishlistClick}
            aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-[#FFF8F2]/90 backdrop-blur-xs border border-[#F3D9DE] flex items-center justify-center text-[#45353A] hover:text-[#C78391] hover:bg-[#FAF0F3] transition-all shadow-2xs group/btn"
          >
            <Heart
              className={`w-4 h-4 transition-transform group-hover/btn:scale-110 ${
                saved ? 'text-[#C78391] fill-[#C78391]' : ''
              }`}
            />
          </button>

          {/* Quick View Hover Pill */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF8F2]/95 backdrop-blur-xs text-[#704657] text-xs font-medium shadow-md border border-[#F3D9DE]">
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-[11px] text-[#7E6C72]">
            <Clock className="w-3 h-3 text-[#99AA8F]" />
            <span>Ready in {product.preparationTime}</span>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-semibold text-[#45353A] group-hover:text-[#704657] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#7E6C72] line-clamp-1 leading-relaxed">
            {product.shortDescription || product.description}
          </p>
        </div>
      </div>

      {/* Footer Price & Add to Bag */}
      <div className="mt-3.5 pt-3 border-t border-[#F3D9DE]/60 flex items-center justify-between">
        <div>
          <span className="text-[11px] text-[#7E6C72] block">Price</span>
          <span className="font-serif text-base sm:text-lg font-bold text-[#45353A]">
            {formatPrice(product.price)}
          </span>
        </div>

        <button
          onClick={handleQuickAdd}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF0F3] hover:bg-[#704657] text-[#704657] hover:text-[#FFF8F2] border border-[#F3D9DE] text-xs font-medium transition-all active:scale-95 shadow-2xs group/btn"
          aria-label={`Add ${product.name} to bag`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
