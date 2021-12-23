import { Component } from '@angular/core';
import {RegistrationService} from "@app/registration/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  login: string | undefined;
  password: string | undefined;

  constructor(private registrationService: RegistrationService) { }

  onSubmit(f: any) {
    console.log('works')
  }
   // public createUser(uuid, password) {
   //    this.registrationService.registerUser()
   // }
}
