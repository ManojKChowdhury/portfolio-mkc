import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../Projects';
import { projects } from '../../data/portfolioData';

describe('Projects', () => {
  it('renders correctly', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders all projects', () => {
    render(<Projects />);
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('renders project tags', () => {
    render(<Projects />);
    projects.forEach(project => {
      project.tags.forEach(tag => {
        // Tags might be repeated across projects, so we just check if they exist
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
      });
    });
  });
});
