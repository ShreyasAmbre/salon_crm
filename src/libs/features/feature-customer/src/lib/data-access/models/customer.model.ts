import { GenderTypeInterface, ServiceStatusTypeInterface } from '@salon-crm/core';

export interface CustomerDetails {
  id: number;
  firstName: string;
  lastName: string;

  email: string;
  whatsappNumber: string;

  gender: GenderTypeInterface;
  dateOfBirth: string;

  notes?: string;

  isActive: ServiceStatusTypeInterface;

  totalBookings: number;
  lastVisitAt: string;
  totalSpent: number;

  createdAt: string;
  updatedAt: string;
}
