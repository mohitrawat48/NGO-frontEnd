import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Admin } from "./../admin";
import { AdminService } from "./../adminservice";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  public newevent: any;
  constructor(
    private _Service: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.newevent = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      role: new FormControl("")
    });
  }

  ngOnInit() {}

  onSubmit() {
    const result = this.newevent.value as Admin;
    this._Service.postUser(result).subscribe(res => {
      console.log(res);
      this.router.navigate(["../user-mgmt"], {
        relativeTo: this.activatedRoute
      });
    });
  }
}
