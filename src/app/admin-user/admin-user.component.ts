import { Component, OnInit } from "@angular/core";
import { PassUserInfoService } from "../pass-user-info.service";
@Component({
  selector: "app-admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.css"]
})
export class AdminUserComponent implements OnInit {
  private user_info: any;
  constructor(private userinfoservice: PassUserInfoService) {}

  ngOnInit() {
    this.user_info = this.userinfoservice.fetch_data();
  }
}
