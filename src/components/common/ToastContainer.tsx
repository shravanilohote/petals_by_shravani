import React from 'react';
import { useToast } from '../../context/ToastContext';
import { Heart, Check, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#FFF8F2]/95 backdrop-blur-md border border-[#F3D9DE] shadow-lg rounded-2xl p-4 flex items-start gap-3 transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
          role="status"
          aria-live="polite"
        >
          {/* Icon */}
          <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#FAF0F3] border border-[#F3D9DE]">
            {toast.type === 'heart' ? (
              <Heart className="w-4 h-4 text-[#C78391] fill-[#C78391] animate-bounce" />
            ) : toast.type === 'info' ? (
              <Info className="w-4 h-4 text-[#704657]" />
            ) : (
              <Check className="w-4 h-4 text-[#704657]" />
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0 pt-0.5">
            <h4 className="text-xs font-semibold text-[#45353A] leading-tight">
              {toast.title}
            </h4>
            {toast.description && (
              <p className="text-[11px] text-[#7E6C72] mt-0.5 leading-snug">
                {toast.description}
              </p>
            )}
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 text-[#7E6C72] hover:text-[#45353A] p-1 rounded-lg hover:bg-[#F3D9DE]/40 transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
