import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { PAGE_SIZES } from '@salon-crm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LanguageService } from '../../../services';
import { FormsModule } from '@angular/forms';
import { PaginationTable } from '../../../models';

@Component({
  selector: 'shared-pagination',
  imports: [TranslocoModule, NgSelectModule, FontAwesomeModule, FormsModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  table = input.required<PaginationTable>();
  allPageSizes = PAGE_SIZES;

  readonly #languageService = inject(LanguageService);

  readonly isRtl = this.#languageService.isRtl;
  readonly paginationState = computed(() => this.table().atoms.pagination.get()); //v9 version of Angular Tanstack Table

  readonly currentPage = computed(
    () => this.paginationState().pageIndex + 1,
  );

  readonly totalPages = computed(
    () => this.table().getPageCount(),
  );

  readonly firstItem = computed(() => {
    const { pageIndex, pageSize } = this.paginationState();

    if (this.totalRows() === 0) {
      return 0;
    }

    return pageIndex * pageSize + 1;
  });

  readonly lastItem = computed(() => {
    const { pageIndex, pageSize } = this.paginationState();

    return Math.min(
      (pageIndex + 1) * pageSize,
      this.totalRows(),
    );
  });

  readonly totalRows = computed(() => this.table().getRowCount());

  previousPage(): void {
    if (!this.table().getCanPreviousPage()) {
      return;
    }

    this.table().previousPage();
  }

  nextPage(): void {
    if (!this.table().getCanNextPage()) {
      return;
    }

    this.table().nextPage();
  }

  changePageSize(pageSize: number): void {
    if (!pageSize || pageSize <= 0) {
      return;
    }

    this.table().setPageSize(pageSize);
  }

}
