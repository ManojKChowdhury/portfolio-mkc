import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TechnicalSkills from '../TechnicalSkills';
import { skillCategories } from '../../data/portfolioData';

describe('TechnicalSkills', () => {
  it('renders correctly', () => {
    render(<TechnicalSkills />);
    expect(screen.getByText("Technologies I've Worked With")).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<TechnicalSkills />);
    skillCategories.forEach(category => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
    });
  });

  it('renders all skills in categories', () => {
    render(<TechnicalSkills />);
    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        // Find by alt text or title
        const images = screen.getAllByAltText(skill.name);
        expect(images.length).toBeGreaterThan(0);
        expect(screen.getAllByText(skill.name).length).toBeGreaterThan(0);
      });
    });
  });
});
