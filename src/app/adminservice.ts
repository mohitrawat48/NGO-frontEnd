import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Admin } from "src/app/admin";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

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
      .post<Admin>(
        this._url,
        {
          FirstName: user["firstName"],
          LastName: user["fastName"],
          Email: user["email"],
          Password: user["password"],
          Role: user["role"]
        },
        httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteUser(id: string): Observable<Admin[]> {
    return this.http.delete<Admin[]>(this._url + id).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
