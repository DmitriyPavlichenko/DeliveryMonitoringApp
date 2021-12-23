import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestOrdering} from "./requestOrdering";
import {User} from "@app/authorization/_models";
import {ResponseOrdering} from "@app/ordering/responseOrdering";

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

  public getOrdering(uuid: String): Observable<ResponseOrdering> {
    return this.http.get<ResponseOrdering>(`${this.apiServerUrl}/api/v1/warehouse/ordering/find?uuid=${uuid}`, this.httpOptions);
  }

  public getOrderings(): Observable<ResponseOrdering[]> {
    return this.http.get<ResponseOrdering[]>(`${this.apiServerUrl}/api/v1/warehouse/ordering/findall`, this.httpOptions);
  }

  public addOrdering(employee: RequestOrdering): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/v1/warehouse/ordering`, employee, this.httpOptions);
  }

  public deleteOrdering(uuid: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/api/v1/warehouse/ordering?uuid=${uuid}`, this.httpOptions)
  }
}
