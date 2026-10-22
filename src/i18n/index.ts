import type { Locale, Strings } from './types';
import { LOCALES, DEFAULT_LOCALE } from './types';
import en from './en'; import fr from './fr'; import de from './de'; import es from './es';
import it from './it'; import nl from './nl'; import pl from './pl'; import pt from './pt';
import zh from './zh'; import ja from './ja'; import ko from './ko';

export * from './types';

export const STRINGS: Record<Locale, Strings> = { en, fr, de, es, it, nl, pl, pt, zh, ja, ko };

export const PACKAGE_ID = 'com.galernestudio.sideby';
export const CONTACT_EMAIL = 'galernestudio.support@proton.me';

const PLAY_HL: Record<Locale, string> = {
  en: 'en', fr: 'fr', de: 'de', es: 'es', it: 'it', nl: 'nl', pl: 'pl', pt: 'pt-PT', zh: 'zh-CN', ja: 'ja', ko: 'ko',
};
export const playUrl = (l: Locale) =>
  `https://play.google.com/store/apps/details?id=${PACKAGE_ID}&hl=${PLAY_HL[l]}`;

/** Path of the home page for a locale: English at the root, others under /xx/ */
export const homePath = (l: Locale) => (l === DEFAULT_LOCALE ? '/' : `/${l}/`);

/** Privacy policy path for a locale */
export const privacyPath = (l: Locale) => (l === DEFAULT_LOCALE ? '/privacy/' : `/${l}/privacy/`);

export const OTHER_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

const INTL: Record<Locale, string> = {
  en: 'en-IE', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', it: 'it-IT', nl: 'nl-NL', pl: 'pl-PL', pt: 'pt-PT', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR',
};
export const price = (l: Locale, v: number) =>
  new Intl.NumberFormat(INTL[l], { style: 'currency', currency: 'EUR' }).format(v);

export const PRICES = { stdWeek: 2.49, stdMonth: 4.99, proMonth: 6.99, proLife: 89.9 };
