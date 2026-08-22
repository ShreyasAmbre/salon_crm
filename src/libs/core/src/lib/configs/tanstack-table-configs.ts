import {
  tableFeatures,
  rowSortingFeature,
  rowPaginationFeature,
  columnFilteringFeature,
  createSortedRowModel,
  createPaginatedRowModel,
  createFilteredRowModel,
  createColumnHelper,
  RowData,
  createTableHook,
  columnVisibilityFeature,
} from '@tanstack/angular-table';

export const tanStackTableFeatures = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  columnFilteringFeature,
  columnVisibilityFeature,

  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  filteredRowModel: createFilteredRowModel(),
});

export const tanstackTableColumnHelper = <TData extends RowData>() => createColumnHelper<typeof tanStackTableFeatures, TData>();

export const { injectAppTable, createAppColumnHelper} = createTableHook({
  features: tanStackTableFeatures,
});

