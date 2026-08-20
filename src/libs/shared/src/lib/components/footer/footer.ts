import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'shared-footer',
  imports: [TranslocoModule],
  template: `
    <ng-container *transloco="let t; prefix: 'footer'">
      <div class="w-100 d-flex justify-content-center py-3">
        <span class="footer">© {{ t('footerText', { _value: year }) }}</span>
      </div>
    </ng-container>
  `,
  styles: `
    .footer {
      font-size: 1rem;
      color: var(--text-secondary);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  year: string = new Date().getFullYear().toString();
}
