import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from './environments/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, {
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     importProvidersFrom(IonicModule.forRoot({})),
//     provideRouter(AppModule)
//   ]
// })

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
