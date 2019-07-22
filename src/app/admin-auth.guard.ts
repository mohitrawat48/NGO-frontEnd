import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from "@angular/router";

import { PassUserInfoService } from "./pass-user-info.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminAuthGuard implements CanActivate {
  private user_info: any = {};

  constructor(private router: Router, private userinfoservice: PassUserInfoService) {}

  canActivate(): boolean {
    this.user_info = this.userinfoservice.fetch_data();
    if (this.userinfoservice.check_logged_in() != true) {
      this.router.navigate(["/login"]);
      return false;
    }
    if (this.user_info["user_role"] != "admin") {
      this.router.navigate(["/non-admin-user"]);
      return false;
    }

    return true;
  }
}
