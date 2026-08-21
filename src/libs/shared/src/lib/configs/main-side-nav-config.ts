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
        id: 'CUSTOMERS_CRUD',
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
  {
    id: 'SERVICES',
    mainMenuLabelName: 'services',
    route: '/services',
    children: [],
    iconName: 'SERVICES',
    moduleId: 0
  },
  {
    id: 'CATEGORY',
    mainMenuLabelName: 'category',
    route: '/category',
    children: [],
    iconName: 'CATEGORY',
    moduleId: 0
  },
  {
    id: 'BOOKINGS',
    mainMenuLabelName: 'bookings',
    route: '/bookings',
    moduleId: 0,
    iconName: 'BOOKINGS',
    children: [
      {
        id: 'BOOKINGS_CRUD',
        subMenulabelName: 'subMenuCustomerBookings',
        route: '/bookings/customer-bookings',
        children: [],
        moduleId: 0,
      },
      {
        id: 'BOOKINGS_CALENDAR_VIEW',
        subMenulabelName: 'subMenuBookingsCalendarView',
        route: '/bookings/bookings-calendar-view',
        children: [],
        moduleId: 0
      },
    ],
  },
  {
    id: 'SETTINGS',
    mainMenuLabelName: 'settings',
    route: '/settings',
    moduleId: 0,
    iconName: 'SETTINGS',
    children: [
      {
        id: 'GENERAL_SETTINGS',
        subMenulabelName: 'subMenuBusinessSettings',
        route: '/settings/general-settings',
        children: [],
        moduleId: 0,
      },
    ],
  },





];
