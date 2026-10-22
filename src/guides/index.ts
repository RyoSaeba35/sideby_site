import type { Locale } from '../i18n';
import type { QA } from '../i18n/types';
import { DEFAULT_LOCALE } from '../i18n/types';
import type { Dest, DestLang } from './ui';
import japan from './japan';
import china from './china';
import korea from './korea';

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

export const DESTS: Dest[] = ['japan', 'china', 'korea'];
export const DEST_LANG: Record<Dest, DestLang> = { japan: 'ja', china: 'zh', korea: 'ko' };
export const GUIDES: Record<Dest, GuideContent> = { japan, china, korea };

export const guideExists = (d: Dest, l: Locale) => Boolean(GUIDES[d][l]);
export const guidePath = (l: Locale, d: Dest) => (l === DEFAULT_LOCALE ? `/${d}/` : `/${l}/${d}/`);
