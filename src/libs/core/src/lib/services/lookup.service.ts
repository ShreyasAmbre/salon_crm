import { Service } from '@angular/core';
import { GENDER_TYPE, SERVICE_STATUS_TYPE } from '../enums';
import { CategoryDetailsLookup, DurationLookup, GenderLookup, StatusLookup } from '../models';

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
}
