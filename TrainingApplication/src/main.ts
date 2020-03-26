import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TrainingModule } from './TrainingApp/TrainingApp.MainModule';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TrainingModule)
  .catch(err => console.log(err));
