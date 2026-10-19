import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { NotificationButton } from './NotificationButton';
import { NotificationPopover } from './NotificationPopover';
import { Search, Heart, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { buildWhatsAppUrl } from '../../utils/formatters';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { totalCount, openCart } = useCart();
  const { wishlistCount, openWishlist } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Shop Flowers', href: '#shop' },
    { label: 'Custom Gifts', href: '#custom-builder' },
    { label: 'Our Story', href: '#story' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppDirect = () => {
    const url = buildWhatsAppUrl('Hello Shravani! 🌷 I would love to know more about your handmade pipe-cleaner blooms.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF8F2]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#F3D9DE]'
            : 'bg-[#FFF8F2]/80 backdrop-blur-xs py-4 border-b border-[#F3D9DE]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile hamburger & Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-[#45353A] hover:bg-[#F3D9DE]/50 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <a href="#home" className="focus:outline-none">
                <BrandLogo size="md" showTagline={false} />
              </a>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#45353A] hover:text-[#704657] transition-colors relative py-1 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C78391] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#45353A] hover:text-[#704657] hover:bg-[#F3D9DE]/50 transition-colors"
                aria-label="Search blooms"
                title="Search blooms"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Wishlist Button with Counter */}
              <button
                onClick={openWishlist}
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#45353A] hover:text-[#C78391] hover:bg-[#F3D9DE]/50 transition-colors"
                aria-label={`Wishlist: ${wishlistCount} items`}
                title="Saved Blooms"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    wishlistCount > 0 ? 'text-[#C78391] fill-[#C78391]/30' : ''
                  }`}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C78391] text-[#FFF8F2] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FFF8F2] shadow-2xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button with Counter */}
              <button
                onClick={openCart}
                className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#45353A] hover:text-[#704657] hover:bg-[#F3D9DE]/50 transition-colors"
                aria-label={`Shopping bag: ${totalCount} items`}
                title="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#704657] text-[#FFF8F2] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FFF8F2] shadow-2xs">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* The Cute Custom Notification System Icon */}
              <div className="relative">
                <NotificationButton />
                <NotificationPopover />
              </div>

              {/* Direct WhatsApp Pill (Desktop only) */}
              <button
                onClick={handleWhatsAppDirect}
                className="hidden xl:inline-flex items-center gap-1.5 ml-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F3] hover:bg-[#F3D9DE] text-[#704657] border border-[#F3D9DE] text-xs font-medium transition-colors shadow-2xs"
                title="Chat with Shravani"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-4/5 max-w-xs bg-[#FFF8F2] h-full shadow-2xl p-6 flex flex-col justify-between border-r border-[#F3D9DE]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F3D9DE]">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#7E6C72] hover:text-[#45353A] rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-serif font-medium text-[#45353A] hover:text-[#704657] py-1 border-b border-[#FAF0F3]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#F3D9DE] space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleWhatsAppDirect();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#704657] text-[#FFF8F2] text-xs font-medium shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#F3D9DE]" />
                <span>Chat with Shravani</span>
              </button>
              <p className="text-[11px] text-center text-[#7E6C72]">
                {BUSINESS_CONFIG.location}
              </p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};
