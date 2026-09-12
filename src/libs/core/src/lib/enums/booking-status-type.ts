export const BOOKING_STATUS_TYPE = {
  PENDING: 1,
  CONFIRMED: 2,
  COMPLETED: 3,
  CANCELLED: 4,
  NO_SHOW: 5
} as const;

export type BookingStatusTypeInterface =
  (typeof BOOKING_STATUS_TYPE)[keyof typeof BOOKING_STATUS_TYPE];

export type BookingStatusName = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled' | 'NoShow'

export const bookingIdMap: Record<BookingStatusName, BookingStatusTypeInterface> = {
  Pending: BOOKING_STATUS_TYPE.PENDING,
  Confirmed: BOOKING_STATUS_TYPE.CONFIRMED,
  Completed: BOOKING_STATUS_TYPE.COMPLETED,
  Cancelled: BOOKING_STATUS_TYPE.CANCELLED,
  NoShow: BOOKING_STATUS_TYPE.NO_SHOW,
};

export type BookingStatusList = {
  id: BookingStatusTypeInterface
  statusName: BookingStatusName
}

export const bookingStatusList: BookingStatusList[] = [
  { id: 1, statusName: 'Pending' },
  { id: 2, statusName: 'Confirmed' },
  { id: 3, statusName: 'Completed' },
  { id: 4, statusName: 'Cancelled' },
  { id: 5, statusName: 'NoShow' },
]
