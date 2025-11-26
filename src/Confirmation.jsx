import { useEffect, useState } from 'react';

const Confirmation = ({ orderData, onStartNewOrder }) => {
  const [confirmationReceived, setConfirmationReceived] = useState(false);
  const [showScreenshotReminder, setShowScreenshotReminder] = useState(false);

  useEffect(() => {
    // Simulate sending confirmation (in a real app, this would be an API call)
    console.log('Sending confirmation to:', orderData.contactInfo);

    // Show screenshot reminder after 30 seconds
    const timer = setTimeout(() => {
      if (!confirmationReceived) {
        setShowScreenshotReminder(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [confirmationReceived, orderData]);

  const generateOrderId = () => {
    return 'WED-' + Date.now().toString().slice(-6);
  };

  const orderId = generateOrderId();

  return (
    <div className="confirmation">
      <div className="confirmation-header">
        <h1>🎉 Order Confirmed!</h1>
        <div className="order-id">
          <strong>Order ID: {orderId}</strong>
        </div>
      </div>

      <div className="order-details">
        <h2>Order Details</h2>
        <p><strong>Name:</strong> {orderData.contactInfo.name}</p>
        <p><strong>Order Time:</strong> {orderData.orderTime}</p>

        <div className="items-ordered">
          <h3>Items Ordered:</h3>
          {orderData.items.map(item => (
            <div key={item.id} className="confirmation-item">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="confirmation-total">
          <strong>Total: ${orderData.total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="contact-confirmation">
        <h3>Order Status Updates</h3>
        <p>
          We will send order status updates to your {orderData.contactInfo.contactMethod}:
        </p>
        <p className="contact-info">
          <strong>
            {orderData.contactInfo.contactMethod === 'email'
              ? orderData.contactInfo.email
              : orderData.contactInfo.phone}
          </strong>
        </p>

        <div className="confirmation-check">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={confirmationReceived}
              onChange={(e) => setConfirmationReceived(e.target.checked)}
            />
            I have received the confirmation {orderData.contactInfo.contactMethod === 'email' ? 'email' : 'text message'}
          </label>
        </div>
      </div>

      {showScreenshotReminder && !confirmationReceived && (
        <div className="screenshot-reminder">
          <div className="alert-box">
            <h4>⚠️ Important Reminder</h4>
            <p>
              If you haven't received your confirmation {orderData.contactInfo.contactMethod === 'email' ? 'email' : 'text'} yet,
              please <strong>take a screenshot of this confirmation page now</strong> so you can
              reference your order details later if needed.
            </p>
            <button
              className="dismiss-btn"
              onClick={() => setShowScreenshotReminder(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <div className="wedding-message">
        <h3>💒 Thank you for celebrating with us! 💒</h3>
        <p>
          We're so excited to share our special day with you. Your food will be prepared
          fresh and we'll notify you when it's ready for pickup at our food truck.
        </p>
      </div>

      <div className="confirmation-actions">
        <button className="new-order-btn" onClick={onStartNewOrder}>
          Place Another Order
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
