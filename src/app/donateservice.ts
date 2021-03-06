import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Donate } from "src/app/donate";
import { Observable, throwError } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class DonateService {
  private _url: string = "http://localhost:3000/api/donation";
  constructor(private http: HttpClient) {}
  getdonation(): Observable<Donate[]> {
    return this.http.get<Donate[]>(this._url);
  }
  post_donation(donation_info: Donate): Observable<Donate> {
    return this.http.post<Donate>(this._url, donation_info, httpOptions);
  }
}
