import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from '../LanguageSelector';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

describe('LanguageSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the current language flag', () => {
    render(<LanguageSelector />);
    expect(screen.getByText('🇬🇧')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(<LanguageSelector />);
    const button = screen.getByLabelText('Select language');
    fireEvent.click(button);
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', () => {
    render(
      <div>
        <LanguageSelector />
        <div data-testid="outside">Outside</div>
      </div>
    );
    const button = screen.getByLabelText('Select language');
    fireEvent.click(button);
    expect(screen.getByText('English')).toBeInTheDocument();
    
    const outside = screen.getByTestId('outside');
    fireEvent.mouseDown(outside);
    expect(screen.queryByText('English')).not.toBeInTheDocument();
  });
});

