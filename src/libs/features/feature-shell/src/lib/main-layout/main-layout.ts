import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Footer, LanguageService } from '@salon-crm/shared';
import { MainHeader } from '../main-header/main-header';
import { MainSideNav } from '../main-side-nav/main-side-nav';
import { LayoutService } from '../data-access/services';

@Component({
  selector: 'shell-main-layout',
  imports: [RouterModule, MainHeader, MainSideNav, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  readonly #layout = inject(LayoutService);
  readonly #languageService = inject(LanguageService);
  // readonly #router = inject(Router);
  // readonly #route = inject(ActivatedRoute);

  isSideNavOpen = this.#layout.isSideNavOpen;
  headerTitle = signal<string>('');

  constructor() {
    this.#languageService.initialize();
  }
}
