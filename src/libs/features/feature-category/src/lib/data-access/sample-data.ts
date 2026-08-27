import { CategoryDetails } from "./models";
import { SERVICE_STATUS_TYPE } from '@salon-crm/core';


export const AllCategoriesSampleData: CategoryDetails[] = [
  {
    id: 1,
    name: 'Hair Care',
    description: 'Hair cutting, styling, coloring, and treatment services.',
    isActive: SERVICE_STATUS_TYPE.ACTIVE,
    servicesCount: 8,
    createdAt: '2026-08-01T10:30:00Z',
    updatedAt: '2026-08-18T14:20:00Z',
  },
  {
    id: 1,
    name: 'Skin Care',
    description: 'Facial, cleanup, skin treatment, and skincare services.',
    isActive: SERVICE_STATUS_TYPE.ACTIVE,
    servicesCount: 6,
    createdAt: '2026-08-02T09:15:00Z',
    updatedAt: '2026-08-15T11:45:00Z',
  },
  {
    id: 3,
    name: 'Nail Care',
    description: 'Manicure, pedicure, nail art, and nail treatment services.',
    isActive: SERVICE_STATUS_TYPE.ACTIVE,
    servicesCount: 5,
    createdAt: '2026-08-04T12:00:00Z',
    updatedAt: '2026-08-20T16:10:00Z',
  },
  {
    id: 4,
    name: 'Makeup',
    description: 'Bridal, party, professional, and special occasion makeup.',
    isActive: SERVICE_STATUS_TYPE.ACTIVE,
    servicesCount: 4,
    createdAt: '2026-08-05T10:45:00Z',
    updatedAt: '2026-08-19T13:30:00Z',
  },
  {
    id: 5,
    name: 'Spa & Massage',
    description: 'Relaxation, body massage, spa, and wellness treatments.',
    isActive: SERVICE_STATUS_TYPE.INACTIVE,
    servicesCount: 3,
    createdAt: '2026-08-07T14:20:00Z',
    updatedAt: '2026-08-21T09:50:00Z',
  },
  {
    id: 6,
    name: 'Bridal Services',
    description: 'Complete bridal beauty packages and pre-wedding services.',
    isActive: SERVICE_STATUS_TYPE.ACTIVE,
    servicesCount: 7,
    createdAt: '2026-08-10T11:10:00Z',
    updatedAt: '2026-08-22T15:25:00Z',
  },
];
