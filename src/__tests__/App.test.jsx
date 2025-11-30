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
        'projects.pudim.title': 'pudim.dev',
        'projects.pudim.description': 'Test description',
        'projects.carimbo.title': 'carimbo.vip',
        'projects.carimbo.description': 'Test description',
        'projects.singularideas.title': 'singularideas.com.br',
        'projects.singularideas.description': 'Test description',
        'projects.github.title': 'GitHub',
        'projects.github.description': 'Test description',
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
    const socialLinks = screen.getAllByText('GitHub');
    expect(socialLinks.length).toBeGreaterThan(0);
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('renders sections', () => {
    render(<App />);
    expect(screen.getByText('What I Do')).toBeInTheDocument();
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders all projects', () => {
    render(<App />);
    expect(screen.getByText('pudim.dev')).toBeInTheDocument();
    expect(screen.getByText('carimbo.vip')).toBeInTheDocument();
    expect(screen.getByText('singularideas.com.br')).toBeInTheDocument();
    // GitHub appears in both social links and projects, so check for project card
    const githubElements = screen.getAllByText('GitHub');
    expect(githubElements.length).toBeGreaterThanOrEqual(2); // At least social link and project
  });

  it('renders project links with correct URLs', () => {
    render(<App />);
    const pudimLink = screen.getByText('pudim.dev').closest('a');
    const carimboLink = screen.getByText('carimbo.vip').closest('a');
    const singularideasLink = screen.getByText('singularideas.com.br').closest('a');
    
    // GitHub appears in both social links and projects, find the project card link
    const githubLinks = screen.getAllByText('GitHub');
    const githubProjectLink = githubLinks.find(link => {
      const parent = link.closest('a');
      return parent && parent.classList.contains('project-card');
    })?.closest('a');

    expect(pudimLink).toHaveAttribute('href', 'https://pudim.dev');
    expect(carimboLink).toHaveAttribute('href', 'https://carimbo.vip');
    expect(singularideasLink).toHaveAttribute('href', 'https://singularideas.com.br');
    expect(githubProjectLink).toHaveAttribute('href', 'https://github.com/luismr');
  });

  it('renders project images', () => {
    render(<App />);
    const images = screen.getAllByRole('img');
    const projectImages = images.filter(img => 
      img.getAttribute('src')?.includes('pudim-dev.svg') ||
      img.getAttribute('src')?.includes('carimbo-vip.png') ||
      img.getAttribute('src')?.includes('singularideas-com-br.png') ||
      img.getAttribute('src')?.includes('github.png')
    );
    expect(projectImages.length).toBe(4);
  });

  it('renders project descriptions', () => {
    render(<App />);
    const descriptions = screen.getAllByText('Test description');
    // Should have 4 project descriptions
    expect(descriptions.length).toBeGreaterThanOrEqual(4);
  });

  it('renders visit site links for all projects', () => {
    render(<App />);
    const visitSiteLinks = screen.getAllByText('Visit site →');
    expect(visitSiteLinks.length).toBe(4);
  });
});

