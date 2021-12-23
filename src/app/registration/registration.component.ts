import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  login: string | undefined;
  password: string | undefined;

  constructor() { }

  onSubmit(f: any) {
    console.log('wowkr')
  }
}
