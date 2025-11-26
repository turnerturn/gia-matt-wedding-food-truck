
const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="menu-card">
      <img src={item.image || '/placeholder-food.jpg'} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <div className="menu-item-footer">
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
