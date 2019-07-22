import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Admin } from "src/app/admin";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  private _url: string = "http://localhost:3000/api/user";
  constructor(private http: HttpClient) {}
  getdetail(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this._url).pipe(catchError(this.errorHandler));
  }
  postUser(user: Admin): Observable<Admin> {
    return this.http
      .post<Admin>(this._url, {
        firstName: user.FirstName,
        lastName: user.LastName,
        email: user.Email,
        password: user.Password,
        adminRole: user.Role
      })
      .pipe(catchError(this.errorHandler));
  }

  deleteUser(id: string): Observable<Admin[]> {
    return this.http.delete<Admin[]>(this._url + id).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
