import {NgModule} from "@angular/core";
import {UserFormComponent} from "./user-form.component";
import {UsersListComponent} from "./users-list.component";
import {ApplicationComponent} from "./app.component";
import {UserService} from "./shared/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsernameValidator} from "./unique.validator";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

@NgModule({
	declarations: [UserFormComponent, UsersListComponent, ApplicationComponent],
	providers: [UserService, UsernameValidator],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
	bootstrap: [ApplicationComponent]
})
export class AppModule {
}
