import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'shared-home-svg',
  imports: [FontAwesomeModule],
  template: `
    <!-- <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.active]="isActiveMenu()"
    >
      <path
        d="M9.008 2c.006 0 .033 0 .092.04l8.328 6.807.01.009c.009.006.046.048.059.144a.4.4 0 0 1-.003.116c-.007.033-.016.046-.014.044-.006.008-.03.032-.087.037a.16.16 0 0 1-.12-.032l-.01-.01-.011-.01-7.937-6.484-.317-.258-.316.258L.745 9.146l-.011.009-.01.01a.16.16 0 0 1-.113.03c-.055-.006-.089-.03-.103-.048 0-.001-.018-.034 0-.121a.5.5 0 0 1 .09-.202L8.89 2.046A.25.25 0 0 1 9.007 2ZM2.913 9.471l.317-.26v6.425h3.854v-2.545c0-1.114.88-2 1.914-2s1.915.886 1.915 2v2.545h3.854V9.211l.317.26v6.347c0 .117-.088.182-.159.182h-4.17c-.072 0-.159-.065-.159-.182v-2.727c0-.901-.686-1.636-1.598-1.636-.911 0-1.597.735-1.597 1.636v2.727c0 .117-.087.182-.159.182h-4.17c-.072 0-.159-.065-.159-.182z"
        stroke="currentColor"
      />
    </svg> -->
    <fa-icon [icon]="['fas', 'chart-simple']" class="icon" [class.active]="isActiveMenu()"/>
  `,
  styles: `
    .icon {
      color: #656c7b;
    }

    .icon.active {
      color: var(--primary);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSvg {
  isActiveMenu = input<boolean>(false);
}
