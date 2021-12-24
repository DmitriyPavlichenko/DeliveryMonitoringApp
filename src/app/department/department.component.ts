import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {ResponseDepartment} from "@app/department/ResponseDepartment";
import {DepartmentService} from "@app/department/department.service";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {RequestDepartment} from "@app/department/RequestDepartment";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService,
              private modalService: NgbModal) { }

  responseDepartment: ResponseDepartment;
  public getDepartment(address: string): void {
    this.departmentService.getDepartment(address).subscribe(
      (response: ResponseDepartment) => {
        this.responseDepartment = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  responseDepartments: ResponseDepartment[];
  public getDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: ResponseDepartment[]) => {
        this.responseDepartments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public saveDepartment(address: string): void {
    let department: RequestDepartment = new RequestDepartment(address)
    this.departmentService.addDepartment(department).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteDepartment(address: string): void {
    this.departmentService.deleteDepartment(address).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.departmentService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value);
    this.getDepartments()
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

}
