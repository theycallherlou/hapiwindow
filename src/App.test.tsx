import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders welcome message', () => {
    render(<App />);
    const element = screen.getByText(/Welcome/i);
    expect(element).toBeInTheDocument();
  });
});
