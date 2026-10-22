export const LOCALES = ['en', 'fr', 'de', 'es', 'it', 'nl', 'pl', 'pt', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// hreflang / <html lang> values
export const HREFLANG: Record<Locale, string> = {
  en: 'en', fr: 'fr', de: 'de', es: 'es', it: 'it', nl: 'nl',
  pl: 'pl', pt: 'pt', zh: 'zh-Hans', ja: 'ja', ko: 'ko',
};

// og:locale values
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US', fr: 'fr_FR', de: 'de_DE', es: 'es_ES', it: 'it_IT', nl: 'nl_NL',
  pl: 'pl_PL', pt: 'pt_PT', zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR',
};

// Language names written in their own language (used in the switcher and the language list)
export const NATIVE_NAME: Record<Locale, string> = {
  en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español', it: 'Italiano',
  nl: 'Nederlands', pl: 'Polski', pt: 'Português', zh: '中文', ja: '日本語', ko: '한국어',
};

export interface Item { t: string; d: string }
export interface QA { q: string; a: string }

export interface Strings {
  metaTitle: string;
  metaDesc: string;
  skip: string;
  heroTitle: string;
  heroText: string;
  cta: string;
  ctaNote: string;
  demo: { mine: string; theirs: string; theirsLang: Locale; replyTheirs: string; replyMine: string };
  demoLabel: string;
  offlineBadge: string;
  stepsTitle: string;
  steps: Item[];
  featuresTitle: string;
  features: Item[];
  proTag: string;
  langsTitle: string;
  langsText: string;
  uiNote: string;
  pricingTitle: string;
  trial: Item;
  standard: { t: string; items: string[] };
  pro: { t: string; items: string[] };
  perWeek: string;
  perMonth: string;
  lifetime: string;
  priceNote: string;
  faqTitle: string;
  faq: QA[];
  privacy: string;
  contact: string;
  madeBy: string;
  langLabel: string;
}
