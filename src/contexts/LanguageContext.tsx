import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Locale } from '../locales';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'zh-CN',
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('imagetrust-locale') : null;
  const initial: Locale = (saved as Locale) || 'zh-CN';
  const [locale, setLocale] = useState<Locale>(initial);

  const handleSetLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem('imagetrust-locale', l);
    document.documentElement.lang = l === 'zh-TW' ? 'zh-TW' : l === 'en' ? 'en' : 'zh-CN';
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
