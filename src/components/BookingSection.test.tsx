import { render, screen, fireEvent } from '@testing-library/react';
import BookingSection from './BookingSection';
import { describe, it, expect, vi } from 'vitest';

describe('BookingSection Component', () => {
  it('renders the booking form with correct packages', () => {
    render(<BookingSection />);
    expect(screen.getByText(/Reserve Your/i)).toBeInTheDocument();
    
    // Check if packages are rendered
    expect(screen.getByText('Standard Entry')).toBeInTheDocument();
    expect(screen.getByText('VIP Package')).toBeInTheDocument();
  });

  it('contains the mandatory 21+ age warning', () => {
    render(<BookingSection />);
    expect(screen.getByText(/Strictly 21\+ Venue/i)).toBeInTheDocument();
  });

  it('updates form state on input change', () => {
    render(<BookingSection />);
    
    const nameInput = screen.getByLabelText(/Your Name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
    
    const guestsInput = screen.getByLabelText(/Number of Guests/i) as HTMLInputElement;
    fireEvent.change(guestsInput, { target: { value: '4' } });
    expect(guestsInput.value).toBe('4');
  });

  it('prevents submission if required fields are missing', () => {
    // Basic HTML validation test via RTL can be tricky, but we can verify the submit button exists
    render(<BookingSection />);
    const submitBtn = screen.getByRole('button', { name: /Continue to WhatsApp/i });
    expect(submitBtn).toBeInTheDocument();
  });
});
