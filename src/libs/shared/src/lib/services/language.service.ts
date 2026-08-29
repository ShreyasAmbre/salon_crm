import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { delay, distinctUntilChanged, map, startWith } from 'rxjs';
import { injectLocalStorage } from 'ngxtension/inject-local-storage';
import { LanguageIdType, LANGUAGE_IDS, languageIdMap } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  #transloco = inject(TranslocoService);
  #destroyRef = inject(DestroyRef);
  #document = inject(DOCUMENT);
  #storedLanguageId = injectLocalStorage<LanguageIdType>('languageId', { defaultValue: LANGUAGE_IDS.ENGLISH });

  currentLanguage = toSignal(
    this.#transloco.langChanges$.pipe(
      startWith(this.#transloco.getActiveLang() || 'en'),
      distinctUntilChanged(),
    ),
    {
      initialValue: this.#transloco.getActiveLang() || 'en',
    },
  );

  isRtl = toSignal(
    this.#transloco.langChanges$.pipe(
      startWith(this.#transloco.getActiveLang() || 'en'),
      distinctUntilChanged(),
      map((lang) => lang === 'ar'),
    ),
  );

  initialize() {
    this.onLangChangeListener();
  }

  private onLangChangeListener() {
    this.#transloco.langChanges$
      .pipe(takeUntilDestroyed(this.#destroyRef), delay(300))
      .subscribe((lang) => {
        console.log({ lang });
        this.setDocumentLangDir(lang);
      });
  }

  private setDocumentLangDir(lang: string) {
    this.#document.documentElement.lang = lang;
    this.#document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.setLanguageId(lang);
  }

  get currentLang() {
    return this.#transloco.getActiveLang();
  }

  private setLanguageId(lang: string) {
    // const langId = lang === 'en' ? LANGUAGE_IDS.ENGLISH : LANGUAGE_IDS.ARABIC;
    // this.#storedLanguageId.set(langId);

    const languageId = languageIdMap[lang] ?? LANGUAGE_IDS.ENGLISH;

    this.#storedLanguageId.set(languageId);
  }

  getLanguageId() {
    return this.#storedLanguageId;
  }
}
