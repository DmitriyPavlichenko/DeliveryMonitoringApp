import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseDepartment} from "./ResponseDepartment";
import {User} from "@app/authorization/_models";
import {RequestDepartment} from "@app/department/RequestDepartment";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
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

  public getDepartment(address: String): Observable<ResponseDepartment> {
    return this.http.get<ResponseDepartment>(`${this.apiServerUrl}/api/v1/supply/department/find?address=${address}`, this.httpOptions);
  }

  public getDepartments(): Observable<ResponseDepartment[]> {
    return this.http.get<ResponseDepartment[]>(`${this.apiServerUrl}/api/v1/supply/department/findall`, this.httpOptions);
  }

  public addDepartment(department: RequestDepartment): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/v1/supply/department`, department, this.httpOptions);
  }

  public deleteDepartment(address: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/api/v1/supply/department?address=${address}`, this.httpOptions)
  }
}
