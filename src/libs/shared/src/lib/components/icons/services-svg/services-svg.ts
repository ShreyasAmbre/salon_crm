import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'shared-services-svg',
  imports: [FontAwesomeModule],
  template: `
    <fa-icon [icon]="['fas', 'shop']" class="icon" [class.active]="isActiveMenu()"/>
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
export class ServicesSvg {
  isActiveMenu = input<boolean>(false);
}
