import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import FloatingNav from '../FloatingNav';
import { navItems } from '../../data/portfolioData';

describe('FloatingNav', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
  });

  it('renders all navigation items', () => {
    render(<FloatingNav />);
    navItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('scrolls to top when Home is clicked', () => {
    render(<FloatingNav />);
    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('scrolls to element when a nav item is clicked', () => {
    // Mock getElementById
    const mockElement = {
      getBoundingClientRect: () => ({ top: 500 }),
    };
    const getElementSpy = vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);
    
    // Mock window.pageYOffset
    Object.defineProperty(window, 'pageYOffset', { value: 100, writable: true });

    render(<FloatingNav />);
    const projectsButton = screen.getByText('Projects');
    fireEvent.click(projectsButton);

    // elementPosition (500) + window.pageYOffset (100) - offset (80) = 520
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 520,
      behavior: 'smooth',
    });

    getElementSpy.mockRestore();
  });
});
