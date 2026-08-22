import { tanstackTableColumnHelper } from '@salon-crm/core';
import { flexRenderComponent } from '@tanstack/angular-table';
import { ServiceDetails } from '../data-access/models/service.model';
import { AllServices } from './all-services';
import { ActionsDropdownCell, StatusCell } from '@salon-crm/shared';


const columnHelper = tanstackTableColumnHelper<ServiceDetails>();

export const createAllServicesListingColumn = (component: AllServices) => columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'header.id',
    enableSorting: true,
  }),

  columnHelper.accessor('name', {
    header: 'header.name',
    enableSorting: true,
  }),

  columnHelper.accessor('categoryName', {
    header: 'header.categoryName',
    enableSorting: true,
  }),

  columnHelper.accessor('durationInMinutes', {
    header: 'header.durationInMinutes',
    enableSorting: true,
  }),


  columnHelper.accessor('price', {
    header: 'header.price',
    enableSorting: true,
  }),

  columnHelper.accessor('status', {
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
        view: (row: ServiceDetails) => component.onView(row),
        edit: (row: ServiceDetails) => component.onEdit(row),
        delete: (row: ServiceDetails) => component.onDelete(row),
      },
    }),
  })
])
