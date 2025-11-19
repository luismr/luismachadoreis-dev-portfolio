import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        'hero.greeting': 'Hello, I\'m',
        'hero.subtitle': 'Strategic Software Architect · Tech Leader · Engineering Manager',
        'hero.location': '📍 Santa Catarina, Brazil',
        'hero.locationDot': '•',
        'hero.workingGlobally': 'Working globally 🌎',
        'hero.summary': 'Test summary',
        'hero.viewResume': 'View Resume',
        'hero.connectLinkedIn': 'Connect on LinkedIn',
        'profile.role1': 'Software Engineering Manager · Sears',
        'profile.role2': 'Senior Software Specialist · Singular Ideas',
        'sections.whatIDo': 'What I Do',
        'sections.featuredProjects': 'Featured Projects',
        'whatIDo.engineeringLeadership.title': '🏗️ Engineering Leadership',
        'whatIDo.engineeringLeadership.description': 'Test description',
        'whatIDo.cloudSystems.title': '☁️ Cloud & Real-Time Systems',
        'whatIDo.cloudSystems.description': 'Test description',
        'whatIDo.innovationDevOps.title': '🚀 Innovation & DevOps',
        'whatIDo.innovationDevOps.description': 'Test description',
        'whatIDo.pudimMastery.title': '🍮 Pudim Mastery',
        'whatIDo.pudimMastery.description': 'Test description',
        'projects.pudim.title': '🍮 pudim.dev',
        'projects.pudim.description': 'Test description',
        'projects.carimbo.title': 'carimbo.vip',
        'projects.carimbo.description': 'Test description',
        'projects.visitSite': 'Visit site →',
        'footer.copyright': '© 2024 Luis Machado Reis · Built with React ·',
        'footer.github': '@luismr',
      };
      return translations[key] || key;
    },
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    const headings = screen.getAllByText('Luis Machado Reis');
    expect(headings.length).toBeGreaterThan(0);
    expect(headings[0]).toBeInTheDocument();
  });

  it('renders the profile card', () => {
    render(<App />);
    expect(screen.getByText('Software Engineering Manager · Sears')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Specialist · Singular Ideas')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<App />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('renders sections', () => {
    render(<App />);
    expect(screen.getByText('What I Do')).toBeInTheDocument();
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });
});

