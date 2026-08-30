export const BOOKING_STATUS_TYPE = {
  PENDING: 1,
  CONFIRMED: 2,
  COMPLETED: 3,
  CANCELLED: 4,
  NO_SHOW: 5
} as const;

export type BookingStatusTypeInterface =
  (typeof BOOKING_STATUS_TYPE)[keyof typeof BOOKING_STATUS_TYPE];

export const bookingIdMap: Record<string, BookingStatusTypeInterface> = {
  pending: BOOKING_STATUS_TYPE.PENDING,
  confirmed: BOOKING_STATUS_TYPE.CONFIRMED,
  completed: BOOKING_STATUS_TYPE.COMPLETED,
  cancelled: BOOKING_STATUS_TYPE.CANCELLED,
  noShow: BOOKING_STATUS_TYPE.NO_SHOW,
};
