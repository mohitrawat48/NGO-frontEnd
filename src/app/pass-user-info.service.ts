import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PassUserInfoService {
  private user_full_name: string;
  private user_role: string;
  private user_info: any = {};
  constructor() {}

  save_data(full_name: string, role: string) {
    this.user_full_name = full_name;
    this.user_role = role;
  }

  fetch_data(): any {
    this.user_info["user_full_name"] = this.user_full_name;
    this.user_info["user_role"] = this.user_role;
    return this.user_info;
  }
}
