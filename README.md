# Petals by Shravani 🌷
> *“Little blooms, made with love.”*

A boutique e-commerce web application dedicated to handcrafted pipe-cleaner (chenille stem) flowers, mini flower pots, floral keychains, and bespoke gifts in Pune, India.

---

## 🌸 Live Website Access

The development server is live and running locally on your computer:

- **Local Address:** [http://localhost:5173/](http://localhost:5173/)
- **Network (Mobile / Tablet on the same Wi-Fi):** `http://10.62.168.191:5173/`

Simply click the link above or open `http://localhost:5173/` in your browser!

---

## ✨ Features Built & Ready to Use

1. **Sticky Boutique Navigation Bar**:
   - Handcrafted floral emblem & boutique wordmark.
   - Smooth navigation: *Home, Shop Flowers, Custom Gifts, Our Story, FAQ, Contact*.
   - Live interactive search modal (filter by flower name, category, or color).
   - Wishlist drawer with live counter badge & move-to-cart action.
   - Shopping bag slide-out drawer with live count, quantity stepper, and subtotal.
   - **The Cute Custom Notification System**: Dusty-pink circular button with an integrated handmade daisy, animated shimmering petal indicator, unread berry badge, and customizable flower notes.

2. **Editorial Hero Section**:
   - Large arrangement of realistic pipe-cleaner blooms framing the edges.
   - Soft cream overlay for optimal contrast.
   - Headline: *“Tiny Flowers. Endless Feelings.”*
   - Floating card: *“Made by hand, just for you ♡”*
   - Direct CTA buttons: *“Shop the Blooms”* and *“Create a Custom Gift”*.

3. **Shop by Category**:
   - 6 category cards: Single Flowers, Mini Bouquets, Flower Pots, Flower Keychains, Cherry Keychains, and Custom Gifts.
   - Clicking any category filters the product catalog and scrolls smoothly.

4. **Featured Products Catalog (INR ₹)**:
   - Pink Daisy (`₹199`)
   - Sunshine Sunflower (`₹249`)
   - Mini Tulip (`₹229`)
   - Pastel Mini Bouquet (`₹649`)
   - Handmade Flower Pot (`₹799`)
   - Flower Keychain (`₹179`)
   - Cherry Keychain (`₹199`)
   - Custom Mini Bouquet (`₹849`)

5. **Interactive Product Detail View**:
   - High-res photography of handmade pipe-cleaner craft with chenille texture.
   - Interactive color palette selector.
   - Quantity stepper and customisation notes.
   - Preparation time indicator.
   - “Add to Bag” & “Buy via WhatsApp” (prefilled message generator).

6. **Interactive Custom Gift Builder (“Make Something Just for Them ♡”)**:
   - Step 1: Flower type (Tulips, Daisies, Sunflowers, Roses, Cherries, Mixed).
   - Step 2: Preferred color theme.
   - Step 3: Number of stems / bouquet size.
   - Step 4: Gift wrapping style (Vintage Kraft, Pastel Pink, Frosted, Ceramic Pot).
   - Step 5: Occasion (Birthday, Friendship, Anniversary, Thank You, Just Because).
   - Step 6: Budget range & personalized handwritten gift note.
   - Live preview card & “Send My Custom Request” button that opens WhatsApp with a formatted summary.

7. **Our Story**:
   - Sincere, warm narrative of *Petals by Shravani*.
   - Real behind-the-scenes photograph of artisan hands shaping fuzzy chenille stems.

8. **Instagram Gallery**:
   - Direct connection to [@petals_by_shravani_](https://www.instagram.com/petals_by_shravani_/).

9. **FAQ Accordion**:
   - 7 honest questions & answers covering handmade craft, color customization, preparation time, Pune delivery, and UPI payments.

10. **Contact Form & Footer**:
    - Form validation with friendly feedback.
    - Direct WhatsApp chat link.
    - Pune craft studio location label.
    - Privacy Policy & Terms modals.

---

## 🛠️ How to Customize Your Business Details

All your store settings, prices, and contact details are stored in one central file:
📁 **`src/config/businessConfig.ts`**

### 1. Update Contact Details
In `src/config/businessConfig.ts`, your phone and email are already configured:
```typescript
whatsappNumber: '917276669806',
whatsappDisplayNumber: '+91 72766 69806',
email: 'shravanilohote@gmail.com',
```

### 2. Update Prices & Add New Products
In `src/config/businessConfig.ts`, look for the `PRODUCTS` array. You can adjust prices, titles, colors, and preparation times:
```typescript
{
  id: 'pink-daisy',
  name: 'Pink Daisy',
  price: 199, // change price in INR
  colors: ['Blush Pink', 'Cream White', 'Soft Lavender'],
  preparationTime: '1–2 days',
  ...
}
```

### 3. Replace Images with Your Own Photographs
All product photos are located in:
📁 **`public/images/products/`**
- `pink-daisy.jpg`
- `sunshine-sunflower.jpg`
- `mini-tulip.jpg`
- `pastel-mini-bouquet.jpg`
- `handmade-flower-pot.jpg`
- `flower-keychain.jpg`
- `cherry-keychain.jpg`
- `custom-mini-bouquet.jpg`

Simply drop your new photo in that folder with the same name, or update the `image` path in `businessConfig.ts`!

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
