import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee/employee";
import {EmployeeService} from "./employee/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {DepartmentService} from "./department/department.service";
import {Department} from "./department/department";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'DeliveryMonitoringApp';
  public employees: Employee[] | undefined;
  public departments: Department[] | undefined;

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService) { }



  public getDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: Department[]) => {
        this.departments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
