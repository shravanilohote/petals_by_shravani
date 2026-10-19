import React from 'react';
import { FlowerImage } from '../common/FlowerImage';
import { Heart, Feather, ShieldCheck } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FFF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Behind-the-scenes crafting photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Photo Frame */}
              <div className="aspect-4/3 rounded-3xl overflow-hidden border-4 border-[#FFF8F2] shadow-2xl bg-[#FAF0F3]">
                <FlowerImage
                  src="/images/story/crafting-process.jpg"
                  alt="Hands shaping handmade pipe-cleaner flower petals"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative label */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#FFF8F2] border border-[#F3D9DE] shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2">
                <span className="text-base">✂️</span>
                <div>
                  <p className="font-serif text-xs font-semibold text-[#45353A]">
                    Shaped by Hand
                  </p>
                  <p className="text-[10px] text-[#7E6C72]">
                    Petal by Petal in Pune
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C78391] bg-[#FAF0F3] px-3.5 py-1 rounded-full border border-[#F3D9DE]">
              <Heart className="w-3 h-3 text-[#C78391] fill-[#C78391]" />
              <span>THE MAKER'S TOUCH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#45353A] font-semibold tracking-tight leading-tight">
              Small Blooms,{' '}
              <span className="italic text-[#C78391] font-normal">
                Made with Big Love.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#7E6C72] leading-relaxed font-normal">
              <p>
                Petals by Shravani began with a love for handmade flowers and little things that make people smile.
                Every bloom is carefully shaped by hand, with the hope that it becomes a sweet reminder of someone special.
              </p>
              <p>
                Unlike fresh flowers that fade in a few days, pipe-cleaner (chenille stem) flowers are everlasting keepsakes.
                They stay soft, vibrant, and full of character year after year—bringing a cozy sprinkle of warmth to study tables,
                bookshelves, car keys, and gifting moments.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFFCF9] border border-[#F5EAE1]">
                <div className="w-8 h-8 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center shrink-0 text-[#704657]">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#45353A]">Soft & Everlasting</h4>
                  <p className="text-[11px] text-[#7E6C72] mt-0.5">Chenille stems retain their shape & fuzzy texture forever.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFFCF9] border border-[#F5EAE1]">
                <div className="w-8 h-8 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center shrink-0 text-[#704657]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#45353A]">Thoughtfully Packaged</h4>
                  <p className="text-[11px] text-[#7E6C72] mt-0.5">Cushioned gift wrap ensures petals arrive unbent and fluffy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
