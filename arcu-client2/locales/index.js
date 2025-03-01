"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import it from './it';
import en from './en';

// Define available languages
export const languages = {
  it: 'Italiano',
  en: 'English'
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
    setTranslations(savedLanguage === 'it' ? it : en);
  }, []);

  // Function to change the language
  const changeLanguage = (lang) => {
    if (lang === 'it' || lang === 'en') {
      setLanguage(lang);
      setTranslations(lang === 'it' ? it : en);
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
  en
};

export default availableTranslations; 