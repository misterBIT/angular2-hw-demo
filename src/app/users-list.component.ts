import {Component, Output, EventEmitter, OnChanges, Input} from '@angular/core';
import {UserService} from "./shared/user.service";
import {User} from "./user.model";
import {Observable} from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'users-list',
  template: `
  <div class="row" *ngIf="users.length">
  <h1>List Users</h1>
    <ul class="usersList">
      <li *ngFor="let user of users">
        {{user.username}}
      </li>  
    </ul>
  </div>`
})
export class UsersListComponent implements OnChanges {
  users:User[] = [];
  @Input() private refreshList;

  ngOnChanges(change) {
    if (change.refreshList) {
      this.getUsers();
    }
  }

  constructor(private userService:UserService) {
    this.getUsers();
  }

  private getUsers() {
    this.userService.findAll().subscribe(data=> {
      this.users = data;
    });
  }
}
