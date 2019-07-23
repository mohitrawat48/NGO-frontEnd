import { Component, OnInit } from "@angular/core";
import { AdminService } from "./../adminservice";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-user-mgmt",
  templateUrl: "./user-mgmt.component.html",
  styleUrls: ["./user-mgmt.component.css"]
})
export class UsermgmtComponent implements OnInit {
  public admin = [];
  constructor(private _adminService: AdminService) {}

  ngOnInit() {
    this.load_admin();
  }

  load_admin() {
    this._adminService.getdetail().subscribe(data => (this.admin = data));
  }
  delete_user(id: string) {
    this._adminService.deleteUser(id).subscribe(data => {
      this.load_admin();
    });
  }
}
