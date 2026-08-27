import { GenderTypeInterface, ServiceStatusTypeInterface } from '@salon-crm/core';
export interface ServiceDetails {
  id: number;
  name: string;
  categoryId: number;
  categoryName: string;
  durationInMinutes: number;
  price: number;
  gender: GenderTypeInterface;
  isActive: ServiceStatusTypeInterface;
  createdAt: string;
  updatedAt: string;
  description?: string;
}
