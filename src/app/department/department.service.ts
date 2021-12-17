import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "./department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getDepartment(address: String): Observable<Department> {
    return this.http.get<Department>(`${this.apiServerUrl}api/v1/supply/department/find?${address}`);
  }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiServerUrl}api/v1/supply/department/findall`);
  }

  public addDepartment(department: Department) {
    this.http.post(`${this.apiServerUrl}api/v1/supply/department`, department);
  }

  public deleteDepartment(address: string) {
    this.http.delete(`${this.apiServerUrl}api/v1/supply/department?${address}`)
  }
}
