import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "./department";
import {User} from "@app/authorization/_models";

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

  public getDepartment(address: String): Observable<Department> {
    return this.http.get<Department>(`${this.apiServerUrl}/api/v1/supply/department/find?${address}`, this.httpOptions);
  }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiServerUrl}/api/v1/supply/department/findall`, this.httpOptions);
  }

  public addDepartment(department: Department) {
    this.http.post(`${this.apiServerUrl}/api/v1/supply/department`, department, this.httpOptions);
  }

  public deleteDepartment(address: string) {
    this.http.delete(`${this.apiServerUrl}/api/v1/supply/department?${address}`, this.httpOptions)
  }
}
