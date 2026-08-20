import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LangToggle, LanguageService, PublicBanner } from '@salon-crm/shared';
@Component({
  selector: 'shell-public-layout',
  imports: [RouterModule, PublicBanner, LangToggle],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {
  readonly #languageService = inject(LanguageService);

  constructor() {
    this.#languageService.initialize();
  }
}
