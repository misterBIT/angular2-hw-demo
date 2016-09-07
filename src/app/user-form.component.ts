import {Component, Output, EventEmitter} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {UserService} from "./shared/user.service";
import {UsernameValidator} from "./unique.validator";
@Component({
	selector: 'user-form',
	template: `<div class="row">
  <h1>Add User</h1>
  <form [formGroup]="registrationForm" (ngSubmit)="onSubmit(form)">
  <div class="form-group" [class.hasError]="username.invalid">
    <label>Username:
      <input required class="form-control" (keyup)="void" formControlName="username" type="text"/>
    </label>
    <span class="help-block error" *ngIf="username.dirty && username.hasError('required')">Username is required</span>
    <span class="help-block error" *ngIf="username.dirty && username.hasError('uniqueUsername')">Username is already taken</span>
    <span class="help-block error" *ngIf="username?.touched && username.hasError('minlength')">Username must be longer than 2 chars</span>
    <span class="help-block error" *ngIf="username?.touched && username.hasError('pattern')">Username must contain a-z only</span>
  </div>
  <div class="form-group">
    <label>password:
      <input type="password" class="form-control" formControlName="password"/>
    </label>
    <span class="error help-block " *ngIf="password?.touched && password.hasError('required')">password is required</span>
    <span class="error help-block " *ngIf="password?.touched && password.hasError('minlength')">password must be longer than 6 chars</span>
    <span class="error help-block " *ngIf="password?.touched && password.hasError('pattern')">password must contain at least one digit </span>
  </div>
  <div class="form-group">
    <label>email:
      <input type="email" class="form-control" formControlName="email"/>
    </label>
    <span class="error help-block" *ngIf="email?.touched && email.hasError('required')">email required</span>
    <span class="error help-block" *ngIf="email?.touched && email.hasError('format')">email is in invalied format</span>
  </div>
  <button class="btn btn-primary" type="submit" [disabled]="!registrationForm?.valid">Submit</button>
</form></div>
`
})
export class UserFormComponent {
	@Output() private userSaved = new EventEmitter();
	registrationForm: FormGroup;
	username: FormControl;
	email: FormControl;
	password: FormControl;

	onSubmit() {
		this.serverService.save(this.registrationForm.value).subscribe((res)=> {
			this.userSaved.emit('userSaved');
		});
	}

	constructor(private serverService: UserService, private builder: FormBuilder, private uv: UsernameValidator) {

		this.username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]{2,}')], uv.validate);
		this.email = new FormControl('', Validators.required);
		this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));

		this.registrationForm = builder.group({
			username: this.username,
			email: this.email,
			password: this.password
		});
	}

}
