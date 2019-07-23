import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Admin } from "./../admin";
import { AdminService } from "./../adminservice";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public user:any;
  private selectedUser: any;
  public id:string;
  constructor(
    private _Service: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute) { }

    onSubmit() {
      if(this.id == null) {
        this.createUser();
      }
      else{
        this.updateUser(this.id);
      }
    }
    createUser() {
      const result = this.user.value as Admin;
      this._Service.postUser(result).subscribe(          
        (data) => {
          this._Service.getdetail().subscribe(
            (data) => this._Service.admin = data,
            (err) => console.log(err)
          );
        },
        (err) => console.log(err)
      );
      this.router.navigate(['../user-mgmt']);
    }
    updateUser(_id:string){
      let result = this.user.value as Admin;
      result._id = _id;
  
      this._Service.putUserByID(_id, result).subscribe(
        (data) => {
          this._Service.getdetail().subscribe(
            (data) => this._Service.admin = data,
            (err) => console.log(err)
          );
        },
        (err) => console.log(err)
      );
  
      this.router.navigate(['../user-mgmt']);
    }
  
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
      })
  
      if(this.id == null){
        this.user = new FormGroup({
          firstName: new FormControl(""),
          lastName: new FormControl(""),
          email: new FormControl(""),
          password: new FormControl(""),
          role: new FormControl("")
        });
      }
      else{
        this._Service.geteventByID(this.id).subscribe(
          (data) => {
            this.selectedUser = data;
            this.user = new FormGroup({
                firstName: new FormControl(this.selectedUser.firstName),
                lastName: new FormControl(this.selectedUser.lastName),
                email: new FormControl(this.selectedUser.email),
                password: new FormControl(this.selectedUser.password),
                role: new FormControl(this.selectedUser.role),

            })
          },
          (err) => console.log(err)
        );
      }
      // console.log(this.user.value);
    }
  }
