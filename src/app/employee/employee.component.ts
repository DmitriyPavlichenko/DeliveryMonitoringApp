import {Component, OnInit} from '@angular/core';
import {EmployeeRole, ResponseEmployee} from "./responseEmployee";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {User} from "@app/authorization/_models";
import {BehaviorSubject} from "rxjs";
import {RequestEmployee} from "@app/employee/requestEmployee";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  user: User = (new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value;
  constructor(private employeeService: EmployeeService,
              private modalService: NgbModal) { }

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
    alert(firstName + lastName + role + phoneNumber)
    let employee: RequestEmployee = new RequestEmployee(firstName, lastName, role, phoneNumber);
    this.employeeService.addEmployee(employee).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    window.location.reload();
  }

  public deleteEmployee(phoneNumber: string): void {
    this.employeeService.deleteEmployee(phoneNumber).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    window.location.reload();
    this.getEmployees()
  }


  ngOnInit(): void {
    this.employeeService.authorize(this.user);
    this.getEmployees();
  }

  public printReport(): void {
    let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    let tableSelect = document.getElementById('employeers');
    let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
    let downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
    downloadLink.download = 'employee-report.xls'
    downloadLink.click();
    document.body.removeChild(downloadLink)
  }

  closeResult = ''
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
