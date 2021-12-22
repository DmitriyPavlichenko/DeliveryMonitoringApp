import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {User} from "@app/authorization/_models";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  @Input() user: User;

  constructor(private employeeService: EmployeeService) { }

  public getEmployee(phoneNumber: string): Employee {
    let employee: Employee;
    this.employeeService.getEmployee(phoneNumber).subscribe(
      (response: Employee) => {
        employee = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return employee;
  }

  public getEmployees(): Employee[] {
    let employees: Employee[];
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return employees;
  }

  public addEmployee(employee: Employee): void {
    this.employeeService.addEmployee(employee);
  }

  public deleteEmployee(phoneNumber: string): void {
    this.employeeService.deleteEmployee(phoneNumber);
  }


  ngOnInit(): void {
    this.employeeService.authorize(this.user)
  }
}
