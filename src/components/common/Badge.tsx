import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'rose' | 'sage' | 'cream' | 'berry' | 'blush';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'rose',
  className = '',
  size = 'sm',
}) => {
  const variantStyles = {
    rose: 'bg-[#C78391]/15 text-[#704657] border-[#C78391]/30',
    sage: 'bg-[#C8D4BE]/30 text-[#45353A] border-[#99AA8F]/40',
    cream: 'bg-[#FFF8F2] text-[#704657] border-[#F3D9DE] shadow-xs',
    berry: 'bg-[#704657] text-[#FFF8F2] border-transparent',
    blush: 'bg-[#F3D9DE] text-[#704657] border-[#E2BEC5]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wide',
    md: 'text-xs px-3 py-1 tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-medium rounded-full border transition-all select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
