
const Cart = ({ cartItems, onRemoveItem, onCheckout }) => {
  const totalItems = cartItems.length;

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart</h2>
        <p>No items in cart yet. Add some delicious food!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Order</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image || '/placeholder-food.jpg'} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p className="cart-item-note">One serving per guest</p>
            </div>
            <div className="cart-item-controls">
              <button
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total Items: {totalItems}</h3>
        <p className="pricing-note">All food is complimentary for our wedding guests!</p>
        <button className="checkout-btn" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
