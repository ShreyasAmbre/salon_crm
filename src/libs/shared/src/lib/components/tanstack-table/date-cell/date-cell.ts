import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-date-cell',
  imports: [CommonModule],
  template: `
    <div class="d-flex flex-column lh-sm gap-1">
      <span class="date-cell" [class.highlight-date]="isHighLight()">
        {{ dateValue() | date }}
      </span>
      @if (cellSubTitle()) {
        <span class="cell-subtitle">{{ cellSubTitle() }}</span>
      }
    </div>
  `,
  styles: [
    `
      .highlight-date {
        font-family: var(--font-primary);
        font-weight: 700;
        font-size: 0.75rem;
        color: var(--secondary-color);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateCell {
  dateValue = input.required<string>();
  format = input<'short' | 'dateTime' | 'medium'>('short');
  cellSubTitle = input<string>();
  isHighLight = input<boolean>(false);
}
