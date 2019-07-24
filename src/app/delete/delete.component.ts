import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Admin } from "./../admin";
import { AdminService } from "./../adminservice";
import { PassUserInfoService } from "../pass-user-info.service";
@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  public selectedID;
  public idX2;
  public user_item: any = {};
  constructor(
    private _Service: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private userinfoservice: PassUserInfoService,
    private _adminService: AdminService
  ) {}

  ngOnInit() {
    this.user_item = this.userinfoservice.fetch_item();
  }

  onSubmit() {
    this._adminService.deleteUser(this.user_item["_id"]).subscribe(res => {
      this.router.navigate(["/admin-user/user-mgmt"]);
    });
  }
}
