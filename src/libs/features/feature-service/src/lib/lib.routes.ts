import { Route } from '@angular/router';
import { AllServices } from './all-services/all-services';
import { CreateService } from './create-service/create-service';
import { UpdateService } from './update-service/update-service';

export const featureServiceRoutes: Route[] = [
  { path: '', redirectTo: 'allServices', pathMatch: 'full' },
  {
    path:'allServices',
    component: AllServices,
    title: 'pageTitle.allServices'
  },
  {
    path:'createService',
    component: CreateService,
    title: 'pageTitle.createService'
  },
  {
    path:'updateService',
    component: UpdateService,
    title: 'pageTitle.updateService',
    data: { isReadonly: false },
  },
  {
    path:'serviceDetails',
    component: UpdateService,
    title: 'pageTitle.serviceDetails',
    data: { isReadonly: true },
  },
];
