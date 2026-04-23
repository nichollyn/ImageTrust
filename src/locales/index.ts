export type Locale = 'zh-CN' | 'en' | 'zh-TW';

export interface LocaleConfig {
  label: string;
}

export const localeConfigs: Record<Locale, LocaleConfig> = {
  'zh-CN': { label: '简体中文' },
  'en': { label: 'English' },
  'zh-TW': { label: '繁體中文' },
};

export const defaultLocale: Locale = 'zh-CN';

export type TranslationKey =
  | 'site.brand'
  | 'site.tagline'
  | 'site.footerClaim'
  | 'nav.verify'
  | 'nav.learn'
  | 'home.heroTitle'
  | 'home.heroSubtitle'
  | 'home.step1Title'
  | 'home.step1Desc'
  | 'home.step2Title'
  | 'home.step2Desc'
  | 'home.step3Title'
  | 'home.step3Desc'
  | 'home.infoBanner'
  | 'uploader.dragHint'
  | 'uploader.clickOrDrag'
  | 'uploader.supportedFormats'
  | 'uploader.localProcessing'
  | 'uploader.dragHere'
  | 'uploader.clearImage'
  | 'uploader.dragTip'
  | 'exif.title'
  | 'exif.camera'
  | 'exif.lens'
  | 'exif.dateTime'
  | 'exif.software'
  | 'exif.location'
  | 'exif.dimensions'
  | 'exif.noExifTitle'
  | 'exif.noExifDesc'
  | 'exif.hasExifTip'
  | 'exif.noExifTip'
  | 'search.title'
  | 'search.description'
  | 'search.googleName'
  | 'search.googleDesc'
  | 'search.yandexName'
  | 'search.yandexDesc'
  | 'search.tineyeName'
  | 'search.tineyeDesc'
  | 'search.actionTip'
  | 'checklist.title'
  | 'checklist.progress'
  | 'checklist.categorySource'
  | 'checklist.categoryContent'
  | 'checklist.categoryContext'
  | 'checklist.q1'
  | 'checklist.q1Tip'
  | 'checklist.q2'
  | 'checklist.q2Tip'
  | 'checklist.q3'
  | 'checklist.q3Tip'
  | 'checklist.q4'
  | 'checklist.q4Tip'
  | 'checklist.q5'
  | 'checklist.q5Tip'
  | 'checklist.q6'
  | 'checklist.q6Tip'
  | 'checklist.q7'
  | 'checklist.q7Tip'
  | 'checklist.q8'
  | 'checklist.q8Tip'
  | 'checklist.q9'
  | 'checklist.q9Tip'
  | 'checklist.q10'
  | 'checklist.q10Tip'
  | 'learn.heroTitle'
  | 'learn.heroSubtitle'
  | 'learn.canDoTitle'
  | 'learn.cannotDoTitle'
  | 'learn.warningTitle'
  | 'learn.warningText'
  | 'learn.casesTitle'
  | 'learn.casesSubtitle'
  | 'case.viewClues'
  | 'case.hideClues'
  | 'case.source'
  | 'case.readOriginal'
  | 'footer.disclaimer'
  | 'footer.disclaimerText'
  | 'footer.copyright';

export type Translations = Record<TranslationKey, string>;

export { zhCN } from './zh-CN';
export { en } from './en';
export { zhTW } from './zh-TW';
