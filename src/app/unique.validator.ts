import {} from '@angular/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UsernameValidator {
	constructor(private http: Http) {
		this.validate = this.validate.bind(this); // fix outside invocation
	}

	validate(control: FormControl) {
		// Return an observable with null if the
		// username or email doesn't yet exist, or
		// an object with the rejection reason if they do
		return new Observable((obs: any) => {
			control
				.valueChanges
				.debounceTime(400)
				.switchMap(value => this.http.get('http://localhost:3003/data/user').map(res =>res.json()))
				.subscribe(data => {
					if (Array.isArray(data) && data.map(user => user.username).indexOf(control.value) !== -1) {
						obs.next({uniqueUsername: true});
					} else {
						obs.next(null);
					}
					obs.complete();
				});
		});
	}
}
