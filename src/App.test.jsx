import { expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders menu title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Our Delicious Menu/i);
  expect(titleElement).toBeDefined();
});

test('displays menu items', () => {
  render(<App />);
  const birriaItem = screen.getByText(/Birria Tacos/i);
  expect(birriaItem).toBeDefined();
});

test('shows modal when item is added to cart', () => {
  render(<App />);
  
  // Find and click the first "Add to Cart" button
  const addToCartButtons = screen.getAllByText(/Add to Cart/i);
  fireEvent.click(addToCartButtons[0]);
  
  // Check that the modal appears with "Added to Cart!" message
  const modalText = screen.getByText(/Added to Cart!/i);
  expect(modalText).toBeDefined();
});

test('closes modal when continue shopping is clicked', () => {
  render(<App />);
  
  // Add item to cart to show modal
  const addToCartButtons = screen.getAllByText(/Add to Cart/i);
  fireEvent.click(addToCartButtons[0]);
  
  // Verify modal is shown
  expect(screen.getByText(/Added to Cart!/i)).toBeDefined();
  
  // Click continue shopping button
  const continueButton = screen.getByText(/Continue Shopping/i);
  fireEvent.click(continueButton);
  
  // Verify modal is closed (the text should no longer be visible)
  expect(screen.queryByText(/Added to Cart!/i)).toBeNull();
});

test('shows already in cart message when adding duplicate item', () => {
  render(<App />);
  
  // Find and click the first "Add to Cart" button
  const addToCartButtons = screen.getAllByText(/Add to Cart/i);
  fireEvent.click(addToCartButtons[0]);
  
  // Close the first modal
  const continueButton = screen.getByText(/Continue Shopping/i);
  fireEvent.click(continueButton);
  
  // Try to add the same item again
  fireEvent.click(addToCartButtons[0]);
  
  // Check that the modal shows "Already in Cart" message
  const alreadyInCartText = screen.getByText(/Already in Cart/i);
  expect(alreadyInCartText).toBeDefined();
});
