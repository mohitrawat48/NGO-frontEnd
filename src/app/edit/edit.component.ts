import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Admin } from "./../admin";
import { AdminService } from "./../adminservice";
import { Observable } from "rxjs";
import { PassUserInfoService } from "../pass-user-info.service";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  public newevent: any;
  public user_item: any = {};

  constructor(
    private _Service: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private userinfoservice: PassUserInfoService
  ) {
    this.newevent = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      role: new FormControl("")
    });
  }

  onSubmit() {
    const result = this.newevent.value as Admin;
    console.log(result);
    this._Service.putUserByID(this.user_item["_id"], result).subscribe(res => {
      console.log(res);
      this.router.navigate(["../user-mgmt"], {
        relativeTo: this.activatedRoute
      });
    });
  }

  ngOnInit() {
    this.user_item = this.userinfoservice.fetch_item();
    console.log(this.user_item);
  }
}
