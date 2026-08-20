import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isSideNavOpen = signal(true);

  toggleSideNav() {
    this.isSideNavOpen.update((value) => !value);
  }

  openSideNav() {
    this.isSideNavOpen.set(true);
  }

  closeSideNav() {
    this.isSideNavOpen.set(false);
  }
}
