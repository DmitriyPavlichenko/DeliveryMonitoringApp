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
  public employees: Employee[] | undefined;
  @Input() user: User;

  constructor(private employeeService: EmployeeService) { }

  public getEmployees(): void {
    this.employeeService.authorize(this.user)
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
