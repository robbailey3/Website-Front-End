import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  console.log('💪 Production!');
  console.log(
    '%cHello!',
    'color: rgba(39, 70, 144, 1); font-family: Arial Black, Arial; font-size: 42px;'
  );
  console.log(
    '%cLike what you see?\nContact me: https://robbailey3.co.uk/contact',
    'font-size: 22px; color: #222; font-family: Arial;'
  );
} else {
  console.log('👋 Development!');
  console.log({ environment });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {
    return console.error(err);
  });
