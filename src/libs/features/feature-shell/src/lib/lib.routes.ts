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
      }
    ],
  },
  {
    path: '**',
    component: NotFoundPage,
    title: '404 - Page not found',
  },
];
