import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { BOOKING_STATUS_TYPE, BookingStatusTypeInterface, PAYMENT_STATUS_TYPE, PaymentStatusTypeInterface, SERVICE_STATUS_TYPE } from '@salon-crm/core';

@Component({
  selector: 'shared-status-cell',
  imports: [TranslocoModule],
  templateUrl: './status-cell.html',
  styleUrl: './status-cell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCell {
  serviceStatusId = input<boolean>();
  isServiceStatus = input<boolean>(false);
  ServiceStatusType = SERVICE_STATUS_TYPE;

  bookingPaymentStatusId = input<PaymentStatusTypeInterface>();
  isBookingPaymentStatus = input<boolean>(false);
  bookingPaymentStatusType = PAYMENT_STATUS_TYPE;

  bookingStatusId = input<BookingStatusTypeInterface>();
  isBookingStatus = input<boolean>(false);
  bookingStatusType = BOOKING_STATUS_TYPE;

}
