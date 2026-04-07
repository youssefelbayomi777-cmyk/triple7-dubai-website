import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar Component', () => {
  it('renders the brand logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('TRIPLE')).toBeInTheDocument();
  });

  it('toggles mobile menu and correct ARIA attributes', () => {
    render(<Navbar />);
    
    // Only query the mobile menu button
    const toggleButton = screen.getByLabelText(/Toggle navigation menu/i);
    expect(toggleButton).toBeInTheDocument();
    
    // Initially closed
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    
    // Click to open
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });
});
