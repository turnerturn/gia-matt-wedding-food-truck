# Wedding Food Truck Ordering App 💒

A beautiful, mobile-friendly React application for wedding guests to order food from your food truck! Built with love for your special day.

## Features

✨ **Complete Food Ordering Experience**
- Beautiful menu display with item cards
- Shopping cart functionality with quantity controls
- Secure checkout with contact information
- Order confirmation with tracking details
- Mobile-responsive design

🎯 **Wedding-Focused Features**
- Wedding-themed color scheme and design
- Guest contact collection (email or SMS)
- Order confirmation reminders
- Screenshots reminder for backup
- Personalized wedding messages

📱 **User Experience**
- Fully responsive design for all devices
- Smooth animations and hover effects
- Clear navigation and user feedback
- Accessibility-friendly interface

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd codespaces-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Customization

#### Update Menu Items
Edit the `MENU_ITEMS` array in `src/App.jsx` to match your food truck's actual menu:

```javascript
const MENU_ITEMS = [
  {
    id: 1,
    name: "Your Food Item",
    description: "Delicious description of your food",
    price: 12.99,
    image: "/path-to-your-image.jpg"
  },
  // Add more items...
];
```

#### Update Wedding Information
In `src/App.jsx`, update the wedding details:
- Replace `[Your Names]` with your actual names
- Replace `[Wedding Date]` with your wedding date

#### Add Food Images
1. Place your food images in the `public` folder
2. Update the `image` property in each menu item
3. For placeholder images, the app currently shows food emojis

## Deployment to GitHub Pages

This app is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Initial wedding food truck app"
git push origin main
```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Automatic Deployment:**
   - Every push to the `main` branch will trigger automatic deployment
   - Your app will be available at: `https://<your-username>.github.io/<repository-name>/`

### Manual Deployment
You can also deploy manually:
```bash
npm run build
# Upload the 'dist' folder to your web hosting service
```

## File Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Main styling
├── MenuCard.jsx         # Menu item display component
├── Cart.jsx             # Shopping cart component
├── Checkout.jsx         # Checkout form component
├── Confirmation.jsx     # Order confirmation component
└── index.jsx           # App entry point
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom responsive styling
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Free hosting

## Features Overview

### Menu Display
- Grid layout showing all available food items
- Hover effects and smooth animations
- Add to cart functionality
- Price display

### Shopping Cart
- View selected items with quantities
- Increase/decrease quantities
- Remove items
- Total calculation
- Proceed to checkout

### Checkout Process
- Customer information collection
- Choice between email or SMS contact
- Form validation
- Order summary

### Order Confirmation
- Unique order ID generation
- Complete order details display
- Contact confirmation tracking
- Screenshot reminder for backup
- Wedding celebration message

## Customization Tips

1. **Colors**: Update the CSS custom properties in `App.css` to match your wedding theme
2. **Fonts**: Change the font-family in the CSS for custom typography
3. **Images**: Replace placeholder images with actual food photos
4. **Content**: Update all wedding-specific text and messages

## Support

For questions or customization help, feel free to create an issue in this repository.

## License

MIT License - Feel free to use this for your wedding! 💕

---

**Made with ❤️ for your special day!**