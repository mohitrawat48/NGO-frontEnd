import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { login_model } from "./login_model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import { Register } from "./register";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private base_url: string = "http://localhost:3000";
  private signup_url: string = this.base_url + "/api/user/signup";
  private signin_url: string = this.base_url + "/api/user/signin";

  constructor(private http: HttpClient) {}

  signup(new_user: Register): Observable<Register> {
    return this.http
      .post<Register>(this.signup_url, new_user, httpOptions)
      .pipe(catchError(this.signup_errorHandler));
  }

  signup_errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Sign-Up error Received from Server.");
  }

  signin(user_info: login_model): Observable<login_model> {
    return this.http
      .post<login_model>(this.signin_url, user_info, httpOptions)
      .pipe(catchError(this.signin_errorHandler));
  }

  signin_errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Sign-In error Received from Server.");
  }
}
