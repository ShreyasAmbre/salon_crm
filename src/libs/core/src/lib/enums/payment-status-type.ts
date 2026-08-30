export const PAYMENT_STATUS_TYPE = {
  PENDING: 1,
  PAID: 2,
  PARTIAL: 3,
  REFUNDED: 4,
} as const;

export type PaymentStatusTypeInterface =
  (typeof PAYMENT_STATUS_TYPE)[keyof typeof PAYMENT_STATUS_TYPE];

export const paymentIdMap: Record<string, PaymentStatusTypeInterface> = {
  pending: PAYMENT_STATUS_TYPE.PENDING,
  paid: PAYMENT_STATUS_TYPE.PAID,
  partial: PAYMENT_STATUS_TYPE.PARTIAL,
  refunded: PAYMENT_STATUS_TYPE.REFUNDED,
};
