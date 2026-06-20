import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../Experience';
import { experiences } from '../../data/portfolioData';

describe('Experience', () => {
  it('renders correctly', () => {
    render(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders all companies', () => {
    render(<Experience />);
    experiences.forEach(exp => {
      expect(screen.getAllByText(exp.company).length).toBeGreaterThan(0);
    });
  });

  it('allows clicking on a company to see details', () => {
    render(<Experience />);
    const secondExperience = experiences[1];
    const expandButton = screen.getAllByLabelText('Expand')[1];
    fireEvent.click(expandButton);

    // Check if achievements are visible
    secondExperience.achievements.forEach(achievement => {
      expect(screen.getByText(achievement)).toBeInTheDocument();
    });
  });
});
