import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public reg_data: any = {};
  public message: string;

  constructor(private Auth_service: AuthService) {}

  ngOnInit() {
    this.message = "";
  }

  onSubmit(form_values: any) {
    console.log(form_values);
    this.reg_data["Email"] = form_values["reg_email"];
    this.reg_data["Password"] = form_values["reg_password"];
    this.reg_data["FirstName"] = form_values["reg_first_name"];
    this.reg_data["LastName"] = form_values["reg_last_name"];
    this.Auth_service.signup(this.reg_data).subscribe(
      data => {
        this.message = "Successfully Created Your Account !";
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
