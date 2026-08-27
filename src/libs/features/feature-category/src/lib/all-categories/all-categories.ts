import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { TanstackTableSorting, Pagination, ConfirmModalAction } from '@salon-crm/shared';
import { FlexRender } from '@tanstack/angular-table';
import { CategoryDetails } from '../data-access';
import { Router, ActivatedRoute } from '@angular/router';
import { createAllCategoriesListingColumn } from './category-list-column';
import { DEFAULT_PAGE_SIZE, injectAppTable } from '@salon-crm/core';
import { AllCategoriesSampleData } from '../data-access/sample-data';

@Component({
  selector: 'category-all-categories',
  imports: [TranslocoModule, TanstackTableSorting, FontAwesomeModule, FlexRender, Pagination],
  templateUrl: './all-categories.html',
  styleUrl: './all-categories.scss',
})
export class AllCategories {
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);

  readonly dataList = signal<CategoryDetails[]>(AllCategoriesSampleData);

  readonly categoryListingTable = injectAppTable(() => ({
    data: this.dataList(),

    columns: createAllCategoriesListingColumn(this),

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: DEFAULT_PAGE_SIZE,
      },

      sorting: [],
    },
  }));

  onView(row: CategoryDetails) {
    this.#router.navigate(['../categoryDetails'], {
      relativeTo: this.#route,
      state: { serviceDetails: row },
    });
  }

  onEdit(row: CategoryDetails) {
    this.#router.navigate(['../updateCategory'], {
      relativeTo: this.#route,
      state: { serviceDetails: row },
    });
  }

  @ConfirmModalAction({
    confirmButtonText: signal('confirm'),
    messageType: signal('danger'),
  })
  onDelete(row: CategoryDetails) {
    console.log('Delete clicked:', row);
  }

  navigateToCreate() {
    this.#router.navigate(['../createCategory'], {
      relativeTo: this.#route,
    });
  }


}
