import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {UserService} from "./shared/user.service";
import {User} from "./user.model";
import {Observable} from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'users-list',
  template: `
  <div>
    <ul class="usersList">
      <li *ngFor="let user of users">
        {{user.username}}
      </li>  
    </ul>
  </div>`
})
export class UsersListComponent implements OnInit {
  users:User[];
  @Input() private refreshList:Observable<any>;

  ngOnInit() {
    if (this.refreshList && this.refreshList.subscribe) {
      this.refreshList.subscribe(()=> {
        this.getUsers();
      });
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
