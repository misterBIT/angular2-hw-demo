import {Component, Output, EventEmitter} from '@angular/core';
import {ControlGroup} from '@angular/common';
import {UserService} from "./shared/user.service";
import {User} from "./user.model";
@Component({
  moduleId: module.id,
  selector: 'user-form',
  template: `<div class="row">
  <h1>Add User</h1>
  <form #form="ngForm" (ngSubmit)="onSubmit(form)">
  <div class="form-group" [class.hasError]="name.invalid">
    <label>Username:
      <input required class="form-control" #name="ngForm" [(ngModel)]="user.username" minlength="2" pattern="[a-zA-Z].{2,}" ngControl="name" type="text"/>
    </label>
    <span class="help-block error" *ngIf="name?.touched && name?.errors?.required">Name is required</span>
    <span class="help-block error" *ngIf="name?.touched && name?.errors?.minlength">Name must be longer than 2 chars</span>
    <span class="help-block error" *ngIf="name?.touched && name?.errors?.pattern">Name must contain a-z only</span>
  </div>
  <div class="form-group">
    <label>password:
      <input type="password" #password="ngForm" class="form-control" [(ngModel)]="user.password"  required minlength="6"  pattern="(?=.*\d)(?=.*[a-z]).{6,}" ngControl="password"/>
    </label>
    <span class="error help-block " *ngIf="password?.touched && password?.errors?.required">password is required</span>
    <span class="error help-block " *ngIf="password?.touched && password?.errors?.minlength">password must be longer than 6 chars</span>
    <span class="error help-block " *ngIf="password?.touched && password?.errors?.pattern">password must contain at least one digit </span>
  </div>
  <div class="form-group">
    <label>email:
      <input type="text" #email="ngForm" [(ngModel)]="user.email" class="form-control" email ngControl="email"/>
    </label>
    <span class="error help-block" *ngIf="email?.touched && email?.errors?.required">email required</span>
    <span class="error help-block " *ngIf="email?.touched && email?.errors?.format">email is in invalied format</span>
  </div>
  <button class="btn btn-primary" type="submit" [disabled]="!form?.valid">Submit</button>
</form></div>
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
