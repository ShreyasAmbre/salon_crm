import { PaymentStatusTypeInterface, BookingStatusTypeInterface } from '@salon-crm/core';

export interface BookingDetails {
  id: number;

  customerId: number;
  customerFirstName: string;
  customerLastName: string;
  customerWhatsappNo: string;

  serviceId: number;
  serviceName: string;
  categoryId: number;
  categoryName: string;

  staffId: number;

  bookingDate: string;
  startTime: string;
  endTime: string; // calculated based on service selection and its duration in mins

  amount: string;

  paymentStatus: PaymentStatusTypeInterface;
  bookingStatus: BookingStatusTypeInterface;

  createdAt: string;
  updatedAt: string;

  note?: string;
}
