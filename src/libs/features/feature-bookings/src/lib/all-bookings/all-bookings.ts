import { Component, inject, signal } from '@angular/core';
import { BookingDetails } from '../data-access';
import { createAllBookingsListingColumn } from './booking-list-column';
import { Router, ActivatedRoute } from '@angular/router';
import { injectAppTable, DEFAULT_PAGE_SIZE } from '@salon-crm/core';
import { AllBookingsSampleData } from '../data-access/sample-data';
import { ConfirmModalAction, Pagination, TanstackTableSorting } from '@salon-crm/shared';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { FlexRender } from '@tanstack/angular-table';

@Component({
  selector: 'bookings-all-bookings',
  imports: [TranslocoModule, TanstackTableSorting, FontAwesomeModule, FlexRender, Pagination],
  templateUrl: './all-bookings.html',
  styleUrl: './all-bookings.scss',
})
export class AllBookings {
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);

  readonly dataList = signal<BookingDetails[]>(AllBookingsSampleData);

  readonly bookingListingTable = injectAppTable(() => ({
    data: this.dataList(),

    columns: createAllBookingsListingColumn(this),

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: DEFAULT_PAGE_SIZE,
      },

      sorting: [],
    },
  }));

  onView(row: BookingDetails) {
    this.#router.navigate(['../bookingDetails'], {
      relativeTo: this.#route,
      state: { bookingDetails: row },
    });
  }

  onEdit(row: BookingDetails) {
    this.#router.navigate(['../updateBooking'], {
      relativeTo: this.#route,
      state: { bookingDetails: row },
    });
  }

  @ConfirmModalAction({
    confirmButtonText: signal('confirm'),
    messageType: signal('danger'),
  })
  onDelete(row: BookingDetails) {
    console.log('Delete clicked:', row);
  }

  navigateToCreate() {
    this.#router.navigate(['../createBooking'], {
      relativeTo: this.#route,
    });
  }

}
