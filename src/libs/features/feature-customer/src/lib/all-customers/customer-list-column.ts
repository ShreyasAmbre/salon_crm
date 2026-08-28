import { GenderTranslationKeys, tanstackTableColumnHelper } from "@salon-crm/core";
import { CustomerDetails } from "../data-access";
import { AllCustomers } from "./all-customers";
import { flexRenderComponent } from "@tanstack/angular-table";
import { ActionsDropdownCell, DateCell, StatusCell } from '@salon-crm/shared';
import { TranslocoService } from "@jsverse/transloco";
import { inject } from "@angular/core";

const columnHelper = tanstackTableColumnHelper<CustomerDetails>();

export const createAllCustomerListingColumn = (component: AllCustomers) => columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'header.id',
    enableSorting: true,
  }),

  columnHelper.accessor(
    // Note: accessorFn for sorting working and combining firstName and lastName date point
    (row) => `${row.firstName} ${row.lastName}`.trim(),
    {
      id: 'customerName',
      header: 'header.name',
      enableSorting: true,
    },
  ),


  columnHelper.accessor('whatsappNumber', {
    header: 'header.whatsappNumber',
    enableSorting: true,
  }),

  columnHelper.accessor('gender', {
    header: () => 'header.gender',
    enableSorting: false,
    cell: (info) => {
      const translocoService = inject(TranslocoService);
      const gender = info.getValue();

      return translocoService.translate(
        `customers.${GenderTranslationKeys[gender]}`,
      );
    },
  }),

  columnHelper.accessor('totalBookings', {
    header: 'header.bookings',
    enableSorting: true,
  }),

  columnHelper.accessor('totalSpent', {
    header: 'header.totalSpent',
    enableSorting: true,
  }),

  columnHelper.accessor('lastVisitAt', {
    header: 'header.lastVisitAt',
    enableSorting: true,
    // sortingFn: 'datetime',
    cell: (info) =>
      flexRenderComponent(DateCell, {
        inputs: {
          dateValue: info.row.original.createdAt ?? '',
        },
      }),
  }),

  // columnHelper.accessor('createdAt', {
  //   header: 'header.createdAt',
  //   enableSorting: true,
  //   // sortingFn: 'datetime',
  //   cell: (info) =>
  //     flexRenderComponent(DateCell, {
  //       inputs: {
  //         dateValue: info.row.original.createdAt ?? '',
  //       },
  //     }),
  // }),

  // columnHelper.accessor('updatedAt', {
  //   header: 'header.updatedAt',
  //   enableSorting: true,
  //   // sortingFn: 'datetime',
  //   cell: (info) =>
  //     flexRenderComponent(DateCell, {
  //       inputs: {
  //         dateValue: info.row.original.updatedAt ?? '',
  //       },
  //     }),
  // }),

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
        view: (row: CustomerDetails) => component.onView(row),
        edit: (row: CustomerDetails) => component.onEdit(row),
        delete: (row: CustomerDetails) => component.onDelete(row),
      },
    }),
  })
]);
