import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PassUserInfoService {
  private user_full_name: string = "_user_full_name";
  private user_role: string = "_user_role";
  private user_info: any = {};
  constructor() {}

  save_data(full_name: string, role: string) {
    localStorage.setItem(this.user_full_name, full_name);
    localStorage.setItem(this.user_role, role);
  }

  log_in() {
    localStorage.setItem("logged_in", "true");
  }

  fetch_data(): any {
    this.user_info["user_full_name"] = localStorage.getItem(
      this.user_full_name
    );
    this.user_info["user_role"] = localStorage.getItem(this.user_role);
    return this.user_info;
  }

  check_logged_in(): boolean {
    if (localStorage.getItem("logged_in") != "true") {
      return false;
    } else {
      return true;
    }
  }

  log_out() {
    localStorage.setItem("logged_in", "false");
  }
}
