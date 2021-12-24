import {Component, OnInit} from '@angular/core';
import {EmployeeRole, ResponseEmployee} from "./responseEmployee";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {User} from "@app/authorization/_models";
import {BehaviorSubject} from "rxjs";
import {RequestEmployee} from "@app/employee/requestEmployee";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  user: User = (new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value;
  constructor(private employeeService: EmployeeService) { }

  employee: ResponseEmployee;
  public getEmployee(phoneNumber: string): void {
    this.employeeService.getEmployee(phoneNumber).subscribe(
      (response: ResponseEmployee) => {
        this.employee = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  employees: ResponseEmployee[];
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: ResponseEmployee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public saveEmployee(firstName: string, lastName: string, role: EmployeeRole, phoneNumber: string): void {
    let employee: RequestEmployee = new RequestEmployee(firstName, lastName, role, phoneNumber);
    this.employeeService.addEmployee(employee).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteEmployee(phoneNumber: string): void {
    this.employeeService.deleteEmployee(phoneNumber).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  ngOnInit(): void {
    this.employeeService.authorize(this.user);
    this.getEmployees();
  }

}
