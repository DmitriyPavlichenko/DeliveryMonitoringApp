import {Component} from '@angular/core';
import {RegistrationService} from "@app/registration/registration.service";
import {AppUser} from "@app/registration/appUser";
import {BehaviorSubject} from "rxjs";
import {User} from "@app/authorization/_models";
import {FormGroup, NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {EmployeeService} from "@app/employee/employee.service";
import {ResponseEmployee} from "@app/employee/responseEmployee";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService,
              private router: Router,
              private employeeService: EmployeeService) {
  }


  public registerUser(employee: ResponseEmployee, password: string): void {
    let registeredUser = new AppUser(employee.uuid, password);
    this.registrationService.registerUser(registeredUser).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteUser(uuid: string): void {
    this.registrationService.deleteUser(uuid).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public employees: ResponseEmployee[];
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

  ngOnInit(): void {
    this.registrationService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value);
    this.getEmployees();
  }

  onSubmit(f: NgForm) {
    // let user: AppUser = new AppUser(f.)
    // this.registerUser()
    this.router.navigate(['/home']);
  }
}
