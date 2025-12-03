"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/locales';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle language change
  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-natural-700 hover:text-bnb-600 transition-colors p-1 rounded-full"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
        <span className="text-xs uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg border border-natural-200 overflow-hidden z-50">
          <div className="py-1">
            <button
              onClick={() => handleChangeLanguage('it')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'it' ? 'text-bnb-600 font-medium bg-natural-50' : 'text-natural-700 hover:bg-natural-50'
                } transition-colors`}
            >
              Italiano
            </button>
            <button
              onClick={() => handleChangeLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-bnb-600 font-medium bg-natural-50' : 'text-natural-700 hover:bg-natural-50'
                } transition-colors`}
            >
              English
            </button>
            <button
              onClick={() => handleChangeLanguage('es')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'es' ? 'text-bnb-600 font-medium bg-natural-50' : 'text-natural-700 hover:bg-natural-50'
                } transition-colors`}
            >
              Español
            </button>
            <button
              onClick={() => handleChangeLanguage('de')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'de' ? 'text-bnb-600 font-medium bg-natural-50' : 'text-natural-700 hover:bg-natural-50'
                } transition-colors`}
            >
              Deutsch
            </button>
            <button
              onClick={() => handleChangeLanguage('fr')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'fr' ? 'text-bnb-600 font-medium bg-natural-50' : 'text-natural-700 hover:bg-natural-50'
                } transition-colors`}
            >
              Français
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 