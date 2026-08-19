import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  #title = inject(Title);
  defaultTitle = 'Salon CRM';
  constructor() {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      // const pageTitle = this.#translocoService.translate(title);
      // const suffix = this.#translocoService.translate('pageTitle.suffix');
      const pageTitle = title;
      const suffix = this.defaultTitle;
      const newTitle = `${pageTitle} | ${suffix}`;
      this.#title.setTitle(newTitle);
    } else {
      const pageTitle = this.defaultTitle;
      this.#title.setTitle(pageTitle);
    }
  }
}
