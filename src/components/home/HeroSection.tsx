import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { FlowerImage } from '../common/FlowerImage';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center overflow-hidden bg-[#FFF8F2]">
      {/* Background Pipe-Cleaner Floral Arrangement */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 sm:opacity-55 mix-blend-multiply">
        <FlowerImage
          src="/images/hero/hero-flowers.jpg"
          alt="Handmade pipe-cleaner floral arrangement framing the boutique"
          className="w-full h-full object-cover object-top sm:object-center transform scale-105 transition-transform duration-1000"
          aspectRatio="auto"
        />
        {/* Soft Cream Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F2] via-[#FFF8F2]/90 to-transparent w-full md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F2] via-transparent to-[#FFF8F2]/40" />
      </div>

      {/* Delicate Floating Petals (Restrained, subtle micro-motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
        <span className="absolute top-[18%] left-[8%] text-sm opacity-60 animate-petal-float">
          🌸
        </span>
        <span className="absolute top-[65%] left-[45%] text-xs opacity-50 animate-gentle-sway">
          🌷
        </span>
        <span className="absolute top-[28%] right-[15%] text-xs opacity-40 animate-petal-float delay-700">
          ✨
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Handmade with love label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] shadow-xs">
              <span className="text-xs">✨</span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#704657]">
                HANDMADE WITH LOVE ♡
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#45353A] font-semibold tracking-tight leading-[1.15]">
              Tiny Flowers.{' '}
              <span className="italic text-[#C78391] font-normal block sm:inline">
                Endless Feelings.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#7E6C72] max-w-xl font-normal leading-relaxed">
              Handmade pipe-cleaner blooms, crafted with love to make your little moments unforgettable.
              Everlasting, soft, and shaped petal-by-petal in Pune.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] text-sm font-semibold shadow-md transition-all active:scale-[0.98] group"
              >
                <span>Shop the Blooms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#custom-builder"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#FAF0F3] hover:bg-[#F3D9DE] text-[#704657] border border-[#C78391]/30 text-sm font-semibold transition-all active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-[#C78391]" />
                <span>Create a Custom Gift</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#7E6C72]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C8D4BE]" />
                <span>100% Fuzzy Chenille Craft</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C78391]" />
                <span>Never Withers or Needs Water</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FAF0F3] border border-[#C78391]" />
                <span>Handcrafted in Pune</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Floating boutique card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Main Circular/Organic Framed Showcase */}
              <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden border-4 border-[#FFF8F2] shadow-2xl bg-[#FAF0F3]">
                <FlowerImage
                  src="/images/products/pastel-mini-bouquet.jpg"
                  alt="Handmade pastel mini bouquet in vintage kraft wrap"
                  className="w-full h-full object-cover"
                  aspectRatio="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-[#FFF8F2]">
                  <p className="text-xs uppercase tracking-wider text-[#F3D9DE] font-semibold">
                    Signature Handcrafted Bouquet
                  </p>
                  <p className="font-serif text-lg font-medium text-white">
                    Pastel Chenille Bloom Bundle
                  </p>
                </div>
              </div>

              {/* Floating Card: “Made by hand, just for you ♡” */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FFF8F2]/95 backdrop-blur-md border border-[#F3D9DE] shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-soft-pulse max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#C78391] fill-[#C78391]" />
                </div>
                <div>
                  <p className="font-handwriting text-base text-[#45353A] font-bold leading-tight">
                    Made by hand, just for you ♡
                  </p>
                  <p className="text-[11px] text-[#7E6C72] mt-0.5">
                    Twisted with soft chenille & endless love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
