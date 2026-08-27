import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppInjector } from '@salon-crm/shared';


bootstrapApplication(App, appConfig)
.then((ref) => {
  AppInjector.setInjector(ref.injector);
})
.catch((err) =>
  console.error(err)
);
