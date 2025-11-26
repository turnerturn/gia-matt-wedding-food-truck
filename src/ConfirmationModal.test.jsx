import { expect, test, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationModal from './ConfirmationModal';

describe('ConfirmationModal', () => {
  const mockOrderData = {
    items: [
      { id: 1, name: 'Birria Tacos' },
      { id: 2, name: 'Burrito' }
    ],
    totalItems: 2,
    contactInfo: {
      name: 'John Doe',
      contactMethod: 'email',
      email: 'john@example.com',
      phone: ''
    },
    orderTime: '1/1/2024, 12:00:00 PM'
  };

  const mockOnClose = () => {};
  const mockOnStartNewOrder = () => {};

  test('renders confirmation modal with order details', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText(/Order Confirmed!/i)).toBeDefined();
    expect(screen.getByText(/John Doe/)).toBeDefined();
    expect(screen.getByText('Birria Tacos')).toBeDefined();
    expect(screen.getByText('Burrito')).toBeDefined();
  });

  test('displays customer contact information for email', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText(/john@example.com/)).toBeDefined();
  });

  test('displays customer contact information for phone', () => {
    const phoneOrderData = {
      ...mockOrderData,
      contactInfo: {
        ...mockOrderData.contactInfo,
        contactMethod: 'sms',
        phone: '555-123-4567'
      }
    };

    render(
      <ConfirmationModal
        orderData={phoneOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText(/555-123-4567/)).toBeDefined();
  });

  test('displays order time', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText(/1\/1\/2024, 12:00:00 PM/)).toBeDefined();
  });

  test('displays total items count', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText(/Total Items: 2/)).toBeDefined();
  });

  test('renders Close button', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText('Close')).toBeDefined();
  });

  test('renders Place Another Order button', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    expect(screen.getByText('Place Another Order')).toBeDefined();
  });

  test('has correct accessibility attributes', () => {
    render(
      <ConfirmationModal
        orderData={mockOrderData}
        onClose={mockOnClose}
        onStartNewOrder={mockOnStartNewOrder}
      />
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toBeDefined();
    expect(modal.getAttribute('aria-modal')).toBe('true');
  });
});
