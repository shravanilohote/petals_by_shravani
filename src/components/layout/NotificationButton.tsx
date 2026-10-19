import React from 'react';
import { useNotifications } from '../../context/NotificationContext';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({ className = '' }) => {
  const { unreadCount, toggleOpen, isOpen, hasNewPetalPulse } = useNotifications();

  return (
    <button
      onClick={toggleOpen}
      aria-expanded={isOpen}
      aria-label={`Flower Mailbox: ${unreadCount} unread notes`}
      className={`relative w-10 h-10 rounded-full bg-[#FAF0F3] hover:bg-[#F3D9DE] border border-[#C78391]/35 shadow-xs flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C78391]/50 active:scale-95 group ${className}`}
    >
      {/* Custom Floral Bell Icon: Bell with a sweet chenille daisy center */}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-[#704657] group-hover:text-[#45353A] transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bell Body */}
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />

        {/* Delicate Miniature Daisy Bloom Inside Bell */}
        <g className="text-[#C78391]" strokeWidth="1" fill="#C78391" opacity="0.95">
          <circle cx="12" cy="10" r="1.5" fill="#F4D35E" stroke="#E0A926" strokeWidth="0.5" />
          <circle cx="12" cy="7.8" r="1" />
          <circle cx="14" cy="9.2" r="1" />
          <circle cx="13.2" cy="11.8" r="1" />
          <circle cx="10.8" cy="11.8" r="1" />
          <circle cx="10" cy="9.2" r="1" />
        </g>
      </svg>

      {/* Tiny Animated Petal on New Notification */}
      {hasNewPetalPulse && unreadCount > 0 && (
        <span
          className="absolute -top-1 -right-1 pointer-events-none animate-shimmer-petal select-none text-[11px]"
          title="New bloom note"
        >
          🌸
        </span>
      )}

      {/* Small Berry-Coloured Unread Badge */}
      {unreadCount > 0 && (
        <span className="absolute -bottom-0.5 -right-0.5 bg-[#704657] text-[#FFF8F2] text-[10px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs border border-[#FFF8F2]">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </button>
  );
};
