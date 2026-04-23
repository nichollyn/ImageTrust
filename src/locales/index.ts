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
  // Site
  | 'site.brand'
  | 'site.tagline'
  | 'site.footerClaim'
  // Nav
  | 'nav.verify'
  | 'nav.learn'
  // Home
  | 'home.heroTitle'
  | 'home.heroSubtitle'
  | 'home.step1Title'
  | 'home.step1Desc'
  | 'home.step2Title'
  | 'home.step2Desc'
  | 'home.step3Title'
  | 'home.step3Desc'
  | 'home.infoBanner'
  // Uploader
  | 'uploader.dragHint'
  | 'uploader.clickOrDrag'
  | 'uploader.supportedFormats'
  | 'uploader.localProcessing'
  | 'uploader.dragHere'
  | 'uploader.clearImage'
  | 'uploader.dragTip'
  // EXIF
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
  // Search
  | 'search.title'
  | 'search.description'
  | 'search.googleName'
  | 'search.googleDesc'
  | 'search.yandexName'
  | 'search.yandexDesc'
  | 'search.tineyeName'
  | 'search.tineyeDesc'
  | 'search.actionTip'
  // Checklist
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
  // Learn
  | 'learn.heroTitle'
  | 'learn.heroSubtitle'
  | 'learn.canDoTitle'
  | 'learn.cannotDoTitle'
  | 'learn.warningTitle'
  | 'learn.warningText'
  | 'learn.casesTitle'
  | 'learn.casesSubtitle'
  // Case card
  | 'case.viewClues'
  | 'case.hideClues'
  | 'case.source'
  | 'case.readOriginal'
  // Cases
  | 'case.cook-xiaomi.title'
  | 'case.cook-xiaomi.desc'
  | 'case.cook-xiaomi.clue1'
  | 'case.cook-xiaomi.clue2'
  | 'case.cook-xiaomi.clue3'
  | 'case.cook-xiaomi.clue4'
  | 'case.fake-menu.title'
  | 'case.fake-menu.desc'
  | 'case.fake-menu.clue1'
  | 'case.fake-menu.clue2'
  | 'case.fake-menu.clue3'
  | 'case.fake-menu.clue4'
  | 'case.fake-id.title'
  | 'case.fake-id.desc'
  | 'case.fake-id.clue1'
  | 'case.fake-id.clue2'
  | 'case.fake-id.clue3'
  | 'case.fake-id.clue4'
  | 'case.fake-youtube.title'
  | 'case.fake-youtube.desc'
  | 'case.fake-youtube.clue1'
  | 'case.fake-youtube.clue2'
  | 'case.fake-youtube.clue3'
  | 'case.fake-youtube.clue4'
  | 'case.misleading-infographic.title'
  | 'case.misleading-infographic.desc'
  | 'case.misleading-infographic.clue1'
  | 'case.misleading-infographic.clue2'
  | 'case.misleading-infographic.clue3'
  | 'case.misleading-infographic.clue4'
  // Capabilities
  | 'capability.textRendering'
  | 'capability.uiReplication'
  | 'capability.photorealism'
  | 'capability.resolution4k'
  | 'capability.webSearch'
  | 'capability.consistentDesign'
  | 'capability.physics'
  | 'capability.timeline'
  | 'capability.smallText'
  | 'capability.multiPerson'
  | 'capability.longTermConsistency'
  // Footer
  | 'footer.disclaimer'
  | 'footer.disclaimerText'
  | 'footer.copyright';

export type Translations = Record<TranslationKey, string>;

export { zhCN } from './zh-CN';
export { en } from './en';
export { zhTW } from './zh-TW';
