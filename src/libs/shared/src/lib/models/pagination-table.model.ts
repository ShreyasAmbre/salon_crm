export interface PaginationTable {
  readonly atoms: {
    pagination: {
      get(): {
        pageIndex: number;
        pageSize: number;
      };
    };
  };

  nextPage(): void;

  previousPage(): void;

  setPageSize(size: number): void;

  getCanNextPage(): boolean;

  getCanPreviousPage(): boolean;

  getPageCount(): number;

  getRowCount(): number;
}
