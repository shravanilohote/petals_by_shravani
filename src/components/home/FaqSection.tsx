import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../config/businessConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFF8F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C78391] bg-[#FAF0F3] px-3.5 py-1 rounded-full border border-[#F3D9DE]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>EVERYTHING YOU NEED TO KNOW</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#45353A] font-semibold mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#7E6C72] mt-2">
            Honest details on crafting time, custom requests, and Pune delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFCF9] rounded-2xl border border-[#F3D9DE] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF0F3]/40 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#45353A]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center shrink-0 text-[#704657] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F3D9DE]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#7E6C72] leading-relaxed border-t border-[#FAF0F3]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
