import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '../../../services';
import { Column } from '@tanstack/angular-table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortingColumn } from '../../../models/sorting-table.model';

@Component({
  selector: 'shared-tanstack-table-sorting',
  imports: [FontAwesomeModule],
  templateUrl: './tanstack-table-sorting.html',
  styleUrl: './tanstack-table-sorting.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TanstackTableSorting {
  column = input.required<SortingColumn>();

  #languageService = inject(LanguageService);

  isRtl = this.#languageService.isRtl;

  toggleSort(): void {
    const current = this.column().getIsSorted();
    if (current === 'asc') {
      this.column().toggleSorting(true);
    } else if (current === 'desc') {
      this.column().toggleSorting(false);
    } else {
      this.column().toggleSorting(false);
    }
  }

  sortDirection(): 'asc' | 'desc' | false {
    return this.column().getIsSorted();
  }
}
