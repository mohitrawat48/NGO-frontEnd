import { Component, OnInit } from '@angular/core';
import { AdminService } from './../adminservice';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  gotouser() {
    this.router.navigate(['/applist']);
  }
}
