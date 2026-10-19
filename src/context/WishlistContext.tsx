import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useToast } from './ToastContext';
import { useNotifications } from './NotificationContext';
import { PRODUCTS } from '../config/businessConfig';

interface WishlistContextType {
  wishlistIds: string[];
  wishlistCount: number;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
  isWishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
}

const STORAGE_KEY = 'petals_wishlist_v1';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { showToast } = useToast();
  const { triggerWishlistNotification } = useNotifications();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  const isInWishlist = useCallback(
    (productId: string) => wishlistIds.includes(productId),
    [wishlistIds]
  );

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlistIds((prev) => {
        const product = PRODUCTS.find((p) => p.id === productId);
        const productName = product ? product.name : 'Bloom';

        if (prev.includes(productId)) {
          showToast(`Removed from Wishlist`, `${productName} was removed.`, 'info');
          return prev.filter((id) => id !== productId);
        } else {
          showToast(`Saved to Wishlist ♡`, `${productName} is in your saved blooms.`, 'heart');
          const updated = [...prev, productId];
          triggerWishlistNotification(updated.length);
          return updated;
        }
      });
    },
    [showToast, triggerWishlistNotification]
  );

  const removeFromWishlist = useCallback(
    (productId: string) => {
      setWishlistIds((prev) => prev.filter((id) => id !== productId));
    },
    []
  );

  const clearWishlist = useCallback(() => {
    setWishlistIds([]);
  }, []);

  const openWishlist = useCallback(() => setIsWishlistOpen(true), []);
  const closeWishlist = useCallback(() => setIsWishlistOpen(false), []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistCount: wishlistIds.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        isWishlistOpen,
        openWishlist,
        closeWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
