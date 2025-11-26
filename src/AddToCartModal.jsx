const AddToCartModal = ({ item, alreadyInCart, onClose }) => {
  if (!item) return null;

  return (
    <div className="add-to-cart-modal-overlay" onClick={onClose}>
      <div className="add-to-cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className={`success-icon ${alreadyInCart ? 'info-icon' : ''}`}>
            {alreadyInCart ? 'ℹ' : '✓'}
          </span>
          <h3 className={alreadyInCart ? 'info-title' : ''}>
            {alreadyInCart ? 'Already in Cart' : 'Added to Cart!'}
          </h3>
        </div>
        <div className="modal-content">
          <img 
            src={item.image || '/placeholder-food.jpg'} 
            alt={item.name} 
            className="modal-item-image" 
          />
          <h4 className="modal-item-name">{item.name}</h4>
          {alreadyInCart ? (
            <p className="modal-item-description">This item is already in your cart. Each guest is limited to one of each item.</p>
          ) : (
            <p className="modal-item-description">{item.description}</p>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-continue-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
