import { Component } from '@angular/core';
import {RegistrationService} from "@app/registration/registration.service";
import {AppUser} from "@app/registration/appUser";
import {BehaviorSubject} from "rxjs";
import {User} from "@app/authorization/_models";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService, private router: Router) {
  }

  public registerUser(user: AppUser): void {
    this.registrationService.registerUser(user).subscribe(
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

  ngOnInit(): void {
    this.registrationService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value);
  }

  onSubmit(f: NgForm) {
      this.router.navigate(['/home']);
  }
}
