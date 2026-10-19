import React from 'react';
import { FlowerImage } from '../common/FlowerImage';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const InstagramSection: React.FC = () => {
  const instagramCards = [
    {
      image: '/images/products/mini-tulip.jpg',
      caption: 'Pastel tulips made with love 🌷 Which color is your favorite?',
      tag: '#pipecleanerflowers',
    },
    {
      image: '/images/products/sunshine-sunflower.jpg',
      caption: 'Bringing a little sunshine to Pune 🌻 Everlasting sunflower stem.',
      tag: '#handmadecrafts',
    },
    {
      image: '/images/products/flower-keychain.jpg',
      caption: 'Fuzzy daisy bag charms are ready to find their new homes ♡',
      tag: '#flowerkeychains',
    },
    {
      image: '/images/products/cherry-keychain.jpg',
      caption: 'Twin cherry keychains! Softest little accessory ever 🍒',
      tag: '#cuteaccessories',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FFFCF9] border-t border-[#F3D9DE]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C78391] bg-[#FAF0F3] px-3.5 py-1 rounded-full border border-[#F3D9DE]">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>FOLLOW OUR JOURNEY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#45353A] font-semibold mt-3">
              Little Blooms on Instagram ♡
            </h2>
            <p className="text-sm text-[#7E6C72] mt-1.5">
              Behind the scenes, new flower drops, and crafting reels on{' '}
              <span className="font-medium text-[#704657]">{BUSINESS_CONFIG.instagramHandle}</span>
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF0F3] hover:bg-[#F3D9DE] text-[#704657] border border-[#C78391]/30 text-xs font-semibold transition-colors shadow-2xs self-start sm:self-auto"
          >
            <InstagramIcon className="w-4 h-4 text-[#C78391]" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramCards.map((card, idx) => (
            <a
              key={idx}
              href={BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden bg-[#FAF0F3] border border-[#F3D9DE] block shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <FlowerImage
                src={card.image}
                alt={card.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#704657]/75 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 text-[#F3D9DE]" />
                </div>
                <div>
                  <p className="text-xs text-white/95 leading-relaxed font-sans line-clamp-3">
                    {card.caption}
                  </p>
                  <span className="text-[10px] text-[#F3D9DE] mt-1 block font-medium">
                    {card.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
