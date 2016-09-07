import {EventEmitter, Component} from '@angular/core';

@Component({
	selector: 'app',
	template: `<div class="container">
  <user-form (userSaved)="onUserSaved($event)"></user-form>
  <users-list [refreshList]="loadUsers$ |async"></users-list>
  </div>`
})
export class ApplicationComponent {
	loadUsers$ = new EventEmitter();

	onUserSaved(e) {
		this.loadUsers$.emit(e);
	}

}
