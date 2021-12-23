import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseEmployee} from "./responseEmployee";
import {environment} from "@environments/environment";
import {User} from "@app/authorization/_models";
import {RequestEmployee} from "@app/employee/requestEmployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiUrl;

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

  public getEmployee(phoneNumber: String): Observable<ResponseEmployee> {
    return this.http.get<ResponseEmployee>(`${this.apiServerUrl}/api/v1/supply/employee/find?phoneNumber=${phoneNumber}`, this.httpOptions);
  }

  public getEmployees(): Observable<ResponseEmployee[]> {
    return this.http.get<ResponseEmployee[]>(`${this.apiServerUrl}/api/v1/supply/employee/findall`, this.httpOptions);
  }

  public addEmployee(employee: RequestEmployee): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/v1/supply/employee`, employee, this.httpOptions);
  }

  public deleteEmployee(phoneNumber: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/api/v1/supply/employee?phoneNumber=${phoneNumber}`, this.httpOptions)
  }
}
