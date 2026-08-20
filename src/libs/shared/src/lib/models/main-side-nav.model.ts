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
  | 'CUSTOMER_HISTORY';

export type SideMenuId =
  | 'DASHBOARD'
  | 'CUSTOMERS'
  | 'CUSTOMER_HISTORY';

export interface SubMenuTabs {
  labelName: string;
  route: string;
}
