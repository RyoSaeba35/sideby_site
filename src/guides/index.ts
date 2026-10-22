import type { Locale } from '../i18n';
import type { QA } from '../i18n/types';
import { DEFAULT_LOCALE } from '../i18n/types';
import type { Dest, DestLang } from './ui';
import japan from './japan';
import china from './china';
import korea from './korea';
import { france, italy, spain, germany } from './europe';
import { GUIDE_UI, DEST_PHRASES } from './ui';

export * from './ui';

export interface GuidePage {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  whyTitle: string;
  why: string[];
  note?: { t: string; d: string };
  faq: QA[];
}
export type GuideContent = Partial<Record<Locale, GuidePage>>;

export const DESTS: Dest[] = ['japan', 'china', 'korea', 'france', 'italy', 'spain', 'germany'];
export const DEST_LANG: Record<Dest, DestLang> = { japan: 'ja', china: 'zh', korea: 'ko', france: 'fr', italy: 'it', spain: 'es', germany: 'de' };
export const GUIDES: Record<Dest, GuideContent> = { japan, china, korea, france, italy, spain, germany };

/** Phrases in the destination language: Asian ones with romanization, European ones as written */
export const phrasesFor = (d: Dest) =>
  DEST_PHRASES[d] ?? GUIDE_UI[DEST_LANG[d] as Locale].phrases.map((native) => ({ native, roman: '' }));

export const guideExists = (d: Dest, l: Locale) => Boolean(GUIDES[d][l]);
export const guidePath = (l: Locale, d: Dest) => (l === DEFAULT_LOCALE ? `/${d}/` : `/${l}/${d}/`);
