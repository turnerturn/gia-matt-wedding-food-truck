import { useState } from 'react';
import './App.css';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import MenuCard from './MenuCard';

// Maples 918 Food Truck Menu Items
const MENU_ITEMS = [
  {
    id: 1,
    name: "Birria Tacos",
    description: "Traditional slow-cooked beef birria served in corn tortillas with melted cheese, onions, and cilantro. Served with rich consommé for dipping.",
    image: "https://images.unsplash.com/photo-1613470208960-2c1d7fbe6a0f?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "3 Tacos with Rice & Beans",
    description: "Three authentic Mexican tacos with your choice of filling, served with seasoned Mexican rice and refried beans.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Burrito",
    description: "Large flour tortilla filled with seasoned meat, rice, beans, cheese, lettuce, and salsa. Wrapped to perfection.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Quesadilla with Rice & Beans",
    description: "Grilled flour tortilla filled with melted cheese and your choice of filling. Served with Mexican rice and refried beans.",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Nacho Fries",
    description: "Crispy seasoned fries topped with melted cheese sauce, jalapeños, sour cream, and your choice of meat.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Fajita Nachos",
    description: "Fresh tortilla chips loaded with sizzling fajita meat, melted cheese, peppers, onions, and all the classic toppings.",
    image: "https://images.unsplash.com/photo-1582169505219-11678ab6c493?w=400&h=300&fit=crop"
  }
];

function App() {
  const [currentView, setCurrentView] = useState('menu'); // 'menu', 'cart', 'checkout', 'confirmation'
  const [cartItems, setCartItems] = useState([]);
  const [orderData, setOrderData] = useState(null);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (!existingItem) {
      setCartItems([...cartItems, { ...item }]);
    }
  };  // Removed quantity management since each item is limited to one per guest

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
  };

  const submitOrder = (orderData) => {
    setOrderData(orderData);
    setCurrentView('confirmation');
  };

  const startNewOrder = () => {
    setCartItems([]);
    setOrderData(null);
    setCurrentView('menu');
  };

  const cartItemCount = cartItems.length;

  return (
    <div className="App">
      <header className="app-header">
        <div className="food-truck-logo">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66f1e52ace8c7e04adaa09dc/39bb669e-54dd-427d-a6ed-3e7c77eed766/f2453c50-5fc1-4d4b-afe9-9b49f2793267.png?format=1500w"
            alt="Maples 918 Food Truck"
            className="truck-logo"
          />
        </div>
        <h1>💒 Wedding Food Truck 💒</h1>
        <p className="wedding-subtitle">Celebrating Gia & Matt</p>
        <p className="catering-credit">Catering from Maples 918 Food Truck</p>

        {currentView !== 'confirmation' && (
          <nav className="app-nav">
            <button
              className={`nav-btn ${currentView === 'menu' ? 'active' : ''}`}
              onClick={() => setCurrentView('menu')}
            >
              Menu
            </button>
            <button
              className={`nav-btn ${currentView === 'cart' ? 'active' : ''}`}
              onClick={() => setCurrentView('cart')}
            >
              Cart ({cartItemCount})
            </button>
          </nav>
        )}
      </header>

      <main className="app-main">
        {currentView === 'menu' && (
          <div className="menu-view">
            <h2>Our Delicious Menu</h2>
            <div className="ordering-instructions">
              <h3>📋 Ordering Instructions</h3>
              <p><strong>Please order ONE item per guest.</strong></p>
              <p>Only add multiple items to your cart when ordering for your plus one.</p>
              <p>Fresh authentic Mexican food made with love for our wedding celebration!</p>
            </div>
            <div className="menu-grid">
              {MENU_ITEMS.map(item => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'cart' && (
          <Cart
            cartItems={cartItems}
            onRemoveItem={removeFromCart}
            onCheckout={handleCheckout}
          />
        )}

        {currentView === 'checkout' && (
          <Checkout
            cartItems={cartItems}
            onSubmitOrder={submitOrder}
            onBack={() => setCurrentView('cart')}
          />
        )}

        {currentView === 'confirmation' && orderData && (
          <Confirmation
            orderData={orderData}
            onStartNewOrder={startNewOrder}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for our special day</p>
      </footer>
    </div>
  );
}

export default App;
