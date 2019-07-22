import { Component, OnInit } from "@angular/core";
import { AdminService } from "./../adminservice";
@Component({
  selector: "app-user-mgmt",
  templateUrl: "./user-mgmt.component.html",
  styleUrls: ["./user-mgmt.component.css"]
})
export class UsermgmtComponent implements OnInit {
  public admin = [];
  constructor(private _adminService: AdminService) {}

  ngOnInit() {
    this._adminService.getdetail().subscribe(data => (this.admin = data));
  }
}
