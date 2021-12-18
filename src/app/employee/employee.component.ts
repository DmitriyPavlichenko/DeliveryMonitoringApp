import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  public employees: Employee[] | undefined;
  login: string | undefined;
  password: string | undefined;

  constructor(private employeeService: EmployeeService) { }

  public getEmployees(): void {
    this.employeeService.authorize(this.login, this.password)
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {

  }
}
