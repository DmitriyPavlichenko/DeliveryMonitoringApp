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

  employee: Employee;
  public getEmployee(phoneNumber: string): void {
    this.employeeService.getEmployee(phoneNumber).subscribe(
      (response: Employee) => {
        this.employee = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  employees: Employee[];
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
