import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../services';
// import { LanguageService } from '../../services';

@Component({
  selector: 'shared-lang-toggle',
  imports: [NgbDropdownModule],
  template: `
    <div ngbDropdown class="lang-toggle-wrapper" placement="bottom-end">
      <button
        ngbDropdownToggle
        type="button"
        class="btn p-0 border-0 bg-transparent shadow-none"
        aria-label="Language selector"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 22.917c5.753 0 10.417-4.664 10.417-10.417S18.253 2.083 12.5 2.083 2.083 6.747 2.083 12.5 6.747 22.917 12.5 22.917Z"
            stroke="#718ebf"
            stroke-width="1.5"
            stroke-linecap="square"
          />
          <path
            d="M12.5 22.917q4.167-3.789 4.167-10.417T12.5 2.083Q8.333 5.872 8.333 12.5q0 6.63 4.167 10.417ZM2.604 9.375h19.792m-19.792 6.25h19.792"
            stroke="#718ebf"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div ngbDropdownMenu [class]="isRtl() ? 'dropdown-menu-start' : 'dropdown-menu-end'">
        <button
          ngbDropdownItem
          (click)="changeLang('en')"
          class="l-text-start"
          [class.active]="currentLang === 'en'"
        >
          English
        </button>

        <button
          ngbDropdownItem
          (click)="changeLang('ar')"
          class="l-text-start"
          [class.active]="currentLang === 'ar'"
        >
          عربي
        </button>
      </div>
    </div>
  `,
  styleUrl: './lang-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangToggle {
  #transloco = inject(TranslocoService);
  #languageService = inject(LanguageService);

  isRtl = this.#languageService.isRtl;

  get currentLang() {
    return this.#transloco.getActiveLang();
  }

  changeLang(lang: 'en' | 'ar') {
    console.log({ lang });
    this.#transloco.setActiveLang(lang);
  }
}
