import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const Checkout = ({ cartItems, onSubmitOrder, onBack }) => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    contactMethod: 'email', // 'email' or 'sms'
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [submittedOrderData, setSubmittedOrderData] = useState(null);

  const totalItems = cartItems.length;

  const validateForm = () => {
    const newErrors = {};

    if (!contactInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (contactInfo.contactMethod === 'email') {
      if (!contactInfo.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else {
      if (!contactInfo.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(contactInfo.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const orderData = {
        items: cartItems,
        totalItems,
        contactInfo,
        orderTime: new Date().toLocaleString()
      };
      setSubmittedOrderData(orderData);
      setShowModal(true);
    }
  };

  const handleModalAction = () => {
    setShowModal(false);
    if (submittedOrderData) {
      onSubmitOrder(submittedOrderData);
    }
  };

  return (
    <div className="checkout">
      <button className="back-btn" onClick={onBack}>← Back to Cart</button>

      <h2>Checkout</h2>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>✓</span>
          </div>
        ))}
        <div className="checkout-total">
          <strong>Total Items: {totalItems}</strong>
          <p>Complimentary for wedding guests</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            value={contactInfo.name}
            onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Preferred Contact Method *</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="email"
                checked={contactInfo.contactMethod === 'email'}
                onChange={(e) => setContactInfo({...contactInfo, contactMethod: e.target.value})}
              />
              Email
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="sms"
                checked={contactInfo.contactMethod === 'sms'}
                onChange={(e) => setContactInfo({...contactInfo, contactMethod: e.target.value})}
              />
              SMS/Text
            </label>
          </div>
        </div>

        {contactInfo.contactMethod === 'email' ? (
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
              placeholder="your.email@example.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
              placeholder="(555) 123-4567"
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
        )}

        <button type="submit" className="submit-order-btn">
          Submit Order
        </button>
      </form>

      {showModal && submittedOrderData && (
        <ConfirmationModal
          orderData={submittedOrderData}
          onClose={handleModalAction}
          onStartNewOrder={handleModalAction}
        />
      )}
    </div>
  );
};

export default Checkout;
