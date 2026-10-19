import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import type { CartItem, Product } from '../types';
import { useToast } from './ToastContext';
import { useNotifications } from './NotificationContext';

interface CartContextType {
  items: CartItem[];
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  addToCart: (product: Product, quantity?: number, selectedColor?: string, customNotes?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const STORAGE_KEY = 'petals_cart_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { showToast } = useToast();
  const { triggerCartNotification } = useNotifications();

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [items]);

  const addToCart = useCallback(
    (product: Product, quantity: number = 1, selectedColor?: string, customNotes?: string) => {
      const colorToUse = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0] : 'Standard');
      const cleanNotes = (customNotes || '').trim();
      
      // Distinct ID by product, color, and note
      const cartItemId = `${product.id}-${colorToUse.toLowerCase().replace(/\s+/g, '-')}-${cleanNotes ? encodeURIComponent(cleanNotes.substring(0, 10)) : 'def'}`;

      setItems((prev) => {
        const existingIndex = prev.findIndex((item) => item.id === cartItemId);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex].quantity += quantity;
          return updated;
        } else {
          return [
            ...prev,
            {
              id: cartItemId,
              productId: product.id,
              product,
              quantity,
              selectedColor: colorToUse,
              customNotes: cleanNotes || undefined,
            },
          ];
        }
      });

      showToast(
        `Added to Bag 🌷`,
        `${quantity}x ${product.name} (${colorToUse}) was added.`,
        'success'
      );

      // Trigger notification state update
      triggerCartNotification(totalCount + quantity);
    },
    [showToast, triggerCartNotification, totalCount]
  );

  const removeFromCart = useCallback(
    (cartItemId: string) => {
      setItems((prev) => {
        const itemToRemove = prev.find((i) => i.id === cartItemId);
        if (itemToRemove) {
          showToast(`Removed from Bag`, `${itemToRemove.product.name} removed.`, 'info');
        }
        return prev.filter((item) => item.id !== cartItemId);
      });
    },
    [showToast]
  );

  const updateQuantity = useCallback(
    (cartItemId: string, newQuantity: number) => {
      if (newQuantity <= 0) {
        removeFromCart(cartItemId);
        return;
      }
      setItems((prev) =>
        prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        subtotal,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
