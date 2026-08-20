import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@salon-crm/features/feature-shell').then((m) => m.featureShellRoutes),
  },
];
