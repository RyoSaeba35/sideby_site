import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this once you have bought the domain.
export const SITE = 'https://sidebytranslator.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en', fr: 'fr', de: 'de', es: 'es', it: 'it', nl: 'nl',
          pl: 'pl', pt: 'pt', zh: 'zh-Hans', ja: 'ja', ko: 'ko',
        },
      },
    }),
  ],
});
