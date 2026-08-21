import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'shared-settings-svg',
  imports: [FontAwesomeModule],
  template: `
    <fa-icon [icon]="['fas', 'sliders']" class="icon" [class.active]="isActiveMenu()"/>
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
export class SettingsSvg {
  isActiveMenu = input<boolean>(false);
}
