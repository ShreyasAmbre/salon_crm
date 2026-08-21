import { Route } from '@angular/router';
import { PublicLayout } from './public-layout/public-layout';
import { MainLayout } from './main-layout/main-layout';
import { NotFoundPage } from '@salon-crm/shared';


export const featureShellRoutes: Route[] = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('@salon-crm/features/feature-auth').then((m) => m.featureAuthRoutes),
        title: 'pageTitle.auth',
      },
    ],
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
        import('@salon-crm/features/feature-dashboard').then((m) => m.featureDashboardRoutes),
        title: 'pageTitle.dashboard',
      },
      {
        path: 'customers',
        loadChildren: () =>
        import('@salon-crm/features/feature-customer').then((m) => m.featureCustomerRoutes),
        title: 'pageTitle.services',
      },
      {
        path: 'services',
        loadChildren: () =>
        import('@salon-crm/features/feature-service').then((m) => m.featureServiceRoutes),
        title: 'pageTitle.services',
      },
      {
        path: 'category',
        loadChildren: () =>
        import('@salon-crm/features/feature-category').then((m) => m.featureCategoryRoutes),
        title: 'pageTitle.services',
      },
      {
        path: 'bookings',
        loadChildren: () =>
        import('@salon-crm/features/feature-bookings').then((m) => m.featureBookingsRoutes),
        title: 'pageTitle.services',
      },
      {
        path: 'settings',
        loadChildren: () =>
        import('@salon-crm/features/feature-settings').then((m) => m.featureSettingsRoutes),
        title: 'pageTitle.services',
      },
    ],
  },
  {
    path: '**',
    component: NotFoundPage,
    title: '404 - Page not found',
  },
];
