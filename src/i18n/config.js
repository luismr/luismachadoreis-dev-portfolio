import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import ptBRTranslations from './locales/pt-BR.json';
import esTranslations from './locales/es.json';

// Function to normalize browser language to our supported languages
const normalizeLanguage = (lng) => {
  if (!lng) return 'en';
  
  // Normalize to language code only (remove region if present)
  const langCode = lng.split('-')[0].toLowerCase();
  
  // Map Portuguese variants to pt-BR
  if (langCode === 'pt') {
    return 'pt-BR';
  }
  // Map Spanish variants to es
  if (langCode === 'es') {
    return 'es';
  }
  // Map English variants to en
  if (langCode === 'en') {
    return 'en';
  }
  // Default to English for any other language
  return 'en';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      'pt-BR': {
        translation: ptBRTranslations,
      },
      pt: {
        translation: ptBRTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR', 'pt', 'es'],
    detection: {
      // Order of detection methods: check localStorage first (user preference), then browser language
      order: ['localStorage', 'navigator'],
      // Cache user language preference
      caches: ['localStorage'],
      // Lookup key in localStorage
      lookupLocalStorage: 'i18nextLng',
      // Check all navigator language properties
      lookupFromNavigator: 'language',
      // Check navigator.languages array as well
      checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Function to detect and apply language from navigator (works with Locale Switcher extension)
const detectAndApplyLanguage = () => {
  const userSelectedLang = localStorage.getItem('i18nextLng');
  
  // If no user selection, detect from navigator (Locale Switcher modifies navigator.language)
  if (!userSelectedLang) {
    // Get current browser language - Locale Switcher modifies navigator.language
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    const normalized = normalizeLanguage(browserLang);
    
    // Only change if different from current
    if (normalized !== i18n.language) {
      i18n.changeLanguage(normalized);
    }
  } else {
    // User has selected a language, but still normalize it
    const normalized = normalizeLanguage(userSelectedLang);
    if (normalized !== userSelectedLang && normalized !== i18n.language) {
      i18n.changeLanguage(normalized);
    }
  }
};

// Normalize the detected language on initial load
// Use setTimeout to ensure Locale Switcher extension has modified navigator.language
i18n.on('initialized', () => {
  // Small delay to allow Locale Switcher extension to modify navigator.language
  setTimeout(() => {
    detectAndApplyLanguage();
  }, 100);
});

// Re-detect language when page becomes visible (helps with Locale Switcher extension)
// The extension changes navigator.language, so we check it when the page becomes visible
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      // Small delay to ensure extension has updated navigator.language
      setTimeout(() => {
        detectAndApplyLanguage();
      }, 50);
    }
  });
  
  // Also listen for focus events (when user switches back to the tab)
  window.addEventListener('focus', () => {
    setTimeout(() => {
      detectAndApplyLanguage();
    }, 50);
  });
}

export default i18n;

