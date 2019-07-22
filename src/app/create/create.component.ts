import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Admin } from './../admin';
import { AdminService } from './../adminservice';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {
  public newevent:any;
  constructor(private _Service: AdminService, private fb: FormBuilder) {
    this.newevent = new FormGroup({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Email : new FormControl(''),
      Password: new FormControl(''),
      Role: new FormControl('')

    });
   }

  ngOnInit() {
  }

  onSubmit(){
    const result = this.newevent.value as Admin;
    this._Service.postUser(result).subscribe(res => {
      // response from REST API call
      console.log(res);
    });
  }
}
