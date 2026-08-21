export interface SideNavItem {
  id: SideMenuId;
  mainMenuLabelName: string;
  icon?: string;
  route?: string;
  children: SideNavSubItem[];
  iconName: SideMenuIconName;
  moduleId: number
}

export interface SideNavSubItem {
  id: string;
  subMenulabelName: string;
  icon?: string;
  route?: string;
  children: SideNavSubItem[];
  moduleId: number
}

export type SideMenuIconName =
  | 'DASHBOARD'
  | 'CUSTOMERS'
  | 'SETTINGS'
  | 'SERVICES'
  | 'CATEGORY'
  | 'BOOKINGS';

export type SideMenuId =
  | 'DASHBOARD'

  | 'CUSTOMERS'
  | 'CUSTOMERS_CRUD'
  | 'CUSTOMER_HISTORY'

  | 'SETTINGS'
  | 'GENERAL_SETTINGS'

  | 'SERVICES'
  | 'CATEGORY'

  | 'BOOKINGS'
  | 'BOOKINGS_CRUD'
  | 'BOOKINGS_CALENDAR_VIEW';
export interface SubMenuTabs {
  labelName: string;
  route: string;
}
