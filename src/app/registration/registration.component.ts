import {Component} from '@angular/core';
import {User} from "@app/authorization/_models";
import {RegistrationService} from "@app/registration/registration.service";
import {AppUser} from "@app/registration/appUser";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService) { }


  public registerUser(user: AppUser): void {
    this.registrationService.registerUser(user);
  }

  public deleteUser(uuid: string): void {
    this.registrationService.deleteUser(uuid);
  }


  ngOnInit(): void {
    this.registrationService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
  }
}
