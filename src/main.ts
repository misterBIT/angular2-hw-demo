import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ApplicationComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ApplicationComponent, [...HTTP_PROVIDERS]);
