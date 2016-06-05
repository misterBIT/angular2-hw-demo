import {Http, HTTP_PROVIDERS} from '@angular/http';
import {ReflectiveInjector} from '@angular/core'
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

export class UsernameValidator {
  static checkUsername(control:Control) {
    // Manually inject Http
    let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS]);
    let http = injector.get(Http);

    // Return an observable with null if the
    // username or email doesn't yet exist, or
    // an objet with the rejetion reason if they do
    return new Observable((obs:any) => {
      control
        .valueChanges
        .debounceTime(400)
        .switchMap(value => http.get('http://localhost:3003/data/user').map(res =>res.json()))
        .subscribe(data => {
          if (Array.isArray(data) && data.indexOf(control.value))
            obs.next({uniqueUsername: true});
          else {
            obs.next(null);
          }
          obs.complete();
        });
    });
  }
}
