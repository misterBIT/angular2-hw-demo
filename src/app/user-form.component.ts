import {Component, Output, EventEmitter} from '@angular/core';
import {ControlGroup} from '@angular/common';
import {UserService} from "./shared/user.service";
import {User} from "./user.model";
@Component({
  moduleId: module.id,
  selector: 'user-form',
  template: `
  <form #form="ngForm" (ngSubmit)="onSubmit(form)">
  <div>
    <label>Username:
      <input required #name="ngForm" [(ngModel)]="user.username" ngControl="username" type="text"/>
    </label>
    <span class="error" *ngIf="!name.valid">Name is invalid</span>
  </div>
  <div>
    <label>password:
      <input type="password" [(ngModel)]="user.password" ngControl="password"/>
    </label>
  </div>
  <div>
    <label>email:
      <input type="text" [(ngModel)]="user.email" ngControl="email"/>
    </label>
  </div>
  <button type="submit">Submit</button>
</form>
`
})
export class UserFormComponent {
  user:User = new User();
  @Output() private userSaved = new EventEmitter();

  onSubmit(obj:ControlGroup) {
    this.serverService.save(obj.value).subscribe((res)=> {
      this.userSaved.emit('userSaved');
    });
  }

  constructor(private serverService:UserService) {
  }

}
