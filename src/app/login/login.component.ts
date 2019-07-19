import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form_data: any = {};

  constructor(private Auth_service: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form_values: any) {
    this.form_data["email"] = form_values["user_email"];
    this.form_data["password"] = form_values["user_password"];
    this.Auth_service.signin(this.form_data).subscribe(
      data => {
        console.log(data);
        if (data["user_type"] == "non-admin") {
          this.router.navigate(["/non-admin-user"]);
        } else {
          this.router.navigate(["/admin-user"]);
        }
      },
      error => console.log(error)
    );
  }
}
