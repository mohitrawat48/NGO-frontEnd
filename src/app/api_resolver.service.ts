import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AdminService } from "./adminservice";

@Injectable()
export class Api_Resolver implements Resolve<any> {
  constructor(
    private http: HttpClient,
    private router: Router,
    private adminservice: AdminService
  ) {}

  resolve(): Promise<any> | boolean {
    return false;
  }
}
