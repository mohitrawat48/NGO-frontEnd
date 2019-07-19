import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { login_model } from "../login_model";
import { error } from "@angular/compiler/src/util";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form_data: any = {};
  public response: string;
  constructor(private Auth_service: AuthService) {}

  ngOnInit() {}

  onSubmit(form_values: any) {
    this.form_data["email"] = form_values["user_email"];
    this.form_data["password"] = form_values["user_password"];
    this.Auth_service.signin(this.form_data).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  email = new FormControl("");
  password = new FormControl("");

  updateEmail() {
    this.email.setValue("ankit@appdividend.com");
  }

  updatePassword() {
    this.password.setValue("123456");
  }
}
