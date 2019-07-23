import { Component, OnInit } from "@angular/core";
import { AdminService } from "./../adminservice";
import { Router, ActivatedRoute } from "@angular/router";
import { PassUserInfoService } from "../pass-user-info.service";
@Component({
  selector: "app-user-mgmt",
  templateUrl: "./user-mgmt.component.html",
  styleUrls: ["./user-mgmt.component.css"]
})
export class UsermgmtComponent implements OnInit {
  public admin = [];
  constructor(
    private _adminService: AdminService,
    private userinfoservice: PassUserInfoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.load_admin();
  }

  load_admin() {
    this._adminService.getdetail().subscribe(data => (this.admin = data));
  }
  delete_user(item) {
    this.userinfoservice.save_item(item);
    this.router.navigate(["/admin-user/delete"]);
  }
  edit_user(item) {
    this.userinfoservice.save_item(item);
    this.router.navigate(["/admin-user/edit"]);
  }
}
