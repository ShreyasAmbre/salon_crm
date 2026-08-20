import { Route } from '@angular/router';
import { Login } from './login/login';
import { ForgotPassword } from './forgot-password/forgot-password';

export const featureAuthRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login, title: 'pageTitle.login' },
  { path: 'forgot-password', component: ForgotPassword, title: 'pageTitle.forgotPassword' },
];
