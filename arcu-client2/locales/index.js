"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Get active site from environment variable
const ACTIVE_SITE = process.env.NEXT_PUBLIC_SITE || 'arcudechelu';

// Dynamically import translations based on active site
let it, en, es, de, fr;

if (ACTIVE_SITE === 'sito2') {
  // Import sito2 translations
  it = require('./sito2/it').default;
  en = require('./sito2/en').default;
  es = require('./sito2/es').default;
  de = require('./sito2/de').default;
  fr = require('./sito2/fr').default;
} else if (ACTIVE_SITE === 'sito3') {
  // Import sito3 translations
  it = require('./sito3/it').default;
  en = require('./sito3/en').default;
  es = require('./sito3/es').default;
  de = require('./sito3/de').default;
  fr = require('./sito3/fr').default;
} else {
  // Default: import arcudechelu translations
  it = require('./it').default;
  en = require('./en').default;
  es = require('./es').default;
  de = require('./de').default;
  fr = require('./fr').default;
}

// Define available languages
export const languages = {
  it: 'Italiano',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français'
};

// Helper function to safely access nested objects with a fallback
const getNestedValue = (obj, path, fallback = null) => {
  try {
    return path.split('.').reduce((prev, curr) => {
      return prev && prev[curr] !== undefined ? prev[curr] : undefined;
    }, obj) || fallback;
  } catch (error) {
    return fallback;
  }
};

// Create a context for the language
const LanguageContext = createContext();

// Language provider component
export function LanguageProvider({ children }) {
  // Get initial language from localStorage if available, otherwise default to Italian
  const [language, setLanguage] = useState('it');
  const [translations, setTranslations] = useState(it);

  // Effect to load the saved language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'it';
    setLanguage(savedLanguage);
    loadTranslations(savedLanguage);
  }, []);

  // Helper function to load translations based on language code
  const loadTranslations = (lang) => {
    const translationMap = { it, en, es, de, fr };
    setTranslations(translationMap[lang] || it);
  };

  // Function to change the language
  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
      loadTranslations(lang);
      localStorage.setItem('language', lang);
    }
  };

  // Function to safely access translation strings
  const t = (key, fallback = `[${key}]`) => {
    const value = getNestedValue(translations, key, fallback);
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translations
export const availableTranslations = {
  it,
  en,
  es,
  de,
  fr
};

export default availableTranslations;