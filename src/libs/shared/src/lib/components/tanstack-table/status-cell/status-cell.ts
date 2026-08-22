import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SERVICE_STATUS_TYPE } from '@salon-crm/core';

@Component({
  selector: 'shared-status-cell',
  imports: [TranslocoModule],
  templateUrl: './status-cell.html',
  styleUrl: './status-cell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCell {
  serviceStatusId = input<number>();
  isServiceStatus = input<boolean>(false);
  ServiceStatusType = SERVICE_STATUS_TYPE;

}
