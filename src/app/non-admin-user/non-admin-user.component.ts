import { Component, OnInit } from "@angular/core";

import { PassUserInfoService } from "../pass-user-info.service";

@Component({
  selector: "app-non-admin-user",
  templateUrl: "./non-admin-user.component.html",
  styleUrls: ["./non-admin-user.component.css"]
})
export class NonAdminUserComponent implements OnInit {
  private user_info: any;
  constructor(private userinfoservice: PassUserInfoService) {}

  ngOnInit() {
    this.user_info = this.userinfoservice.fetch_data();
  }
}
