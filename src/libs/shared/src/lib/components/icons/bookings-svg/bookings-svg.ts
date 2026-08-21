import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'shared-bookings-svg',
  imports: [FontAwesomeModule],
  template: `
    <fa-icon [icon]="['fas', 'address-book']" class="icon" [class.active]="isActiveMenu()"/>
  `,
  styles: `
    .icon {
      color: #656c7b;
    }

    .icon.active {
      color: var(--primary);
    }
  `,
})
export class BookingsSvg {
  isActiveMenu = input<boolean>(false);
}
