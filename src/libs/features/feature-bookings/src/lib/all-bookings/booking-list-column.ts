import { tanstackTableColumnHelper } from "@salon-crm/core";
import { BookingDetails } from "../data-access";
import { AllBookings } from "./all-bookings";
import { flexRenderComponent } from "@tanstack/angular-table";
import { ActionsDropdownCell, DateCell, StatusCell } from '@salon-crm/shared';


const columnHelper = tanstackTableColumnHelper<BookingDetails>();

export const createAllBookingsListingColumn = (component: AllBookings) => columnHelper.columns([
  columnHelper.accessor('id', {
    header: 'header.id',
    enableSorting: true,
  }),

  columnHelper.accessor(
    // Note: accessorFn for sorting working and combining firstName and lastName date point
    (row) => `${row.customerFirstName} ${row.customerLastName}`.trim(),
    {
      id: 'customerName',
      header: 'header.customerName',
      enableSorting: true,
    },
  ),

  columnHelper.accessor('customerWhatsappNo', {
    header: 'header.customerWhatsappNo',
    enableSorting: true,
  }),

  columnHelper.accessor('serviceName', {
    header: 'header.serviceName',
    enableSorting: true,
  }),

  columnHelper.accessor('categoryName', {
    header: 'header.categoryName',
    enableSorting: true,
  }),

  columnHelper.accessor('bookingDate', {
    header: 'header.bookingDate',
    enableSorting: true,
    // sortingFn: 'datetime',
    cell: (info) =>
      flexRenderComponent(DateCell, {
        inputs: {
          dateValue: info.row.original.createdAt ?? '',
        },
      }),
  }),

  columnHelper.accessor('startTime', {
    header: 'header.startTime',
    enableSorting: true,
  }),


  columnHelper.accessor('amount', {
    header: 'header.amount',
    enableSorting: true,
  }),

  columnHelper.accessor('paymentStatus', {
    header: 'header.paymentStatus',
    enableSorting: true,

    cell: (info) =>
      flexRenderComponent(StatusCell, {
        inputs: {
          bookingPaymentStatusId: info.getValue(),
          isBookingPaymentStatus: true
        },
      }),
  }),

  columnHelper.accessor('bookingStatus', {
    header: 'header.bookingStatus',
    enableSorting: true,

    cell: (info) =>
      flexRenderComponent(StatusCell, {
        inputs: {
          bookingStatusId: info.getValue(),
          isBookingStatus: true
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
        view: (row: BookingDetails) => component.onView(row),
        edit: (row: BookingDetails) => component.onEdit(row),
        delete: (row: BookingDetails) => component.onDelete(row),
      },
    }),
  })


])
