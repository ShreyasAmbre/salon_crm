import { Component, inject, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {
  TanstackTableSorting,
  Pagination,
} from '@salon-crm/shared';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexRender } from '@tanstack/angular-table';
import { AllServicesSampleData } from '../data-access/sample-data';
import { ServiceDetails } from '../data-access/models/service.model';
import { DEFAULT_PAGE_SIZE, injectAppTable } from '@salon-crm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createAllServicesListingColumn } from './service-list-column';

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
    console.log('View clicked:', row);
  }

  onEdit(row: ServiceDetails) {
    console.log('Edit clicked:', row);
  }

  onDelete(row: ServiceDetails) {
    console.log('Delete clicked:', row);
  }

  navigateToCreateService() {
    this.#router.navigate(['../createService'], {
      relativeTo: this.#route,
    });
  }

}
