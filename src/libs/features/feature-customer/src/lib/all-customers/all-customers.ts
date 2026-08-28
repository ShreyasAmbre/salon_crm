import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { TanstackTableSorting, Pagination, ConfirmModalAction } from '@salon-crm/shared';
import { FlexRender } from '@tanstack/angular-table';
import { CustomerDetails } from '../data-access';
import { AllCustomersSampleData } from '../data-access/sample-data';
import { Router, ActivatedRoute } from '@angular/router';
import { injectAppTable, DEFAULT_PAGE_SIZE } from '@salon-crm/core';
import { createAllCustomerListingColumn } from './customer-list-column';

@Component({
  selector: 'customer-all-customers',
  imports: [TranslocoModule, TanstackTableSorting, FontAwesomeModule, FlexRender, Pagination],
  templateUrl: './all-customers.html',
  styleUrl: './all-customers.scss',
})
export class AllCustomers {
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);

  readonly dataList = signal<CustomerDetails[]>(AllCustomersSampleData);

  readonly customerListingTable = injectAppTable(() => ({
    data: this.dataList(),

    columns: createAllCustomerListingColumn(this),

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: DEFAULT_PAGE_SIZE,
      },

      sorting: [],
    },
  }));

  onView(row: CustomerDetails) {
    this.#router.navigate(['../customerDetails'], {
      relativeTo: this.#route,
      state: { serviceDetails: row },
    });
  }

  onEdit(row: CustomerDetails) {
    this.#router.navigate(['../updateCustomer'], {
      relativeTo: this.#route,
      state: { serviceDetails: row },
    });
  }

  @ConfirmModalAction({
    confirmButtonText: signal('confirm'),
    messageType: signal('danger'),
  })
  onDelete(row: CustomerDetails) {
    console.log('Delete clicked:', row);
  }

  navigateToCreate() {
    this.#router.navigate(['../createCustomer'], {
      relativeTo: this.#route,
    });
  }
}
