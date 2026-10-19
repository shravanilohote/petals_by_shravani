import React, { useRef, useEffect } from 'react';
import { useNotifications } from '../../context/NotificationContext';
import { X, Check, BellRing, Sparkles, ShoppingBag, Heart, Gift } from 'lucide-react';

export const NotificationPopover: React.FC = () => {
  const {
    notifications,
    unreadCount,
    isOpen,
    closeNotification,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    clearAllNotifications,
    requestBrowserPermission,
    browserPermission,
  } = useNotifications();

  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeNotification();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node) && isOpen) {
        // Check if click was on the notification button
        const target = e.target as HTMLElement;
        if (!target.closest('button[aria-label^="Flower Mailbox"]')) {
          closeNotification();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeNotification]);

  if (!isOpen) return null;

  const getIconForType = (type: string) => {
    switch (type) {
      case 'cart':
        return <ShoppingBag className="w-4 h-4 text-[#704657]" />;
      case 'wishlist':
        return <Heart className="w-4 h-4 text-[#C78391] fill-[#C78391]/30" />;
      case 'custom':
        return <Gift className="w-4 h-4 text-[#704657]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C78391]" />;
    }
  };

  return (
    <div
      ref={popoverRef}
      role="dialog"
      aria-modal="false"
      aria-label="Flower Mailbox"
      className="absolute right-0 sm:right-4 top-16 z-50 w-[92vw] sm:w-96 max-w-sm bg-[#FFF8F2] border border-[#F3D9DE] shadow-xl rounded-3xl p-5 transform transition-all duration-300 animate-in fade-in slide-in-from-top-2"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F3D9DE]/60">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-[#45353A] leading-tight">
              Flower Mailbox ♡
            </h3>
            <p className="text-[11px] text-[#7E6C72]">
              {unreadCount > 0 ? `${unreadCount} unread notes` : 'All caught up'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-[11px] font-medium text-[#704657] hover:text-[#45353A] px-2 py-1 rounded-md hover:bg-[#F3D9DE]/40 transition-colors flex items-center gap-1"
              title="Mark all as read"
            >
              <Check className="w-3 h-3" />
              <span>Mark all</span>
            </button>
          )}
          <button
            onClick={closeNotification}
            className="text-[#7E6C72] hover:text-[#45353A] p-1.5 rounded-full hover:bg-[#F3D9DE]/50 transition-colors"
            aria-label="Close notification panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notifications List or Empty State */}
      <div className="mt-3 max-h-72 overflow-y-auto space-y-2.5 pr-1">
        {notifications.length > 0 ? (
          notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => markAsRead(item.id)}
              className={`p-3 rounded-2xl border transition-all text-left relative group ${
                item.read
                  ? 'bg-[#FFFCF9] border-[#F5EAE1] opacity-75'
                  : 'bg-[#FAF0F3]/70 border-[#F3D9DE] shadow-2xs'
              }`}
            >
              {/* Unread indicator dot */}
              {!item.read && (
                <span className="absolute top-3 right-8 w-2 h-2 rounded-full bg-[#C78391]" />
              )}

              {/* Dismiss Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dismissNotification(item.id);
                }}
                className="absolute top-2.5 right-2 text-[#7E6C72] hover:text-[#45353A] p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Dismiss note"
              >
                <X className="w-3 h-3" />
              </button>

              <div className="flex gap-2.5">
                <div className="shrink-0 w-7 h-7 rounded-full bg-[#FFF8F2] border border-[#F3D9DE] flex items-center justify-center mt-0.5">
                  {getIconForType(item.type)}
                </div>
                <div className="flex-1 pr-6">
                  <h4 className="text-xs font-semibold text-[#45353A] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#7E6C72] mt-0.5 leading-relaxed">
                    {item.message}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F3D9DE]/30">
                    <span className="text-[10px] text-[#99AA8F] font-medium">
                      {item.timestamp}
                    </span>
                    {item.actionUrl && (
                      <a
                        href={item.actionUrl}
                        onClick={closeNotification}
                        className="text-[11px] text-[#704657] font-medium underline underline-offset-2 hover:text-[#45353A]"
                      >
                        {item.actionText || 'View'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="py-8 px-4 text-center select-none">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-xl mb-2.5">
              🌸
            </div>
            <h4 className="font-serif text-sm font-semibold text-[#45353A]">
              All caught up, flower friend ♡
            </h4>
            <p className="text-xs text-[#7E6C72] mt-1 max-w-[220px] mx-auto leading-relaxed">
              No new flower notes right now. Take a deep breath and enjoy the blooms!
            </p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="mt-3 pt-3 border-t border-[#F3D9DE]/60 flex items-center justify-between">
        {notifications.length > 0 ? (
          <button
            onClick={clearAllNotifications}
            className="text-[11px] text-[#7E6C72] hover:text-[#704657] transition-colors"
          >
            Clear all notes
          </button>
        ) : (
          <span className="text-[11px] text-[#99AA8F] italic">
            Handcrafted with love
          </span>
        )}

        {/* Optional browser notification permission toggle */}
        {browserPermission !== 'granted' && browserPermission !== 'unsupported' && (
          <button
            onClick={async () => {
              await requestBrowserPermission();
            }}
            className="text-[11px] text-[#704657] hover:underline flex items-center gap-1 font-medium"
          >
            <BellRing className="w-3 h-3" />
            <span>Enable alerts</span>
          </button>
        )}
      </div>
    </div>
  );
};
