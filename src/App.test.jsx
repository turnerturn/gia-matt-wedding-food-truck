import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wedding food truck header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wedding Food Truck/i);
  expect(linkElement).toBeDefined();
});
