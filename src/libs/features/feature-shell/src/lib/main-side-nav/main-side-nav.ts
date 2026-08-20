import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from '../data-access/services';
import { LoadSidemenuIcons, SIDE_NAV_ITEMS, SideNavItem } from '@salon-crm/shared';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'shell-main-side-nav',
  imports: [RouterModule, TranslocoModule, LoadSidemenuIcons],
  templateUrl: './main-side-nav.html',
  styleUrl: './main-side-nav.scss',
})
export class MainSideNav {
  readonly #layout = inject(LayoutService);
  readonly #router = inject(Router);

  isSideNavOpen = this.#layout.isSideNavOpen;
  openMenuId = signal<string | null>('dashboard');
  navItems = signal<SideNavItem[]>(SIDE_NAV_ITEMS);

  toggleSideNav() {
    this.#layout.toggleSideNav();
  }

  toggleMenu(id: string) {
    this.openMenuId.update((current) => (current === id ? null : id));
  }

  navigateToDashboard(){
    this.#router.navigate(['/dashboard']);
  }
}
