import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutes } from './app/app.routes';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [AppRoutes]);
