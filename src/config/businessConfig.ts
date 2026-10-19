import type { Product, CategoryInfo } from '../types';

/**
 * =========================================================================
 * PETALS BY SHRAVANI — CENTRAL BUSINESS & PRODUCT CONFIGURATION
 * =========================================================================
 * This is the single source of truth for your boutique.
 * You can edit your phone number, Instagram handle, prices, product descriptions,
 * delivery notes, and image paths directly in this file.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  brandName: 'Petals by Shravani',
  tagline: 'Little blooms, made with love.',
  shortBio: 'Bespoke handmade pipe-cleaner flowers, floral charms, and everlasting gifts lovingly shaped in Pune.',
  
  // Contact & Social Media
  whatsappNumber: '917276669806',
  whatsappDisplayNumber: '+91 72766 69806',
  
  instagramUrl: 'https://www.instagram.com/petals_by_shravani_/',
  instagramHandle: '@petals_by_shravani_',
  email: 'shravanilohote@gmail.com',
  location: 'Pune, Maharashtra, India',
  logoImage: '/images/logo/petals-logo.png',
  
  // Commerce & Delivery Settings
  currency: 'INR',
  currencySymbol: '₹',
  
  preparationTimeNote: 'Single blooms & keychains: 1–2 days | Pots & custom bouquets: 3–5 days',
  deliveryPolicyNote: 'Handmade in Pune. Local pickup or courier delivery available. Each bloom is delicately packed in cushioned gift wrap so it arrives in perfect shape.',
  
  // Custom Gift Builder Defaults
  customGiftDefaultBudget: '₹500 - ₹1000',
};

/**
 * Boutique Categories
 */
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'single-flowers',
    title: 'Single Flowers',
    description: 'Delicate standalone chenille blooms for vases & desk corners',
    image: '/images/categories/single-flowers.jpg',
  },
  {
    id: 'mini-bouquets',
    title: 'Mini Bouquets',
    description: 'Sweet hand-tied pastel bundles wrapped in rustic kraft paper',
    image: '/images/categories/mini-bouquets.jpg',
  },
  {
    id: 'flower-pots',
    title: 'Flower Pots',
    description: 'Charming mini ceramic pots with everlasting fuzzy blooms',
    image: '/images/categories/flower-pots.jpg',
  },
  {
    id: 'flower-keychains',
    title: 'Flower Keychains',
    description: 'Cute, fluffy floral charms for your keys, bag, or backpack',
    image: '/images/categories/flower-keychains.jpg',
  },
  {
    id: 'cherry-keychains',
    title: 'Cherry Keychains',
    description: 'Playful twin-cherry charms crafted from vibrant red chenille',
    image: '/images/categories/cherry-keychains.jpg',
  },
  {
    id: 'custom-gifts',
    title: 'Custom Gifts',
    description: 'Personalized flower arrangements designed especially for your loved ones',
    image: '/images/categories/custom-gifts.jpg',
  },
];

/**
 * Boutique Products Catalog
 * All prices are in Indian Rupees (INR ₹)
 */
export const PRODUCTS: Product[] = [
  {
    id: 'pink-daisy',
    name: 'Pink Daisy',
    category: 'single-flowers',
    price: 199,
    badge: 'Bestseller',
    description: 'A cheerful handmade daisy with soft pink chenille stem petals, a fuzzy golden-yellow pollen center, and a bendable sage-green stem. Stands beautifully in any small vase.',
    shortDescription: 'Fuzzy pink looped petals with a golden wire center.',
    colors: ['Blush Pink', 'Cream White', 'Soft Lavender', 'Buttercup Yellow'],
    preparationTime: '1–2 days',
    image: '/images/products/pink-daisy.jpg',
    material: 'High-density fuzzy chenille stems (pipe-cleaners), floral craft wire',
    dimensions: 'Stem length: approx. 25 cm | Bloom diameter: 8 cm',
    isCustomizable: true,
    featured: true,
  },
  {
    id: 'sunshine-sunflower',
    name: 'Sunshine Sunflower',
    category: 'single-flowers',
    price: 249,
    badge: 'Popular',
    description: 'Brighten anyone\'s day with this radiant pipe-cleaner sunflower. Features rich golden-yellow looped petals arranged around a spiral chocolate-brown fuzzy center, finished with two textured green leaves.',
    shortDescription: 'Radiant golden petals with spiral brown fuzzy core.',
    colors: ['Sunshine Gold', 'Honey Yellow', 'Pastel Yellow'],
    preparationTime: '1–2 days',
    image: '/images/products/sunshine-sunflower.jpg',
    material: 'Premium craft chenille stems, floral tape, flexible wire core',
    dimensions: 'Stem length: approx. 28 cm | Flower head: 10 cm',
    isCustomizable: true,
    featured: true,
  },
  {
    id: 'mini-tulip',
    name: 'Mini Tulip',
    category: 'single-flowers',
    price: 229,
    badge: 'New Bloom',
    description: 'An elegant Dutch-inspired tulip crafted by folding delicate pastel pink and cream chenille stems into a graceful closed bulb. Complete with a realistic elongated green leaf.',
    shortDescription: 'Graceful folded bulb with a long textured leaf.',
    colors: ['Blush Pink', 'Lilac Lavender', 'Milky Cream', 'Sunset Coral', 'Sky Blue'],
    preparationTime: '1–2 days',
    image: '/images/products/mini-tulip.jpg',
    material: 'Velvety chenille craft stems, sturdy interior wire',
    dimensions: 'Stem length: approx. 26 cm | Tulip head: 6 cm',
    isCustomizable: true,
    featured: true,
  },
  {
    id: 'pastel-mini-bouquet',
    name: 'Pastel Mini Bouquet',
    category: 'mini-bouquets',
    price: 649,
    badge: 'Bestseller',
    description: 'A whimsical collection of 5 handcrafted blooms including miniature tulips, fluffy daisies, and lavender sprigs. Wrapped in vintage kraft paper and tied with a luxury dusty-rose silk ribbon.',
    shortDescription: '5 handcrafted pastel blooms wrapped with silk ribbon.',
    colors: ['Blush & Lavender Mist', 'Spring Peach & Cream', 'Daisy Meadows (Yellow & White)'],
    preparationTime: '2–3 days',
    image: '/images/products/pastel-mini-bouquet.jpg',
    material: 'Chenille stems, floral wire, vintage kraft wrap, satin ribbon',
    dimensions: 'Bouquet height: approx. 28 cm | Width: 18 cm',
    isCustomizable: true,
    featured: true,
  },
  {
    id: 'handmade-flower-pot',
    name: 'Handmade Flower Pot',
    category: 'flower-pots',
    price: 799,
    badge: 'Made to Order',
    description: 'An everlasting tabletop garden! A speckled mini ceramic pot filled with an array of tiny pipe-cleaner daisies, baby tulips, and lush fuzzy foliage. Perfect for study desks, work tables, and bedside stands.',
    shortDescription: 'Everlasting desktop garden in a speckled mini ceramic pot.',
    colors: ['Pastel Meadow Mix', 'Pink & White Dream', 'Warm Autumn Palette'],
    preparationTime: '3–4 days',
    image: '/images/products/handmade-flower-pot.jpg',
    material: 'Mini ceramic pot, floral foam, pipe-cleaner blooms, faux moss base',
    dimensions: 'Pot diameter: 8 cm | Total height: 16 cm',
    isCustomizable: true,
    featured: true,
  },
  {
    id: 'flower-keychain',
    name: 'Flower Keychain',
    category: 'flower-keychains',
    price: 179,
    badge: 'Handmade Gem',
    description: 'Take a little piece of sunshine everywhere you go. A sturdy yet soft pipe-cleaner daisy charm attached to a gold-plated key ring with pastel aesthetic accent beads.',
    shortDescription: 'Sweet chenille daisy charm with gold ring & beads.',
    colors: ['Blush Pink', 'Butter Yellow', 'Lavender Purple', 'Sky Blue'],
    preparationTime: '1 day',
    image: '/images/products/flower-keychain.jpg',
    material: 'Chenille stems, gold-tone metal keyring & lobster clasp, acrylic beads',
    dimensions: 'Total length: 12 cm | Charm width: 5 cm',
    isCustomizable: true,
    featured: true,
  },
  {
    id: 'cherry-keychain',
    name: 'Cherry Keychain',
    category: 'cherry-keychains',
    price: 199,
    badge: 'Popular',
    description: 'Double the cuteness! Two round, plump fuzzy red pipe-cleaner cherries joined by a flexible green stem and leaf. Clips effortlessly to backpacks, tote bags, and car keys.',
    shortDescription: 'Plump fuzzy red cherries with a green chenille leaf.',
    colors: ['Ruby Red', 'Deep Berry Crimson', 'Bubblegum Pink Cherries'],
    preparationTime: '1 day',
    image: '/images/products/cherry-keychain.jpg',
    material: 'High-density fuzzy chenille stems, metal swivel clasp',
    dimensions: 'Total length: 11 cm | Cherry diameter: 3.5 cm each',
    isCustomizable: false,
    featured: true,
  },
  {
    id: 'custom-mini-bouquet',
    name: 'Custom Mini Bouquet',
    category: 'custom-gifts',
    price: 849,
    badge: 'Made to Order',
    description: 'Crafted entirely according to your vision. Choose your favorite flowers, custom color combination, and gift wrapping style. Includes a complimentary handwritten calligraphy note card.',
    shortDescription: 'Bespoke bouquet built with your chosen blooms & colors.',
    colors: ['Custom Palette (Discussed on WhatsApp)', 'Romantic Blush', 'Pastel Lilac & Sage'],
    preparationTime: '3–5 days',
    image: '/images/products/custom-mini-bouquet.jpg',
    material: 'Bespoke pipe-cleaner flowers, designer wrap, personalized note card',
    dimensions: 'Customized based on your preferred stem count',
    isCustomizable: true,
    featured: true,
  },
];

/**
 * FAQ Items for Section 4.K
 */
export const FAQ_ITEMS = [
  {
    question: 'Are all flowers handmade?',
    answer: 'Yes, 100%! Every single petal, leaf, stem, and bud is personally hand-shaped and twisted by Shravani using soft chenille craft stems (pipe-cleaners). Because they are made entirely by hand, each bloom possesses its own unique character and charm.',
  },
  {
    question: 'Can I customise flower colours?',
    answer: 'Absolutely! We love creating bespoke pieces. You can choose from our pastel palette (blush pink, soft lavender, cream, buttercup yellow, sage green, and peach) or request custom color pairings through our Custom Gift Builder or WhatsApp.',
  },
  {
    question: 'How long does an order take?',
    answer: 'Single stems and keychains are typically ready within 1 to 2 business days. Larger arrangements, pots, and custom bouquets take 3 to 5 business days as each stem is shaped by hand with meticulous care.',
  },
  {
    question: 'Do you accept custom bouquets?',
    answer: 'Yes! Custom bouquets are our specialty. You can specify the number of stems, flower types (tulips, daisies, sunflowers, roses), wrapping aesthetic, and include a personalized handwritten message.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can explore our catalog right here and tap "Order via WhatsApp" or "Buy via WhatsApp". This opens a chat directly with Shravani with your chosen items, colors, and notes already formatted.',
  },
  {
    question: 'Do you deliver outside Pune?',
    answer: 'We are based in Pune, where we offer local delivery and pickup. For orders outside Pune, delivery feasibility depends on the fragility of the arrangement and courier coverage. Please reach out to us on WhatsApp before ordering to confirm shipping to your pincode.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Once your order details, preparation schedule, and delivery method are confirmed on WhatsApp, we accept standard UPI (Google Pay, PhonePe, Paytm) and direct bank transfers. We never ask for payments through the website.',
  },
];
