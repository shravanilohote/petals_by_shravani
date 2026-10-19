import { BUSINESS_CONFIG } from '../config/businessConfig';
import type { CartItem, CustomGiftOptions, Product } from '../types';

/**
 * Resolve asset paths relative to base URL (works on GitHub Pages, Vercel, and localhost)
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Format currency in Indian Rupees (INR)
 */
export const formatPrice = (amount: number): string => {
  return `${BUSINESS_CONFIG.currencySymbol}${amount.toLocaleString('en-IN')}`;
};

/**
 * Build WhatsApp link with encoded message
 */
export const buildWhatsAppUrl = (message: string): string => {
  const cleanPhone = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

/**
 * Generate formatted WhatsApp message for a single product order
 */
export const formatProductWhatsAppMessage = (
  product: Product,
  color: string,
  quantity: number,
  notes?: string
): string => {
  const lines = [
    `🌷 *Hello Shravani!*`,
    `I would love to order from *${BUSINESS_CONFIG.brandName}*:`,
    ``,
    `• *Product:* ${product.name}`,
    `• *Selected Color:* ${color || 'Default / As pictured'}`,
    `• *Quantity:* ${quantity}`,
    `• *Price:* ${formatPrice(product.price * quantity)} (${formatPrice(product.price)} each)`,
  ];

  if (notes && notes.trim().length > 0) {
    lines.push(`• *Customization Notes:* ${notes.trim()}`);
  }

  lines.push(``);
  lines.push(`Could you please confirm availability and the estimated preparation time? Thank you! ♡`);

  return lines.join('\n');
};

/**
 * Generate formatted WhatsApp message for shopping cart checkout
 */
export const formatCartWhatsAppMessage = (items: CartItem[], subtotal: number): string => {
  const lines = [
    `🌷 *Hello Shravani!*`,
    `I'm ready to place an order from *${BUSINESS_CONFIG.brandName}*:`,
    ``,
    `*Order Items:*`,
  ];

  items.forEach((item, index) => {
    lines.push(
      `${index + 1}. *${item.product.name}* (${item.selectedColor}) x ${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`
    );
    if (item.customNotes && item.customNotes.trim().length > 0) {
      lines.push(`   _Notes: ${item.customNotes.trim()}_`);
    }
  });

  lines.push(``);
  lines.push(`*Estimated Subtotal:* ${formatPrice(subtotal)}`);
  lines.push(`*Location:* Pune / Delivery required`);
  lines.push(``);
  lines.push(`Could you please confirm the order details, preparation schedule, and payment details? Thank you! ♡`);

  return lines.join('\n');
};

/**
 * Generate formatted WhatsApp message for Custom Gift Builder
 */
export const formatCustomGiftWhatsAppMessage = (options: CustomGiftOptions): string => {
  const lines = [
    `🌷 *Hello Shravani!*`,
    `I would love to make a custom handmade gift request with *${BUSINESS_CONFIG.brandName}*:`,
    ``,
    `🌸 *Custom Request Details:*`,
    `• *Flower Type:* ${options.flowerType}`,
    `• *Preferred Color Theme:* ${options.preferredColor}`,
    `• *Number of Flowers:* ${options.stemCount}`,
    `• *Gift Wrapping Style:* ${options.wrappingStyle}`,
    `• *Occasion:* ${options.occasion}`,
    `• *Budget Range:* ${options.budgetRange}`,
  ];

  if (options.personalizedNote && options.personalizedNote.trim().length > 0) {
    lines.push(`• *Handwritten Note to Include:* "${options.personalizedNote.trim()}"`);
  }

  lines.push(``);
  lines.push(`Could you please share your ideas, final price estimate, and preparation time for this piece? Thank you! ♡`);

  return lines.join('\n');
};
