import { translocoConfig } from '@jsverse/transloco';

export const translocoConfiguration = translocoConfig({
  availableLangs: ['en', 'ar', 'mr'],
  defaultLang: 'en',
  fallbackLang: 'en',
  reRenderOnLangChange: true,
  prodMode: false,
});
