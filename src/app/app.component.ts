import {EventEmitter, Component} from '@angular/core';
import {UserFormComponent} from "./user-form.component";
import {UserService} from "./shared/user.service";
import {UsersListComponent} from "./users-list.component";

@Component({
  moduleId  : module.id,
  providers : [UserService],
  directives: [UserFormComponent, UsersListComponent],
  selector  : 'demo-app',
  template  : `<div class="container">
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
