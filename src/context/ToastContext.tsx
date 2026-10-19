import React, { createContext, useContext, useState, useCallback } from 'react';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'heart';
}

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (title: string, description?: string, type?: 'success' | 'info' | 'heart') => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, description?: string, type: 'success' | 'info' | 'heart' = 'success') => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      const newToast: ToastMessage = { id, title, description, type };
      
      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 3.8s
      setTimeout(() => {
        removeToast(id);
      }, 3800);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
