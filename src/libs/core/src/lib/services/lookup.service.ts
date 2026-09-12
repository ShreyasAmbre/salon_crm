import { Service } from '@angular/core';
import { bookingStatusList, BookingStatusList, GENDER_TYPE, PaymentStatusList, paymentStatusList, SERVICE_STATUS_TYPE } from '../enums';
import { CategoryDetailsLookup, CustomerLookup, DurationLookup, GenderLookup, NationalityLookup, ServiceLookup, StatusLookup } from '../models';

@Service()
export class LookupService {
  readonly statusList:StatusLookup[] = [
    { name: 'Active', nameEn: '', nameAr: '', nameMr: '', value: SERVICE_STATUS_TYPE.ACTIVE },
    { name: 'InActive', nameEn: '', nameAr: '', nameMr: '', value: SERVICE_STATUS_TYPE.INACTIVE },
  ]

  readonly genderList:GenderLookup[] = [
    { id: GENDER_TYPE.MALE, name: 'Male', nameEn: '', nameAr: '', nameMr: '',  },
    { id: GENDER_TYPE.FEMALE, name: 'Female', nameEn: '', nameAr: '', nameMr: '',  },
    { id: GENDER_TYPE.UNISEX, name: 'Unisex', nameEn: '', nameAr: '', nameMr: '',  },
  ]

  readonly durationList:DurationLookup[] = [
    { id: 1, value: 15 },
    { id: 2, value: 30 },
    { id: 3, value: 45 },
    { id: 4, value: 60 },
    { id: 5, value: 90 },
    { id: 6, value: 120 },
    { id: 7, value: 180 },
  ]

  readonly categoryList:CategoryDetailsLookup[] = [
    { id: 1, name: 'Hair', nameEn: '', nameAr: '', nameMr: '',  },
    { id: 2, name: 'Grooming', nameEn: '', nameAr: '', nameMr: '',  },
    { id: 3, name: 'Skin Care', nameEn: '', nameAr: '', nameMr: '',  },
  ]

  readonly nationalityList: NationalityLookup[] = [
    {
      code: 'IN',
      countryName: 'India',
      dialingCode: '+91',
      codeWithDialing: 'IN (+91)',
    },
    {
      code: 'QA',
      countryName: 'Qatar',
      dialingCode: '+974',
      codeWithDialing: 'QA (+974)',
    },
    {
      code: 'AE',
      countryName: 'United Arab Emirates',
      dialingCode: '+971',
      codeWithDialing: 'AE (+971)',
    },
    {
      code: 'SA',
      countryName: 'Saudi Arabia',
      dialingCode: '+966',
      codeWithDialing: 'SA (+966)',
    },
    {
      code: 'US',
      countryName: 'United States',
      dialingCode: '+1',
      codeWithDialing: 'US (+1)',
    },
  ];

  readonly customerLookupList: CustomerLookup[] = [
    {
      id: 1,
      firstName: 'Rahul',
      lastName: 'Sharma',
      email: 'rahul.sharma@example.com',
      whatsappNumber: '+91 9876543210',
    },
    {
      id: 2,
      firstName: 'Priya',
      lastName: 'Patel',
      email: 'priya.patel@example.com',
      whatsappNumber: '+91 9823456712',
    },
    {
      id: 3,
      firstName: 'Amit',
      lastName: 'Deshmukh',
      email: 'amit.deshmukh@example.com',
      whatsappNumber: '+91 9765432189',
    },
    {
      id: 4,
      firstName: 'Sneha',
      lastName: 'Kulkarni',
      email: 'sneha.kulkarni@example.com',
      whatsappNumber: '+91 9890123456',
    },
  ];

  readonly serviceLookupList: ServiceLookup[] = [
    {
      id: 1,
      serviceName: 'Classic Haircut',
      categoryId: 1,
      categoryName: 'Hair',
    },
    {
      id: 3,
      serviceName: 'Beard Trim',
      categoryId: 2,
      categoryName: 'Grooming',
    }
  ];

  readonly bookingStatusLookupList: BookingStatusList[] = bookingStatusList;
  readonly paymentStatusLookupList: PaymentStatusList[] = paymentStatusList;
}
