import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {OrderingService} from "@app/ordering/ordering.service";
import {RequestOrdering} from "@app/ordering/requestOrdering";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ResponseOrdering} from "@app/ordering/responseOrdering";
import {DepartmentService} from "@app/department/department.service";
import {ResponseDepartment} from "@app/department/ResponseDepartment";
import {EmployeeService} from "@app/employee/employee.service";
import {ResponseEmployee} from "@app/employee/responseEmployee";
import {ProductService} from "@app/product/product.service";
import {ResponseProduct} from "@app/product/responseProduct";
import {ProductUnit} from "@app/ordering/productuint";

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {
  public requestOrdering: RequestOrdering;

  constructor(private orderingService: OrderingService,
              private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private productService: ProductService) {
  }

  public departmentsFromDB: ResponseDepartment[];

  private getDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: ResponseDepartment[]) => {
        this.departmentsFromDB = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public employeesFromDB: ResponseEmployee[];

  private getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: ResponseEmployee[]) => {
        this.employeesFromDB = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public productsFromDB: ResponseProduct[];

  private getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: ResponseProduct[]) => {
        this.productsFromDB = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  responseOrdering: ResponseOrdering;

  public getOrdering(name: string): void {
    this.orderingService.getOrdering(name).subscribe(
      (response: ResponseOrdering) => {
        this.responseOrdering = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  responseOrderings: ResponseOrdering[];

  public getOrderings(): void {
    this.orderingService.getOrderings().subscribe(
      (response: ResponseOrdering[]) => {
        this.responseOrderings = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public saveOrdering(productUnitList: ProductUnit[], employeeUuid: string, departmentUuid: string, date: Date): void {
    let ordering: RequestOrdering = new RequestOrdering(productUnitList, employeeUuid, departmentUuid, date);
    this.orderingService.addOrdering(ordering).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteOrdering(name: string): void {
    this.orderingService.deleteOrdering(name).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  ngOnInit(): void {
    this.orderingService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
    this.getOrderings();
    this.getDepartments();
    this.getEmployees();
    this.getProducts();
  }
}
