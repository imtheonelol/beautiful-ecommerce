# LUXEMART — Premium Shopping Experience

A beautiful, modern e-commerce website built as a single-file HTML application with embedded CSS and JavaScript. Features a sleek design with animations, product listings, shopping cart functionality, and responsive layout.

## Features

- 🎨 **Modern UI Design** - Clean, premium aesthetic with gradient colors and smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🛒 **Shopping Cart** - Add to cart, quantity adjustment, and real-time total calculation
- 🔍 **Product Search** - Live search functionality with filtering
- ⚡ **Quick View** - Instant product preview modal
- 🎯 **Categories** - Browse products by category (Electronics, Fashion, Beauty, Home)
- ⏰ **Deal Countdown** - Time-limited deals with live countdown timer
- 💳 **Checkout Flow** - Multi-step checkout process with form validation
- 🌟 **Animations** - Scroll reveal effects, hover animations, and custom cursor
- 🔄 **Preloader** - Elegant loading animation on page load
- 📬 **Toast Notifications** - User feedback for actions
- ⌨️ **Keyboard Shortcuts** - ESC key support for closing modals

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **JavaScript (Vanilla)** - No frameworks, pure JS functionality

## Getting Started

### Option 1: Direct Open
Simply open `index.html` in any modern web browser.

```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### Option 2: Local Server
For best experience, serve with a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html      # Main application (HTML + CSS + JS)
└── README.md       # This file
```

## Customization

### Colors
Edit the CSS variables in the `<style>` section to customize the theme:

```css
:root {
  --primary: #6c5ce7;      /* Primary brand color */
  --secondary: #00cec9;    /* Secondary color */
  --accent: #fd79a8;       /* Accent color */
  --dark: #0a0a1a;         /* Dark background */
  --light: #f8f9fa;        /* Light background */
}
```

### Products
Modify the `products` array in the JavaScript section to add or change products:

```javascript
const products = [
  {
    id: 1,
    name: "Product Name",
    price: 99.99,
    category: "electronics",
    image: "path/to/image.jpg",
    rating: 4.5,
    reviews: 128
  }
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript