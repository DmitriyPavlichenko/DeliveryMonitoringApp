import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ordering} from "./ordering";
import {User} from "@app/authorization/_models";

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
  apiServerUrl = environment.apiUrl;

  private httpOptions: { headers: HttpHeaders; }
  public authorize(user: User) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
      })
    };
  }

  constructor(private http: HttpClient) { }

  public getOrdering(uuid: String): Observable<Ordering> {
    return this.http.get<Ordering>(`${this.apiServerUrl}/api/v1/warehouse/ordering/find?${uuid}`, this.httpOptions);
  }

  public getOrderings(): Observable<Ordering[]> {
    return this.http.get<Ordering[]>(`${this.apiServerUrl}/api/v1/warehouse/ordering/findall`, this.httpOptions);
  }

  public addOrdering(employee: Ordering) {
    this.http.post(`${this.apiServerUrl}/api/v1/warehouse/ordering`, employee, this.httpOptions);
  }

  public deleteOrdering(uuid: string) {
    this.http.delete(`${this.apiServerUrl}/api/v1/warehouse/ordering?${uuid}`, this.httpOptions)
  }
}
