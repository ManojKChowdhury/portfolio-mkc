import { describe, it, expect } from 'vitest';
import { 
  navItems, 
  skillCategories, 
  projects, 
  experiences, 
  contactLinks 
} from '../portfolioData';

describe('Portfolio Data', () => {
  it('has valid nav items', () => {
    expect(navItems.length).toBeGreaterThan(0);
    navItems.forEach(item => {
      expect(item.label).toBeDefined();
      expect(item.id).toBeDefined();
    });
  });

  it('has valid skill categories and skills', () => {
    expect(skillCategories.length).toBeGreaterThan(0);
    skillCategories.forEach(category => {
      expect(category.title).toBeDefined();
      expect(category.skills.length).toBeGreaterThan(0);
      category.skills.forEach(skill => {
        expect(skill.name).toBeDefined();
        expect(skill.icon).toBeDefined();
      });
    });
  });

  it('has valid projects', () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach(project => {
      expect(project.title).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it('has valid experiences', () => {
    expect(experiences.length).toBeGreaterThan(0);
    experiences.forEach(exp => {
      expect(exp.title).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.period).toBeDefined();
      expect(exp.achievements.length).toBeGreaterThan(0);
    });
  });

  it('has valid contact links', () => {
    expect(contactLinks.length).toBeGreaterThan(0);
    contactLinks.forEach(link => {
      expect(link.label).toBeDefined();
      expect(link.href).toBeDefined();
      expect(link.icon).toBeDefined();
    });
  });
});
