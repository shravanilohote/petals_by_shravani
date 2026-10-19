import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { getAssetUrl } from '../../utils/formatters';

interface BrandLogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  showTagline = false,
  size = 'md',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const logoSrc = getAssetUrl(BUSINESS_CONFIG.logoImage || '/images/logo/petals-logo.png');

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Handcrafted Circular Brand Logo */}
      <div
        className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center rounded-full overflow-hidden border-2 border-[#F3D9DE] shadow-xs group-hover:scale-105 transition-transform duration-300 bg-[#FAF0F3]`}
      >
        {!imgError ? (
          <img
            src={logoSrc}
            alt={BUSINESS_CONFIG.brandName}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm">
            🌸
          </div>
        )}
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight font-semibold text-[#45353A] group-hover:text-[#704657] transition-colors leading-none ${titleSizes[size]}`}
        >
          {BUSINESS_CONFIG.brandName}
        </span>
        {showTagline && (
          <span className="font-handwriting text-xs text-[#7E6C72] tracking-wide mt-1">
            {BUSINESS_CONFIG.tagline}
          </span>
        )}
      </div>
    </div>
  );
};
