import React, { useState } from 'react';
import type { CustomGiftOptions } from '../../types';
import { formatCustomGiftWhatsAppMessage, buildWhatsAppUrl } from '../../utils/formatters';
import { Sparkles, MessageCircle, Heart, Gift, Palette, Flower2, Package, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CustomGiftBuilder: React.FC = () => {
  const [options, setOptions] = useState<CustomGiftOptions>({
    flowerType: 'Pastel Tulips & Daisies Mix',
    preferredColor: 'Romantic Blush & Cream',
    stemCount: 'Petite bundle (5 stems)',
    wrappingStyle: 'Vintage Kraft Paper with Satin Ribbon',
    occasion: 'Birthday',
    personalizedNote: '',
    budgetRange: '₹500 - ₹1000',
  });

  const flowerTypes = [
    { name: 'Tulips', icon: '🌷', desc: 'Graceful closed chenille bulbs' },
    { name: 'Daisies', icon: '🌼', desc: 'Sunny looped petals with fuzzy center' },
    { name: 'Sunflowers', icon: '🌻', desc: 'Radiant golden petals & spiral core' },
    { name: 'Mini Roses', icon: '🌹', desc: 'Intricately swirled velvet chenille' },
    { name: 'Cherries Charm', icon: '🍒', desc: 'Twin fuzzy red cherries' },
    { name: 'Mixed Bloom Assortment', icon: '💐', desc: 'Bespoke combination of blooms' },
  ];

  const colorThemes = [
    { name: 'Romantic Blush & Cream', hex: '#F3D9DE', border: '#C78391' },
    { name: 'Lavender Mist & Lilac', hex: '#E6DEEB', border: '#9B81A8' },
    { name: 'Sunshine Buttercup & Daisy', hex: '#FEF3C7', border: '#F59E0B' },
    { name: 'Soft Sage & Mint', hex: '#E2EBE0', border: '#8AA482' },
    { name: 'Berry Crimson & Pink', hex: '#F8D7DA', border: '#704657' },
    { name: "Shravani's Surprise Harmony", hex: '#FFF3E0', border: '#FB8C00' },
  ];

  const stemCounts = [
    { label: 'Single Bloom', count: '1 stem', est: '~₹199 - ₹249' },
    { label: 'Trio of Blooms', count: '3 stems', est: '~₹450 - ₹550' },
    { label: 'Petite Bundle', count: '5 stems', est: '~₹650 - ₹850' },
    { label: 'Deluxe Bouquet', count: '9+ stems', est: '~₹1100+' },
  ];

  const wrappingStyles = [
    { name: 'Vintage Kraft Paper with Satin Ribbon', desc: 'Rustic, warm & classic' },
    { name: 'Pastel Pink Tissue & Lace Tie', desc: 'Soft, feminine & dreamy' },
    { name: 'Minimalist Frosted White Wrap', desc: 'Clean, modern aesthetic' },
    { name: 'Mini Ceramic Pot Arrangement', desc: 'Tabletop pot ready for display' },
  ];

  const occasions = [
    'Birthday',
    'Friendship',
    'Anniversary',
    'Thank You',
    'Just Because',
  ];

  const budgetRanges = [
    '₹200 - ₹500',
    '₹500 - ₹1000',
    '₹1000+',
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F3D9DE', '#C78391', '#C8D4BE', '#FFF8F2'],
      });
    } catch {
      // ignore
    }

    const message = formatCustomGiftWhatsAppMessage(options);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="custom-builder" className="py-16 sm:py-24 bg-[#FFFCF9] border-y border-[#F3D9DE]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#704657] bg-[#FAF0F3] px-4 py-1.5 rounded-full border border-[#F3D9DE]">
            <Heart className="w-3.5 h-3.5 text-[#C78391] fill-[#C78391]" />
            <span>BESPOKE HANDMADE GIFTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#45353A] font-semibold mt-3">
            Make Something Just for Them ♡
          </h2>
          <p className="text-sm text-[#7E6C72] mt-2 leading-relaxed">
            Choose your favourite flowers, colors, and wrap. Shravani will shape your bespoke bouquet petal-by-petal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Builder Form (Left 8 Cols) */}
          <div className="lg:col-span-8 bg-[#FFF8F2] p-6 sm:p-8 rounded-3xl border border-[#F3D9DE] shadow-xs space-y-8">
            {/* Step 1: Flower Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#45353A] mb-3">
                <Flower2 className="w-4 h-4 text-[#C78391]" />
                <span>1. Select Flower Type</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {flowerTypes.map((flower) => {
                  const isSelected = options.flowerType === flower.name;
                  return (
                    <button
                      key={flower.name}
                      type="button"
                      onClick={() => setOptions({ ...options, flowerType: flower.name })}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#704657] text-[#FFF8F2] border-[#704657] shadow-xs'
                          : 'bg-[#FAF0F3]/60 text-[#45353A] border-[#F3D9DE] hover:border-[#C78391]'
                      }`}
                    >
                      <div className="text-lg">{flower.icon}</div>
                      <div className="text-xs font-semibold mt-1">{flower.name}</div>
                      <div
                        className={`text-[10px] mt-0.5 line-clamp-1 ${
                          isSelected ? 'text-[#F3D9DE]' : 'text-[#7E6C72]'
                        }`}
                      >
                        {flower.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Preferred Color Theme */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#45353A] mb-3">
                <Palette className="w-4 h-4 text-[#C78391]" />
                <span>2. Preferred Color Palette</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {colorThemes.map((theme) => {
                  const isSelected = options.preferredColor === theme.name;
                  return (
                    <button
                      key={theme.name}
                      type="button"
                      onClick={() => setOptions({ ...options, preferredColor: theme.name })}
                      className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'bg-[#704657] text-[#FFF8F2] border-[#704657] shadow-xs'
                          : 'bg-[#FAF0F3]/60 text-[#45353A] border-[#F3D9DE] hover:border-[#C78391]'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full shrink-0 border"
                        style={{ backgroundColor: theme.hex, borderColor: theme.border }}
                      />
                      <span className="text-xs font-medium text-left">{theme.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Stem Count */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#45353A] mb-3">
                <Gift className="w-4 h-4 text-[#C78391]" />
                <span>3. Number of Flowers</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {stemCounts.map((stem) => {
                  const isSelected = options.stemCount.includes(stem.count);
                  return (
                    <button
                      key={stem.count}
                      type="button"
                      onClick={() => setOptions({ ...options, stemCount: `${stem.label} (${stem.count})` })}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'bg-[#704657] text-[#FFF8F2] border-[#704657] shadow-xs'
                          : 'bg-[#FAF0F3]/60 text-[#45353A] border-[#F3D9DE] hover:border-[#C78391]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{stem.label}</div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#F3D9DE]' : 'text-[#7E6C72]'}`}>
                        {stem.count}
                      </div>
                      <div className={`text-[10px] font-medium mt-1 ${isSelected ? 'text-[#FFF8F2]' : 'text-[#704657]'}`}>
                        {stem.est}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Wrapping Style */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#45353A] mb-3">
                <Package className="w-4 h-4 text-[#C78391]" />
                <span>4. Gift Wrapping Style</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {wrappingStyles.map((wrap) => {
                  const isSelected = options.wrappingStyle === wrap.name;
                  return (
                    <button
                      key={wrap.name}
                      type="button"
                      onClick={() => setOptions({ ...options, wrappingStyle: wrap.name })}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#704657] text-[#FFF8F2] border-[#704657] shadow-xs'
                          : 'bg-[#FAF0F3]/60 text-[#45353A] border-[#F3D9DE] hover:border-[#C78391]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{wrap.name}</div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#F3D9DE]' : 'text-[#7E6C72]'}`}>
                        {wrap.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Occasion & Budget Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#45353A] mb-1.5">
                  Occasion:
                </label>
                <select
                  value={options.occasion}
                  onChange={(e) => setOptions({ ...options, occasion: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF0F3] border border-[#F3D9DE] text-xs text-[#45353A] focus:outline-none focus:ring-1 focus:ring-[#C78391]"
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#45353A] mb-1.5">
                  Budget Range (INR):
                </label>
                <div className="flex gap-2">
                  {budgetRanges.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setOptions({ ...options, budgetRange: b })}
                      className={`flex-1 py-2 text-xs rounded-xl border transition-all ${
                        options.budgetRange === b
                          ? 'bg-[#704657] text-[#FFF8F2] border-[#704657] font-semibold'
                          : 'bg-[#FAF0F3] text-[#45353A] border-[#F3D9DE]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 6: Personalized Handwritten Note */}
            <div>
              <label className="block text-xs font-semibold text-[#45353A] mb-1.5">
                Personalized Handwritten Note (Included with every custom gift ♡):
              </label>
              <textarea
                value={options.personalizedNote}
                onChange={(e) => setOptions({ ...options, personalizedNote: e.target.value })}
                rows={2}
                placeholder="e.g. 'Happy 21st Birthday, Aanya! Love always ♡' or leave blank for a clean card"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF0F3] border border-[#F3D9DE] text-[#45353A] placeholder-[#7E6C72] focus:outline-none focus:ring-1 focus:ring-[#C78391]"
              />
            </div>
          </div>

          {/* Live Summary Card (Right 4 Cols) */}
          <div className="lg:col-span-4 bg-[#FFF8F2] p-6 rounded-3xl border border-[#F3D9DE] shadow-md sticky top-24 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#F3D9DE]">
              <Sparkles className="w-4 h-4 text-[#C78391]" />
              <h3 className="font-serif text-lg font-semibold text-[#45353A]">
                Your Custom Gift Preview
              </h3>
            </div>

            {/* Live Selections */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#FAF0F3]">
                <span className="text-[#7E6C72]">Flower Choice:</span>
                <span className="font-semibold text-[#45353A] text-right">{options.flowerType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF0F3]">
                <span className="text-[#7E6C72]">Color Palette:</span>
                <span className="font-semibold text-[#45353A] text-right">{options.preferredColor}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF0F3]">
                <span className="text-[#7E6C72]">Size / Stems:</span>
                <span className="font-semibold text-[#45353A] text-right">{options.stemCount}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF0F3]">
                <span className="text-[#7E6C72]">Wrapping:</span>
                <span className="font-semibold text-[#45353A] text-right">{options.wrappingStyle}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF0F3]">
                <span className="text-[#7E6C72]">Occasion:</span>
                <span className="font-semibold text-[#45353A] text-right">{options.occasion}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF0F3]">
                <span className="text-[#7E6C72]">Budget Range:</span>
                <span className="font-semibold text-[#704657] text-right">{options.budgetRange}</span>
              </div>
              {options.personalizedNote && (
                <div className="pt-2">
                  <span className="text-[#7E6C72] block mb-1">Gift Card Message:</span>
                  <p className="font-handwriting text-sm text-[#45353A] bg-[#FAF0F3] p-2.5 rounded-xl border border-[#F3D9DE]">
                    "{options.personalizedNote}"
                  </p>
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="p-3 bg-[#FAF0F3] rounded-2xl border border-[#F3D9DE] text-[11px] text-[#7E6C72] space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#704657]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#99AA8F]" />
                <span>Personalized Consultation</span>
              </div>
              <p className="leading-snug">
                Final price and delivery schedule will be personally confirmed with you on WhatsApp before crafting begins.
              </p>
            </div>

            {/* Submit Action */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] text-xs font-semibold shadow-md transition-all active:scale-[0.99] group"
            >
              <MessageCircle className="w-4 h-4 text-[#F3D9DE]" />
              <span>Send My Custom Request</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
