export const PAYMENT_STATUS_TYPE = {
  PENDING: 1,
  PAID: 2,
  PARTIAL: 3,
  REFUNDED: 4,
} as const;

export type PaymentStatusTypeInterface =
  (typeof PAYMENT_STATUS_TYPE)[keyof typeof PAYMENT_STATUS_TYPE];

export type PaymentStatusName = 'Pending' | 'Paid' | 'Partial' | 'Refunded'

export const paymentIdMap: Record<PaymentStatusName, PaymentStatusTypeInterface> = {
  Pending: PAYMENT_STATUS_TYPE.PENDING,
  Paid: PAYMENT_STATUS_TYPE.PAID,
  Partial: PAYMENT_STATUS_TYPE.PARTIAL,
  Refunded: PAYMENT_STATUS_TYPE.REFUNDED,
};

export type PaymentStatusList = {
  id: PaymentStatusTypeInterface
  statusName: PaymentStatusName
}

export const paymentStatusList: PaymentStatusList[] = [
  { id: 1, statusName: 'Pending' },
  { id: 2, statusName: 'Paid' },
  { id: 3, statusName: 'Partial' },
  { id: 4, statusName: 'Refunded' },
]
