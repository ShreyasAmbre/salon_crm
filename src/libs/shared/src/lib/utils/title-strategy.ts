import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  #title = inject(Title);
  #translocoService = inject(TranslocoService);
  constructor() {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      const pageTitle = this.#translocoService.translate(title);
      console.log("pageTitle", pageTitle);

      const suffix = this.#translocoService.translate('pageTitle.suffix');
      const newTitle = `${pageTitle} | ${suffix}`;
      this.#title.setTitle(newTitle);
    } else {
      const pageTitle = this.#translocoService.translate('pageTitle.defaultTitle');
      this.#title.setTitle(pageTitle);
    }
  }
}
