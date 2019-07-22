import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Admin } from "./../admin";
import { AdminService } from "./../adminservice";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public selectedID;
  public idX2;
  constructor(
    private _Service: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idX = this.route.snapshot.paramMap.get('id');
    this.idX2 = idX;
  }

  onSubmit() {
    this._Service.deleteUser(this.idX2).subscribe(res => {
      console.log(this.selectedID);
      // response from REST API call
      console.log(res);
    });
    this.router.navigate(["../user-mgmt"], {
      relativeTo: this.activatedRoute
    });
    this.router.navigate(['/admin-user']);
  }
}
