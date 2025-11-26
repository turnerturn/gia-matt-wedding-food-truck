const ConfirmationModal = ({ orderData, onClose, onStartNewOrder }) => {
  const generateOrderId = () => {
    return 'WED-' + Date.now().toString().slice(-6);
  };

  const orderId = generateOrderId();

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="confirmation-modal">
        <div className="confirmation-modal-header">
          <h2 id="modal-title">🎉 Order Confirmed!</h2>
          <div className="modal-order-id">
            <strong>Order ID: {orderId}</strong>
          </div>
        </div>

        <div className="confirmation-modal-body">
          <div className="modal-order-details">
            <p><strong>Name:</strong> {orderData.contactInfo.name}</p>
            <p><strong>Order Time:</strong> {orderData.orderTime}</p>
            <p>
              <strong>Contact:</strong>{' '}
              {orderData.contactInfo.contactMethod === 'email'
                ? orderData.contactInfo.email
                : orderData.contactInfo.phone}
            </p>
          </div>

          <div className="modal-items-ordered">
            <h3>Items Ordered:</h3>
            <ul>
              {orderData.items.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <p className="modal-total-items">
              <strong>Total Items: {orderData.totalItems}</strong>
            </p>
            <p className="modal-complimentary">Complimentary for wedding guests</p>
          </div>

          <div className="modal-wedding-message">
            <p>💒 Thank you for celebrating with us! 💒</p>
            <p>Your food will be prepared fresh and we'll notify you when it's ready.</p>
          </div>
        </div>

        <div className="confirmation-modal-footer">
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
          <button className="modal-new-order-btn" onClick={onStartNewOrder}>
            Place Another Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
