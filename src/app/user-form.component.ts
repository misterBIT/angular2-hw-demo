import {Component, Output, EventEmitter} from '@angular/core';
import {ControlGroup, Validators, Control, FormBuilder} from '@angular/common';
import {UserService} from "./shared/user.service";
@Component({
  moduleId: module.id,
  selector: 'user-form',
  template: `<div class="row">
  <h1>Add User</h1>
  <form  [ngFormModel]="registrationForm" (ngSubmit)="onSubmit(form)">
  <div class="form-group" [class.hasError]="name.invalid">
    <label>Username:
      <input required class="form-control" ngControl="name" type="text"/>
    </label>
    <span class="help-block error" *ngIf="name?.touched && name.hasError('required')">Name is required</span>
    <span class="help-block error" *ngIf="name?.touched && name.hasError('minlength')">Name must be longer than 2 chars</span>
    <span class="help-block error" *ngIf="name?.touched && name.hasError('pattern')">Name must contain a-z only</span>
  </div>
  <div class="form-group">
    <label>password:
      <input type="password" class="form-control" ngControl="password"/>
    </label>
    <span class="error help-block " *ngIf="password?.touched && password.hasError('required')">password is required</span>
    <span class="error help-block " *ngIf="password?.touched && password.hasError('minlength')">password must be longer than 6 chars</span>
    <span class="error help-block " *ngIf="password?.touched && password.hasError('pattern')">password must contain at least one digit </span>
  </div>
  <div class="form-group">
    <label>email:
      <input type="email" class="form-control" ngControl="email"/>
    </label>
    <span class="error help-block" *ngIf="email?.touched && email.hasError('required')">email required</span>
    <span class="error help-block " *ngIf="email?.touched && email.hasError('format')">email is in invalied format</span>
  </div>
  <button class="btn btn-primary" type="submit" [disabled]="!registrationForm?.valid">Submit</button>
</form></div>
`
})
export class UserFormComponent {
  @Output() private userSaved = new EventEmitter();
  registrationForm:ControlGroup;
  name:Control;
  email:Control;
  password:Control;

  onSubmit() {
    this.serverService.save(this.registrationForm.value).subscribe((res)=> {
      this.userSaved.emit('userSaved');
    });
  }

  constructor(private serverService:UserService, private builder:FormBuilder) {

    this.name = new Control('', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z].{2,}')]));
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));

    this.registrationForm = builder.group({
      name    : this.name,
      email   : this.email,
      password: this.password
    });
  }

}
