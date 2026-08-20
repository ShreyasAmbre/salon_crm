import { SideNavItem } from '../models';

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    id: 'DASHBOARD',
    mainMenuLabelName: 'dashboard',
    route: '/dashboard',
    children: [],
    iconName: 'DASHBOARD',
    moduleId: 0
  },
  {
    id: 'CUSTOMERS',
    mainMenuLabelName: 'customers',
    route: '/customer',
    moduleId: 0,
    iconName: 'CUSTOMERS',
    children: [
      {
        id: 'customer-crud',
        subMenulabelName: 'subMenuAllCustomers',
        route: '/customer/customer-crud',
        children: [],
        moduleId: 0,
      },
      {
        id: 'CUSTOMER_HISTORY',
        subMenulabelName: 'subMenuCustomerHistory',
        route: '/customer/customer-history',
        children: [],
        moduleId: 0
      },
    ],
  },



];
