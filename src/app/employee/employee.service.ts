import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {environment} from "@environments/environment";
import {User} from "@app/authorization/_models";

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

  public getEmployee(phoneNumber: String): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/api/v1/supply/employee/find?${phoneNumber}`, this.httpOptions);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/api/v1/supply/employee/findall`, this.httpOptions);
  }

  public addEmployee(employee: Employee) {
    this.http.post(`${this.apiServerUrl}/api/v1/supply/employee`, employee, this.httpOptions);
  }

  public deleteEmployee(phoneNumber: string) {
    this.http.delete(`${this.apiServerUrl}/api/v1/supply/employee?${phoneNumber}`, this.httpOptions)
  }
}
