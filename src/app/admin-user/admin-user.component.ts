import { Component, OnInit } from "@angular/core";
import { PassUserInfoService } from "../pass-user-info.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.css"]
})
export class AdminUserComponent implements OnInit {
  private user_info: any;
  constructor(private userinfoservice: PassUserInfoService, private router: Router) {}

  ngOnInit() {
    this.user_info = this.userinfoservice.fetch_data();
  }

  log_out() {
    this.userinfoservice.log_out();
    localStorage.removeItem("cart");
    this.router.navigate(["/login"]);
  }
}
