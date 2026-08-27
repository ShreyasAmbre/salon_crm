import { Component, inject, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {
  TanstackTableSorting,
  Pagination,
  ConfirmModalAction,
} from '@salon-crm/shared';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexRender } from '@tanstack/angular-table';
import { AllServicesSampleData } from '../data-access/sample-data';
import { DEFAULT_PAGE_SIZE, injectAppTable } from '@salon-crm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createAllServicesListingColumn } from './service-list-column';
import { ServiceDetails } from '../data-access';

@Component({
  selector: 'service-all-services',
  imports: [TranslocoModule, TanstackTableSorting, FontAwesomeModule, FlexRender, Pagination],
  templateUrl: './all-services.html',
  styleUrl: './all-services.scss',
})
export class AllServices {
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);

  readonly dataList = signal<ServiceDetails[]>(AllServicesSampleData);

  readonly serviceListingTable = injectAppTable(() => ({
    data: this.dataList(),

    columns: createAllServicesListingColumn(this),

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: DEFAULT_PAGE_SIZE,
      },

      sorting: [],
    },
  }));

  onView(row: ServiceDetails) {
    this.#router.navigate(['../serviceDetails'], {
      relativeTo: this.#route,
      state: { serviceDetails: row },
    });
  }

  onEdit(row: ServiceDetails) {
    this.#router.navigate(['../updateService'], {
      relativeTo: this.#route,
      state: { serviceDetails: row },
    });
  }

  @ConfirmModalAction({
    confirmButtonText: signal('confirm'),
    messageType: signal('danger'),
  })
  onDelete(row: ServiceDetails) {
    console.log('Delete clicked:', row);
  }

  navigateToCreate() {
    this.#router.navigate(['../createService'], {
      relativeTo: this.#route,
    });
  }

}
