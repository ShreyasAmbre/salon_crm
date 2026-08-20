import { Component, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { NgbDropdownModule, NgbCollapseModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { LangToggle, LanguageService } from '@salon-crm/shared';
import { MainSideNav } from '../main-side-nav/main-side-nav';

@Component({
  selector: 'shell-main-header',
  imports: [
    TranslocoModule,
    LangToggle,
    NgbDropdownModule,
    NgbCollapseModule,
    FontAwesomeModule,
  ],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader {
  headerTitle = input.required<string>();

  readonly #offcanvasService = inject(NgbOffcanvas);
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);

  isRtl = this.#languageService.isRtl;
  isNavbarCollapsed = signal(true);
  isProfileCollapsed = signal(false);
  totalNotificationNumber = signal(1);

  toggleSideNav() {
    this.#offcanvasService.open(MainSideNav, {
      position: this.isRtl() ? 'end' : 'start',
      backdrop: true,
      keyboard: true,
      animation: true,
      panelClass: 'custom-offcanvas-sidenav',
    });
  }

  toggleNavbarVisibility() {
    this.isNavbarCollapsed.update((isVisible) => !isVisible);
  }

  toggleProfileVisibility() {
    this.isProfileCollapsed.update((isVisible) => !isVisible);
  }

  toggleNotificationVisibility() {
    console.log('Notification Visibility');
  }

  goToUserProfile() {
    // TODO: Profile Screen Development
    console.log("Go To Profile Clicked");
  }

  goToChangePassword() {
    // TODO: Change Password Screen Development
    console.log("Go To Change Password Clicked");
  }

  logout() {
    // TODO: Logout Auth Service  Development
    console.log("Logout");
    this.#router.navigate(['/']);
  }


}
