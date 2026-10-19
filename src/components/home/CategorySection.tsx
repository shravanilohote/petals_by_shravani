import React from 'react';
import { CATEGORIES } from '../../config/businessConfig';
import type { ProductCategory } from '../../types';
import { FlowerImage } from '../common/FlowerImage';
import { ArrowUpRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (categoryId: ProductCategory) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#FFFCF9] border-y border-[#F3D9DE]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C78391] bg-[#FAF0F3] px-3.5 py-1 rounded-full border border-[#F3D9DE]">
            EXPLORE THE GARDEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#45353A] font-semibold mt-3">
            Shop by Category
          </h2>
          <p className="text-sm text-[#7E6C72] mt-2 leading-relaxed">
            From single bedside blooms to charming cherry keychains, find your perfect handmade piece.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group cursor-pointer flex flex-col items-center bg-[#FFF8F2] rounded-3xl p-3 sm:p-4 border border-[#F3D9DE]/80 hover:border-[#C78391] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Category Circular Thumbnail */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF0F3] relative mb-3 border border-[#F3D9DE]/40">
                <FlowerImage
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#704657]/0 group-hover:bg-[#704657]/10 transition-colors" />
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#FFF8F2]/90 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#704657]" />
                </div>
              </div>

              {/* Label & Description */}
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#45353A] text-center group-hover:text-[#704657] transition-colors">
                {category.title}
              </h3>
              <p className="text-[11px] text-[#7E6C72] text-center line-clamp-1 mt-0.5">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
