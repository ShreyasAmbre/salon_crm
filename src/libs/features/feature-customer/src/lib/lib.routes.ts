import { Route } from '@angular/router';
import { AllCustomers } from './all-customers/all-customers';
import { CreateCustomer } from './create-customer/create-customer';
import { UpdateCustomer } from './update-customer/update-customer';
import { CustomerHistory } from './customer-history/customer-history';

export const featureCustomerRoutes: Route[] = [
  { path: '', redirectTo: 'allCustomers', pathMatch: 'full' },
  {
    path:'allCustomers',
    component: AllCustomers,
    title: 'pageTitle.allCustomers'
  },
  {
    path:'createCustomer',
    component: CreateCustomer,
    title: 'pageTitle.createCustomer'
  },
  {
    path:'updateCustomer',
    component: UpdateCustomer,
    title: 'pageTitle.updateCustomer',
    data: { isReadonly: false },
  },
  {
    path:'customerDetails',
    component: UpdateCustomer,
    title: 'pageTitle.customerDetails',
    data: { isReadonly: true },
  },
  {
    path:'customerHistory',
    component: CustomerHistory,
    title: 'pageTitle.customerHistory',
  },
];
