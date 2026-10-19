import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-2xl bg-[#FFF8F2] border border-[#F3D9DE] rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F3D9DE]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
              {type === 'privacy' ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#45353A]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#7E6C72] hover:text-[#45353A] hover:bg-[#FAF0F3]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-4 text-xs sm:text-sm text-[#7E6C72] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>{BUSINESS_CONFIG.brandName}</strong>, we respect and care for your personal privacy. We collect only the essential details (such as your name, delivery address, phone number, or customized gift message) necessary to lovingly craft and deliver your handmade flowers.
              </p>
              <p>
                <strong>Information Usage:</strong> Your phone number and address are used exclusively for coordinating orders and deliveries via WhatsApp or trusted courier services in India.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> We do not sell, rent, or trade your contact information to advertisers or third parties.
              </p>
              <p>
                <strong>Inquiries:</strong> If you have any questions regarding your data or wish to have your details deleted after delivery, simply send us a message on WhatsApp.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{BUSINESS_CONFIG.brandName}</strong>. By exploring our catalog or placing an order through WhatsApp, you agree to the following boutique policies:
              </p>
              <p>
                <strong>1. Handmade Character:</strong> Every single flower, keychain, and pot arrangement is individually handcrafted with chenille stems (pipe-cleaners). Slight natural variations in petal curvature, dimensions, and texture are hallmarks of authentic handmade artistry.
              </p>
              <p>
                <strong>2. Order Confirmation:</strong> Placing an inquiry via the website does not constitute a completed transaction. All orders, customization requests, and delivery dates are confirmed personally on WhatsApp.
              </p>
              <p>
                <strong>3. Payments:</strong> Payments are accepted via UPI (Google Pay, PhonePe, Paytm) upon personal confirmation. We will never ask for payment through automated website gateways.
              </p>
              <p>
                <strong>4. Care Instructions:</strong> Pipe-cleaner flowers never require water! Keep away from direct water or moisture. If petals bend during transit or handling, gently reshape them with your fingers.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#F3D9DE] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#704657] text-[#FFF8F2] text-xs font-medium hover:bg-[#532F3F] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
