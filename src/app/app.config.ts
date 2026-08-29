import { ApplicationConfig, importProvidersFrom, inject, LOCALE_ID, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { pendingRequestsInterceptor$ } from 'ng-http-loader';
import { provideTransloco, TranslocoService } from '@jsverse/transloco';
import { APP_CONFIG, errorTailorConfig, translocoConfiguration, TranslocoHttpLoader } from '@salon-crm/core';
import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { TemplatePageTitleStrategy } from '@salon-crm/shared';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import ar from '@angular/common/locales/ar';
import mr from '@angular/common/locales/mr';
import { provideErrorTailorConfig } from '@ngneat/error-tailor';
import {provideDaterangepickerLocale} from "ngx-daterangepicker-bootstrap";

registerLocaleData(ar);
registerLocaleData(mr);

export function preloadTranslations(transloco: TranslocoService) {
  return function () {
    const lang = transloco.getActiveLang() || 'en';
    transloco.setActiveLang(lang);
    return lastValueFrom(transloco.load(lang));
  };
}

export const preLoad = provideAppInitializer(() => {
  const initializerFn = preloadTranslations(inject(TranslocoService));
  return initializerFn();
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideDaterangepickerLocale({
      separator: ' - ',
      applyLabel: 'Okay',
    }),
    importProvidersFrom(NgbModule),
    provideHttpClient(
      withInterceptors([
        pendingRequestsInterceptor$,
      ]),
    ),
    provideTransloco({
      config: translocoConfiguration,
      loader: TranslocoHttpLoader,
    }),
    provideTranslocoPersistLang({
      storage: {
        useValue: localStorage,
      },
    }),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    preLoad,
    { provide: APP_CONFIG, useValue: environment },
    provideErrorTailorConfig(errorTailorConfig),
    {
      provide: LOCALE_ID,
      useFactory: (transloco: TranslocoService) => {
        const currentLang = transloco.getActiveLang() || 'en';
        // return currentLang === 'ar' ? 'ar' : 'en';
        switch (currentLang) {
          case 'ar':
            return 'ar';

          case 'mr':
            return 'mr';

          default:
            return 'en';
        }
      },
      deps: [TranslocoService],
    },
    provideEnvironmentNgxMask(),
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'mediumDate' },
    },
  ]
};
