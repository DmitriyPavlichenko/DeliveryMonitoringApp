import {Component, Input, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {Department} from "@app/department/department";
import {DepartmentService} from "@app/department/department.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() user: User;

  constructor(private departmentService: DepartmentService) { }

  public getDepartment(address: string): Department {
    let department: Department;
    this.departmentService.getDepartment(address).subscribe(
      (response: Department) => {
        department = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return department;
  }

  public getDepartments(): Department[] {
    let departments: Department[];
    this.departmentService.getDepartments().subscribe(
      (response: Department[]) => {
        departments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return departments;
  }

  public saveDepartment(department: Department): void {
    this.departmentService.addDepartment(department);
  }

  public deleteDepartment(address: string): void {
    this.departmentService.deleteDepartment(address);
  }

  ngOnInit(): void {
    this.departmentService.authorize(this.user);
  }

}
