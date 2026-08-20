import { InjectionToken } from '@angular/core';
import { Environment } from '../models';

export const APP_CONFIG = new InjectionToken<Environment>('ApplicationConfig');
