export interface SortingColumn {
  getCanSort(): boolean;

  getIsSorted(): false | 'asc' | 'desc';

  toggleSorting(desc?: boolean): void;
}
