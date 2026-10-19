import React, { useState } from 'react';
import { getAssetUrl } from '../../utils/formatters';

interface FlowerImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  showFuzzyBadge?: boolean;
}

export const FlowerImage: React.FC<FlowerImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'square',
  showFuzzyBadge = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedSrc = getAssetUrl(src);

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio === 'portrait'
      ? 'aspect-[4/5]'
      : '';

  return (
    <div className={`relative overflow-hidden bg-[#FFF8F2] ${aspectClass} ${containerClassName}`}>
      {!hasError ? (
        <>
          {/* Skeleton placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F3D9DE]/30 to-[#FFF8F2] animate-pulse flex items-center justify-center">
              <span className="text-2xl opacity-60">🌸</span>
            </div>
          )}
          <img
            src={resolvedSrc}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${className}`}
          />
        </>
      ) : (
        /* Artistic Pipe-Cleaner Flower CSS/SVG Fallback */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF0F3] to-[#FFF8F2] p-6 text-center select-none">
          <div className="w-20 h-20 relative mb-3 flex items-center justify-center">
            {/* SVG Looped Chenille Flower */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
              {/* Stem */}
              <path
                d="M50 55 Q47 75 52 90"
                stroke="#99AA8F"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M50 70 Q62 65 65 60"
                stroke="#99AA8F"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <ellipse
                  key={deg}
                  cx="50"
                  cy="32"
                  rx="7"
                  ry="16"
                  transform={`rotate(${deg} 50 45)`}
                  fill={deg % 90 === 0 ? '#C78391' : '#F3D9DE'}
                  stroke="#704657"
                  strokeWidth="0.8"
                  opacity="0.9"
                />
              ))}
              {/* Fluffy Center */}
              <circle cx="50" cy="45" r="9" fill="#F4D35E" stroke="#E0A926" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-xs font-serif tracking-wider text-[#704657] font-medium">
            {alt}
          </span>
          <span className="text-[10px] text-[#7E6C72] mt-1 font-sans">
            Handcrafted Pipe-Cleaner Bloom
          </span>
        </div>
      )}

      {showFuzzyBadge && (
        <div className="absolute bottom-2 left-2 bg-[#FFF8F2]/90 backdrop-blur-sm text-[#704657] text-[10px] font-medium px-2 py-0.5 rounded-full border border-[#F3D9DE] shadow-xs">
          Handmade Chenille
        </div>
      )}
    </div>
  );
};
