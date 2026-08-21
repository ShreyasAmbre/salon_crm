import { Route } from '@angular/router';
import { BusinessSettings } from './business-settings/business-settings';

export const featureSettingsRoutes: Route[] = [
  { path: '', redirectTo: 'businessSettings', pathMatch: 'full' },
  {
    path:'businessSettings',
    component: BusinessSettings,
    title: 'pageTitle.businessSettings'
  },
];
