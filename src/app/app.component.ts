import {EventEmitter, Component} from '@angular/core';
import {UserFormComponent} from "./user-form.component";
import {UserService} from "./shared/user.service";
import {UsersListComponent} from "./users-list.component";

@Component({
  moduleId  : module.id,
  providers : [UserService],
  directives: [UserFormComponent, UsersListComponent],
  selector  : 'demo-app',
  template  : `
  <user-form (userSaved)="onUserSaved($event)"></user-form>
  <users-list [refreshList]="loadUsers$"></users-list>`
})
export class ApplicationComponent {
  loadUsers$ = new EventEmitter();

  onUserSaved(e) {
    this.loadUsers$.emit(e);
  }

}
