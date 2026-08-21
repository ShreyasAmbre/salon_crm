import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'shared-category-svg',
  imports: [FontAwesomeModule],
  template: `
    <fa-icon [icon]="['fas', 'layer-group']" class="icon" [class.active]="isActiveMenu()"/>
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
export class CategorySvg {
  isActiveMenu = input<boolean>(false);
}
