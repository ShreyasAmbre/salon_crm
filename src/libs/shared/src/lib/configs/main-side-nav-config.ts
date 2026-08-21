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
    route: '/customers',
    moduleId: 0,
    iconName: 'CUSTOMERS',
    children: [
      {
        id: 'CUSTOMERS_CRUD',
        subMenulabelName: 'subMenuAllCustomers',
        route: '/customers/allCustomers',
        children: [],
        moduleId: 0,
      },
      {
        id: 'CUSTOMER_HISTORY',
        subMenulabelName: 'subMenuCustomerHistory',
        route: '/customers/customerHistory',
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
        route: '/bookings/allBookings',
        children: [],
        moduleId: 0,
      },
      {
        id: 'BOOKINGS_CALENDAR_VIEW',
        subMenulabelName: 'subMenuBookingsCalendarView',
        route: '/bookings/bookingsCalendarView',
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
        route: '/settings/businessSettings',
        children: [],
        moduleId: 0,
      },
    ],
  },





];
