export type ProductCategory = 
  | 'all'
  | 'single-flowers'
  | 'mini-bouquets'
  | 'flower-pots'
  | 'flower-keychains'
  | 'cherry-keychains'
  | 'custom-gifts';

export interface Product {
  id: string;
  name: string;
  category: 'single-flowers' | 'mini-bouquets' | 'flower-pots' | 'flower-keychains' | 'cherry-keychains' | 'custom-gifts';
  price: number; // in INR (₹)
  badge?: 'Bestseller' | 'Made to Order' | 'New Bloom' | 'Popular' | 'Handmade Gem';
  description: string;
  shortDescription?: string;
  colors: string[];
  preparationTime: string;
  image: string;
  dimensions?: string;
  material: string;
  isCustomizable: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string; // unique item id (productId + color + notes hash)
  productId: string;
  product: Product;
  quantity: number;
  selectedColor: string;
  customNotes?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'welcome' | 'cart' | 'wishlist' | 'custom' | 'info';
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
}

export interface CustomGiftOptions {
  flowerType: string;
  preferredColor: string;
  stemCount: string;
  wrappingStyle: string;
  occasion: string;
  personalizedNote: string;
  budgetRange: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  description: string;
  image: string;
}
