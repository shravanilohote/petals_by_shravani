import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { NotificationItem } from '../types';

interface NotificationContextType {
  notifications: NotificationItem[];
  unreadCount: number;
  isOpen: boolean;
  hasNewPetalPulse: boolean;
  toggleOpen: () => void;
  closeNotification: () => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  dismissNotification: (id: string) => void;
  clearAllNotifications: () => void;
  triggerCartNotification: (itemCount: number) => void;
  triggerWishlistNotification: (itemCount: number) => void;
  requestBrowserPermission: () => Promise<boolean>;
  browserPermission: NotificationPermission | 'unsupported';
}

const STORAGE_KEY = 'petals_notifications_v1';

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'welcome',
    title: 'Welcome to our little flower world! ♡',
    message: 'Every pipe-cleaner petal here is hand-twisted with patience and warmth in Pune.',
    type: 'welcome',
    timestamp: 'Just now',
    read: false,
    actionText: 'Explore Flowers',
    actionUrl: '#shop',
  },
  {
    id: 'custom-gift-tip',
    title: 'Your custom bouquet idea is ready to blossom ♡',
    message: 'Have a special birthday or anniversary coming up? Design a one-of-a-kind arrangement with our builder.',
    type: 'custom',
    timestamp: 'Today',
    read: false,
    actionText: 'Custom Gift Builder',
    actionUrl: '#custom-builder',
  },
];

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return INITIAL_NOTIFICATIONS;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [hasNewPetalPulse, setHasNewPetalPulse] = useState(true);
  const [browserPermission, setBrowserPermission] = useState<NotificationPermission | 'unsupported'>(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'unsupported';
  });

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
    } catch {
      // ignore
    }
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setHasNewPetalPulse(false);
  }, []);

  const closeNotification = useCallback(() => {
    setIsOpen(false);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
    setHasNewPetalPulse(false);
  }, []);

  const dismissNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
    setHasNewPetalPulse(false);
  }, []);

  // Dynamic notification when cart has items
  const triggerCartNotification = useCallback((itemCount: number) => {
    if (itemCount <= 0) return;
    setNotifications((prev) => {
      const existing = prev.find((n) => n.id === 'cart-reminder');
      if (existing) {
        return prev.map((n) =>
          n.id === 'cart-reminder'
            ? {
                ...n,
                message: `You have ${itemCount} handmade ${itemCount === 1 ? 'bloom' : 'blooms'} waiting in your bag!`,
                timestamp: 'Just now',
                read: false,
              }
            : n
        );
      }
      return [
        {
          id: 'cart-reminder',
          title: 'A little bloom is waiting in your cart 🌷',
          message: `You have ${itemCount} handmade ${itemCount === 1 ? 'bloom' : 'blooms'} waiting in your bag!`,
          type: 'cart',
          timestamp: 'Just now',
          read: false,
          actionText: 'View Cart',
          actionUrl: '#cart',
        },
        ...prev,
      ];
    });
    setHasNewPetalPulse(true);
  }, []);

  // Dynamic notification when wishlist has items
  const triggerWishlistNotification = useCallback((itemCount: number) => {
    if (itemCount <= 0) return;
    setNotifications((prev) => {
      const existing = prev.find((n) => n.id === 'wishlist-reminder');
      if (existing) return prev;
      return [
        {
          id: 'wishlist-reminder',
          title: 'Your wishlist is full of lovely things ♡',
          message: `You saved ${itemCount} ${itemCount === 1 ? 'flower' : 'flowers'} to your wishlist. Ready to blossom?`,
          type: 'wishlist',
          timestamp: 'Just now',
          read: false,
          actionText: 'View Wishlist',
          actionUrl: '#wishlist',
        },
        ...prev,
      ];
    });
    setHasNewPetalPulse(true);
  }, []);

  const requestBrowserPermission = async (): Promise<boolean> => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      setBrowserPermission('unsupported');
      return false;
    }
    try {
      const res = await Notification.requestPermission();
      setBrowserPermission(res);
      return res === 'granted';
    } catch {
      return false;
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        isOpen,
        hasNewPetalPulse,
        toggleOpen,
        closeNotification,
        markAsRead,
        markAllAsRead,
        dismissNotification,
        clearAllNotifications,
        triggerCartNotification,
        triggerWishlistNotification,
        requestBrowserPermission,
        browserPermission,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
