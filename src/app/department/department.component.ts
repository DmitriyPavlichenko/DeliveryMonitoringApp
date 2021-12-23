import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {Department} from "@app/department/department";
import {DepartmentService} from "@app/department/department.service";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) { }

  department: Department;
  public getDepartment(address: string): void {
    this.departmentService.getDepartment(address).subscribe(
      (response: Department) => {
        this.department = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  departments: Department[];
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

  public saveDepartment(department: Department): void {
    this.departmentService.addDepartment(department);
  }

  public deleteDepartment(address: string): void {
    this.departmentService.deleteDepartment(address);
  }

  ngOnInit(): void {
    this.departmentService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value);
    this.getDepartments()};

}
