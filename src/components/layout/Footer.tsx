import React, { useState } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { buildWhatsAppUrl } from '../../utils/formatters';
import { PolicyModals } from '../common/PolicyModals';
import { MessageCircle, MapPin, Heart, Phone, Mail } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl('Hello Shravani! 🌷 I would love to connect with Petals by Shravani.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <footer className="bg-[#FFF8F2] border-t border-[#F3D9DE] pt-16 pb-12 text-[#45353A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F3D9DE]">
            {/* Brand Intro (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <BrandLogo size="lg" showTagline={true} />
              <p className="text-xs sm:text-sm text-[#7E6C72] max-w-sm leading-relaxed">
                Handmade pipe-cleaner blooms, mini flower pots, and bespoke gift bouquets.
                Every petal is gently twisted with love in Pune, Maharashtra.
              </p>
              <div className="space-y-1.5 text-xs text-[#7E6C72] pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C78391]" />
                  <span>{BUSINESS_CONFIG.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C78391]" />
                  <a href={`tel:+${BUSINESS_CONFIG.whatsappNumber}`} className="hover:text-[#704657]">
                    {BUSINESS_CONFIG.whatsappDisplayNumber}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C78391]" />
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[#704657]">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#704657]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#7E6C72]">
                <li>
                  <a href="#home" className="hover:text-[#704657] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-[#704657] transition-colors">
                    Shop Flowers
                  </a>
                </li>
                <li>
                  <a href="#custom-builder" className="hover:text-[#704657] transition-colors">
                    Custom Gift Builder
                  </a>
                </li>
                <li>
                  <a href="#story" className="hover:text-[#704657] transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#704657] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#704657] transition-colors">
                    Contact & Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Bloom Categories (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#704657]">
                Categories
              </h4>
              <ul className="space-y-2 text-xs text-[#7E6C72]">
                <li><a href="#shop" className="hover:text-[#704657]">Single Flowers</a></li>
                <li><a href="#shop" className="hover:text-[#704657]">Mini Bouquets</a></li>
                <li><a href="#shop" className="hover:text-[#704657]">Flower Pots</a></li>
                <li><a href="#shop" className="hover:text-[#704657]">Flower Keychains</a></li>
                <li><a href="#shop" className="hover:text-[#704657]">Cherry Keychains</a></li>
                <li><a href="#custom-builder" className="hover:text-[#704657]">Custom Bouquets</a></li>
              </ul>
            </div>

            {/* Connect & Social (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#704657]">
                Connect With Us
              </h4>
              <p className="text-xs text-[#7E6C72]">
                Follow our latest flower creations and drop us a message anytime!
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAF0F3] hover:bg-[#F3D9DE] border border-[#F3D9DE] flex items-center justify-center text-[#704657] transition-colors"
                  aria-label="Instagram profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 rounded-full bg-[#FAF0F3] hover:bg-[#F3D9DE] border border-[#F3D9DE] flex items-center justify-center text-[#25D366] transition-colors"
                  aria-label="WhatsApp chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-[#7E6C72] block">Handcrafted with chenille stems</span>
                <span className="text-[11px] text-[#99AA8F] font-medium">Never needs water or sunlight ♡</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E6C72]">
            <p className="flex items-center gap-1">
              <span>© {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All rights reserved.</span>
              <Heart className="w-3 h-3 text-[#C78391] fill-[#C78391] inline ml-1" />
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActivePolicy('privacy')}
                className="hover:text-[#704657] underline transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setActivePolicy('terms')}
                className="hover:text-[#704657] underline transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modals */}
      <PolicyModals type={activePolicy} onClose={() => setActivePolicy(null)} />
    </>
  );
};
