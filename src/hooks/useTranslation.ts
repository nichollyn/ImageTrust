import { useLanguage } from '../contexts/LanguageContext';
import { zhCN } from '../locales/zh-CN';
import { en } from '../locales/en';
import { zhTW } from '../locales/zh-TW';
import type { TranslationKey, Locale } from '../locales';

const dicts: Record<Locale, Record<TranslationKey, string>> = {
  'zh-CN': zhCN,
  'en': en,
  'zh-TW': zhTW,
};

export function useTranslation() {
  const { locale, setLocale } = useLanguage();
  const dict = dicts[locale];

  const t = (key: TranslationKey, fallback?: string): string => {
    return dict[key] ?? fallback ?? key;
  };

  return { t, locale, setLocale };
}
