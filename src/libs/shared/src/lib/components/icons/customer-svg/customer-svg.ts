import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-customer-svg',
  imports: [],
  template: `
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.active]="isActiveMenu()"
    >
      <path
        d="M7 8.25C8.519 8.25 9.75 7.019 9.75 5.5C9.75 3.981 8.519 2.75 7 2.75C5.481 2.75 4.25 3.981 4.25 5.5C4.25 7.019 5.481 8.25 7 8.25Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.75 15.25C1.75 12.765 4.099 10.75 7 10.75C9.901 10.75 12.25 12.765 12.25 15.25"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 3.25C12.628 3.25 13.75 4.368 13.75 5.75C13.75 7.132 12.628 8.25 11.25 8.25"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.25 10.75C14.56 10.75 16.25 12.392 16.25 14.5"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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
export class CustomerSvg {
  isActiveMenu = input<boolean>(false);
}
