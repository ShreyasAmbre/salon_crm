import { flexRenderComponent } from "@tanstack/angular-table";
import { CategoryDetails } from "../data-access";
import { AllCategories } from "./all-categories";
import { tanstackTableColumnHelper } from '@salon-crm/core';
import { ActionsDropdownCell, DateCell, StatusCell } from '@salon-crm/shared';


const columnHelper = tanstackTableColumnHelper<CategoryDetails>();

export const createAllCategoriesListingColumn = (component: AllCategories) => columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'header.id',
    enableSorting: true,
  }),

  columnHelper.accessor('name', {
    header: 'header.name',
    enableSorting: true,
  }),

  columnHelper.accessor('servicesCount', {
    header: 'header.servicesCount',
    enableSorting: true,
  }),

  columnHelper.accessor('createdAt', {
    header: 'header.createdAt',
    enableSorting: true,
    // sortingFn: 'datetime',
    cell: (info) =>
      flexRenderComponent(DateCell, {
        inputs: {
          dateValue: info.row.original.createdAt ?? '',
        },
      }),
  }),

  columnHelper.accessor('updatedAt', {
    header: 'header.updatedAt',
    enableSorting: true,
    // sortingFn: 'datetime',
    cell: (info) =>
      flexRenderComponent(DateCell, {
        inputs: {
          dateValue: info.row.original.updatedAt ?? '',
        },
      }),
  }),

  columnHelper.accessor('isActive', {
    header: 'header.status',
    enableSorting: true,

    cell: (info) =>
      flexRenderComponent(StatusCell, {
        inputs: {
          serviceStatusId: info.getValue(),
          isServiceStatus: true
        },
      }),
  }),

  columnHelper.display({
    id: 'actions',
    header: 'header.actions',
    enableSorting: false,

    cell: (info) =>
    flexRenderComponent(ActionsDropdownCell, {
      inputs: {
        row: info.row.original,
        isViewVisible: true,
        isEditVisible: true,
        isDeleteVisible: true,
      },
      outputs: {
        view: (row: CategoryDetails) => component.onView(row),
        edit: (row: CategoryDetails) => component.onEdit(row),
        delete: (row: CategoryDetails) => component.onDelete(row),
      },
    }),
  })

]);
